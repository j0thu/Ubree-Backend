import {DataTypes, Model} from "sequelize";
import {sequelize} from "../dbconfig";

export class CouponMaster extends Model{
    public id!: number;
    public seqId!:number;
    public couponSeq!: string;
    public validityStartDate!: string;
    public validityEndDate!: string;
}

CouponMaster.init(
    {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },
        seqId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        validityStartDate:{
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        validityEndDate:{
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    },
    {
        tableName: "CouponMaster",
        sequelize
    }
)