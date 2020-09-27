import {DataTypes, Model} from "sequelize";
import {sequelize} from "../dbconfig";

export class BookingStatus extends Model{
  public id!: number;
  public bookingId!: number;
  public status!: number;
  public description!: string;

}

BookingStatus.init(
    {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        bookingId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false
        },
        status: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING(500),
            allowNull: false
        }
    }, {
        tableName:"BookingStatus",
        sequelize,
    }
)