const dotEvn = require('dotenv');
const fs = require("fs");
const path = require('path')
dotEvn.config()

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/public.key'))
const {APP_PORT, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_DATABASE} = process.env
module.exports = {
    APP_PORT,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_DATABASE
}

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY