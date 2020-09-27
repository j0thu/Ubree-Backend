"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogin = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class UserLogin extends sequelize_1.Model {
}
exports.UserLogin = UserLogin;
UserLogin.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: new sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    otp: {
        type: new sequelize_1.DataTypes.INTEGER(),
        allowNull: true,
    },
    userType: {
        type: new sequelize_1.DataTypes.INTEGER(),
        allowNull: false,
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
    tableName: "UserLogin",
    sequelize: dbconfig_1.sequelize,
});
