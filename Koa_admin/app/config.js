const dotEvn = require('dotenv');
dotEvn.config()
const {APP_PORT, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_DATABASE} = process.env
module.exports = {
    APP_PORT,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_DATABASE
}