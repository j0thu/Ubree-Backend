"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig_1 = require("../dbconfig");
const parsing_1 = require("./parsing");
const setValue = (key, value) => __awaiter(void 0, void 0, void 0, function* () {
    const stringifiedValue = parsing_1.convertToString(value);
    yield dbconfig_1.client.setAsync(key, stringifiedValue);
});
const getValue = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const value = dbconfig_1.client.getAsync(key);
    return value;
});
