//express 基本感知


const express = require('express')
const app = express()

// app.use((req,res,next)=>{
//     if (req.headers["content-type"] === 'application/json'){
//         req.on('data',(data)=>{
//             console.log(data.toString())
//             const info = JSON.parse(data.toString())
//             req.body = info
//             next()
//         })
//         req.on('end',()=>{
//             res.end('welcome to back')
//             next()
//         })
//     }else{
//         next()
//     }
// })

app.use(express.json())

// extended
// 如果是true 那么用第三方库  qs
// 如果是false 那么使用内置的querystring
app.use(express.urlencoded({extended: true}))

app.post('/login', (req, res, next) => {
    console.log(req.body)
})

app.post('/product', (req, res, next) => {
    console.log(req.body)
})

app.listen(7001, () => {
    console.log('运行成功')
})