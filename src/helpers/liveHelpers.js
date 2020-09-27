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
exports.sendOTP = void 0;
const fast_two_sms_1 = __importDefault(require("fast-two-sms"));
exports.sendOTP = (mobileNumber, otp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fast_two_sms_1.default.sendMessage({ authorization: '2cNu1QswTv60O9iohZxMdV7FDrqzSWaXPJ3nKBkgyAm5YeIt8lEBTZt1okR2Gl4CMfpabxHLqN0UzPF8', message: "The otp is" + otp, numbers: [mobileNumber] });
        console.log(response);
    }
    catch (err) {
        console.error(err);
    }
});
