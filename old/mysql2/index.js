const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'yukiicehub',
    user: 'root',
    password: '123456789'
})
// const statement = `
// SELECT * FROM product WHERE price > 5000;
// `
// connection.query(statement,(err,results,fields)=>{
//     console.log(err)
//     console.log(results)
// })
//预处理
const statement = `
SELECT * FROM product WHERE price > ? AND score > ?;
`
connection.execute(statement, [6000, 7], (err, results) => {
        console.log(results)
})
