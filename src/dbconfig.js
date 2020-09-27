"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const bluebird_1 = __importDefault(require("bluebird"));
const redis_1 = __importDefault(require("redis"));
bluebird_1.default.promisifyAll(redis_1.default);
//Initializing Connection
exports.sequelize = new sequelize_1.Sequelize('sqlite::memory:');
exports.client = redis_1.default.createClient();
exports.client.on("error", (err) => {
    console.log(err);
});
// Defining Models
