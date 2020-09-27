import {DataTypes, Model} from "sequelize";

import {sequelize} from "../dbconfig";

export class CouponDetails extends Model{
    public id!:number;
    public couponId!:number;
}

CouponDetails.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey:true,
            allowNull: false,
        },
        couponId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
    {
        tableName: "CouponDetails",
        sequelize
    }
)