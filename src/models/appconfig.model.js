"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class appConfig extends sequelize_1.Model {
}
exports.appConfig = appConfig;
appConfig.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    Name: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    Value: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    Description: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    isActive: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
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
    tableName: "appConfig",
    sequelize: dbconfig_1.sequelize
});
