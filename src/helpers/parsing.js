"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToString = exports.convertToJson = void 0;
exports.convertToJson = (str) => {
    return JSON.parse(str);
};
exports.convertToString = (obj) => {
    return JSON.stringify(obj);
};
