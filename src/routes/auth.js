"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = __importDefault(require("express"));
const dbconfig_1 = require("../dbconfig");
const liveHelpers_1 = require("../helpers/liveHelpers");
const parsing_1 = require("../helpers/parsing");
const validators_1 = require("../helpers/validators");
const generateOtp_1 = require("../jobs/generateOtp");
const serviceagentlogin_model_1 = require("../models/serviceagentlogin.model");
const user_model_1 = require("../models/user.model");
const userlogin_model_1 = require("../models/userlogin.model");
const app = express_1.default.Router();
app.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userResponse = req.body;
    const { phoneNumber } = userResponse;
    if (!validators_1.validatePhoneNumber(phoneNumber)) {
        return res.status(500).json({ error: true });
    }
    //@ts-ignore
    const otpArray = JSON.parse(yield dbconfig_1.client.getAsync("otpArray"));
    const otp = otpArray.shift();
    dbconfig_1.client.set("otpArray", JSON.stringify(otpArray));
    if (otpArray.length < 5) {
        generateOtp_1.generateOTP();
    }
    user_model_1.User.findOne({ where: { mobileNumber: userResponse.phoneNumber } }).then((obj) => {
        let userId = "";
        if (obj) {
            res.json({ otp: otp, length: otpArray.length });
        }
        else {
            user_model_1.User.create({
                mobileNumber: userResponse.phoneNumber,
                userID: userResponse.phoneNumber,
                created: Date(),
                isActive: 1,
            }).then((value) => __awaiter(void 0, void 0, void 0, function* () {
                res.json({ otp: otp, length: otpArray.length });
                yield liveHelpers_1.sendOTP(userResponse.phoneNumber, otp);
                userId = value.userID;
            }));
        }
        dbconfig_1.client.set(userResponse.phoneNumber, JSON.stringify({
            otp: otp,
            time: new Date(),
        }));
        dbconfig_1.client.expire(userResponse.phoneNumber, 600);
        if (userResponse.userType === 1) {
            userlogin_model_1.UserLogin.create({
                userId: userId,
                userType: userResponse.userType,
                isActive: 1,
                created: new Date(),
                mobileNumber: userResponse.phoneNumber,
            });
        }
        else {
            serviceagentlogin_model_1.ServiceAgentLogin.create({
                userId: userId,
                userType: userResponse.userType,
                isActive: 1,
                created: new Date(),
            });
        }
    });
}));
app.post("/validate-otp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = req.body;
    let data = yield dbconfig_1.client.getAsync(response.phoneNumber);
    const finalData = parsing_1.convertToJson(data);
    if (finalData) {
        if (finalData.otp === response.otp) {
            yield dbconfig_1.client.del(response.phoneNumber, function (result, err) {
                console.log(result);
            });
            return res.json({ success: true });
        }
    }
    else {
        res.status(500).json({ error: true });
    }
}));
exports.authRoute = app;
