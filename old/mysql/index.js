const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456789',
    database: 'yukiicehub'
});

const statement = `INSERT INTO product SET ?;`
const phoneJson = require('./phone.json');

for (let phone of phoneJson) {
    connection.query(statement, phone);
}

