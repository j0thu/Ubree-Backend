"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = void 0;
//@ts-ignore
const otp_generator_1 = __importDefault(require("otp-generator"));
const dbconfig_1 = require("../dbconfig");
exports.generateOTP = () => {
    let LIMIT = 100;
    /*
    Generates OTP and sets in the Redis
    */
    let otpArray = [];
    while (LIMIT > 0) {
        const otp = otp_generator_1.default.generate(6, {
            upperCase: false,
            specialChars: false,
            digits: true,
            alphabets: false,
        });
        otpArray.push(otp);
        LIMIT--;
    }
    const stringifiedArray = JSON.stringify(otpArray);
    dbconfig_1.client.set("otpArray", stringifiedArray, function (err, reply) {
        console.log(reply);
    });
};
