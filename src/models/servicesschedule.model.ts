import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../dbconfig';

export class ServicesSchedule extends Model{
    public id!: number;
    public serviceSubCategoryId!: number;
    public date!: string;
    public scheduleSlot!: string;
}

ServicesSchedule.init(
    {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },
        serviceSubCategoryId:{
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        scheduleSlot:{
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        tableName: "ServicesSchedule",
        sequelize
    }
)