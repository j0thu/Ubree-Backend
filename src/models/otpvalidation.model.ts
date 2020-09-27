import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class OtpValidation extends Model{
    public id!: number;
    public mobileNum!: string;
    public otpNum!: number;
    public validityPeriod!: string;
}

OtpValidation.init(
    {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        mobileNum:{
            type: DataTypes.STRING(10),
            allowNull: false
        },
        otpNum:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        validityPeriod: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        }
    },
    {
        tableName: "OtpValidation",
        sequelize
    }
)