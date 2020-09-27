"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsert = void 0;
const sequelize_1 = require("sequelize");
exports.upsert = (values, condition) => {
    return sequelize_1.Model.findOne({ where: condition }).then(function (obj) {
        // update
        if (obj)
            return obj.update(values);
        // insert
        return sequelize_1.Model.create(values);
    });
};
