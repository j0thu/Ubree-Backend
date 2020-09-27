"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    userID: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    mobileNumber: {
        type: new sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    isActive: {
        type: new sequelize_1.DataTypes.INTEGER(),
        defaultValue: 0,
    },
    created: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date(),
    },
    createdBy: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    modified: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date(),
    },
    modifiedBy: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
}, {
    tableName: "User",
    sequelize: dbconfig_1.sequelize,
});
