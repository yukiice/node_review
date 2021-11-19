const mysql = require('mysql2')
const connection = mysql.createPool({
    host:'localhost',
    port:3306,
    database:'yukiicehub',
    user:'root',
    password:'123456789'
})
const statement = `
SELECT * FROM product;
`
connection.promise().execute(statement).then((res)=>{
    console.log(res)
})