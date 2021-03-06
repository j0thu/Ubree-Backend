import express, { Request, Response, NextFunction } from "express";
import { client } from "../dbconfig";
import { sendOTP } from "../helpers/liveHelpers";
import { convertToJson } from "../helpers/parsing";
import { validatePhoneNumber } from "../helpers/validators";
import { ILoginResponse } from "../interfaces/loginResponse";
import { IOTPValidation } from "../interfaces/otpValidation";
import { generateOTP } from "../jobs/generateOtp";
import { ServiceAgentLogin } from "../models/serviceagentlogin.model";
import { User } from "../models/user.model";
import { UserLogin } from "../models/userlogin.model";
const app = express.Router();

app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  const userResponse: ILoginResponse = req.body;
  const { phoneNumber } = userResponse;
  if (!validatePhoneNumber(phoneNumber)) {
    return res.status(500).json({ error: true });
  }
  //@ts-ignore
  const otpArray: number[] = JSON.parse(await client.getAsync("otpArray"));
  const otp = otpArray.shift();
  client.set("otpArray", JSON.stringify(otpArray));
  if (otpArray.length < 5) {
    generateOTP();
  }

  User.findOne({ where: { mobileNumber: userResponse.phoneNumber } }).then(
    (obj) => {
      let userId: string = "";
      if (obj) {
        res.json({ otp: otp, length: otpArray.length });
      } else {
        User.create({
          mobileNumber: userResponse.phoneNumber,
          userID: userResponse.phoneNumber,
          created: Date(),
          isActive: 1,
        }).then(async (value) => {
          res.json({ otp: otp, length: otpArray.length });
          await sendOTP(userResponse.phoneNumber, otp);
          userId = value.userID;
        });
      }
      client.set(
        userResponse.phoneNumber,
        JSON.stringify({
          otp: otp,
          time: new Date(),
        })
      );

      client.expire(userResponse.phoneNumber, 600);
      if (userResponse.userType === 1) {
        UserLogin.create({
          userId: userId,
          userType: userResponse.userType,
          isActive: 1,
          created: new Date(),
          mobileNumber: userResponse.phoneNumber,
        });
      } else {
        ServiceAgentLogin.create({
          userId: userId,
          userType: userResponse.userType,
          isActive: 1,
          created: new Date(),
        });
      }
    }
  );
});

app.post("/validate-otp", async (req: Request, res: Response) => {
  const response: IOTPValidation = req.body;
  let data = await (client as any).getAsync(response.phoneNumber);
  const finalData = convertToJson(data);
  if (finalData) {
    if (finalData.otp === response.otp) {
      await client.del(response.phoneNumber, function (result, err) {
        console.log(result);
      });
      return res.json({ success: true });
    }
  } else {
    res.status(500).json({ error: true });
  }
});

export const authRoute = app;
