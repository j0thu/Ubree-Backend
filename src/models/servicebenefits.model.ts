import {DataTypes, Model} from "sequelize";
import { NumberLiteralType } from "typescript";
import {sequelize} from "../dbconfig";

export class ServiceBenefits extends Model{
    public id!:number;
    public serviceSubCategoryId!: number;
    public description!: string;
    public order!: number;
}

ServiceBenefits.init(
    {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },
        serviceSubCategoryId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        order:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    },
    {
        tableName:"ServiceBenefits",
        sequelize
    }
)