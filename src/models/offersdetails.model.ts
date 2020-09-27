import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig";

export class OffersDetails extends Model{
    public id!: number;
    public serviceSubCategoryId!: number;
    public offerCaption!: string;
    public offerDescription!: string;
    public offerPercentage!: number;
    public offerCode!:number;
    public startDate!: string;
    public endDate!:string;
}

OffersDetails.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        serviceSubCategoryId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        offerCaption:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        offerDescription:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        offerPercentage:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        offerCode:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        startDate:{
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        endDate:{
            type: DataTypes.DATE,
            defaultValue: new Date(),
        }
    },
    {
        tableName: "OffersDetails",
        sequelize
    }
)