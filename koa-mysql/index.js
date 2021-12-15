const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     port: 3306,
//     host: 'localhost',
//     database: 'newtest',
//     user: 'root',
//     password: '123456789'
// })

// const statement = `SELECT * FROM product`

// connection.query(statement, (err, results, fields) => {
//     console.log(results);
// })

const connections = mysql.createPool({
    port: 3306,
    host: 'localhost',
    database: 'newtest',
    user: 'root',
    password: '123456789',
    connectionLimit: 10
})
const statement = `SELECT * FROM product WHERE price > ? AND score > ?`

connections.promise().execute(statement, [6000, 7]).then(([res]) => {
    console.log(res);
})