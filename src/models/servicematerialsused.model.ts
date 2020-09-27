import {DataTypes, Model} from "sequelize";
import {sequelize} from "../dbconfig";

export class ServiceMaterialsUsed extends Model{
    public id!: number;
    public serviceSubCategoryId!: number;
    public name!: string;
    public description !: string;
    public brand!: string;
    public order!: number;
}

ServiceMaterialsUsed.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },
        serviceSubCategoryId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        brand:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        order:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    },
    {
        tableName:"ServiceMaterialsUsed",
        sequelize
    }
)