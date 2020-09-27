"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAgent = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../dbconfig");
class ServiceAgent extends sequelize_1.Model {
}
exports.ServiceAgent = ServiceAgent;
ServiceAgent.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
    },
    companyName: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    street: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    zipCode: {
        type: sequelize_1.DataTypes.STRING(6),
        allowNull: false,
    },
    registrationNum: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    gstIn: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false,
    },
    tin: {
        type: sequelize_1.DataTypes.STRING(13),
        allowNull: false,
    },
    panNum: {
        type: sequelize_1.DataTypes.STRING(19),
        allowNull: false,
    },
    noOfPeople: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    ownerDetails: {
        type: sequelize_1.DataTypes.STRING(300),
        allowNull: false,
    },
    pf: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    esi: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
    typeOfCompany: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    contractExpiryDate: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: Date(),
    },
    itr: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    servicePartnerType: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    account: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    ifscCode: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    accountType: {
        type: sequelize_1.DataTypes.STRING(100),
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
    tableName: "Service Agent",
    sequelize: dbconfig_1.sequelize,
});
