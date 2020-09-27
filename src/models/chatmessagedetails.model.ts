import {DataTypes, Model} from "sequelize";
import {sequelize} from "../dbconfig";

export class ChatMessageDetails extends Model{
    public id!: number;
    public userId!:number;
    public appUserId!:number;
    public messageDescription!: string;
} 

ChatMessageDetails.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },
        userId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        appUserId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        messageDescription:{
            type: DataTypes.STRING(500),
            allowNull: false
        }
    },
    {
        tableName: "ChatMessageDetails",
        sequelize
    }
)