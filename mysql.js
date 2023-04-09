"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
/*import mysql from 'mysql2';*/
var mysql = require("mysql2");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const pool = mysql.createPool({
    "user": process.env.USER_DATABASE,
    "password": process.env.PASSWORD_DATABASE,
    "database": process.env.DATABASE,
    "host": process.env.HOST_DATABASE,
    "port": Number(process.env.PORT_DATABASE)
});
exports.pool = pool;
