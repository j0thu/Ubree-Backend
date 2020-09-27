import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class TransactionMaster extends Model{
    public id!: number;
    public bookingId!: number;
    public serviceAgencyId!: number;
    public paymentStatus!: number;
    public serviceAgencyCost!: number;
    public uClapCost!: number;
}

TransactionMaster.init(
    {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },
        bookingId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        serviceAgencyId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        paymentStatus: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        serviceAgencyCost:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },
        uClapCost:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        tableName: "TransactionMaster",
        sequelize
    }
)