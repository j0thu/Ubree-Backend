import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class ServiceAddOns extends Model{
    public id!:number;
    public serviceSubCategoryId!:number;
    public addOnName!: string;
    public addOnDescription!: string;
    public cost!: number;
}

ServiceAddOns.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },
        serviceSubCategoryId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        addOnName:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        addOnDescription:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        cost:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    },
    {
        tableName:"ServiceAddOns",
        sequelize
    }
)