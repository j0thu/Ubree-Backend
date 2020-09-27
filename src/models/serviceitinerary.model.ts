import {DataTypes, Model} from "sequelize";
import {sequelize} from "../dbconfig";

export class ServiceItinerary extends Model{
    public id!: number;
    public serviceSubCategoryId!: number;
    public caption!: string;
    public description!: string;
    public order!: number
}

ServiceItinerary.init(
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
        caption: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        order:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
    {
        tableName: "ServiceItinerary",
        sequelize
    }
)