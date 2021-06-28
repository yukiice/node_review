const express = require('express')

const app = express()

app.get('/login/:id', (req, res, next) => {
    console.log(req.params)
    res.send('拿到了params')
})

app.get('/qqq', (req, res, next) => {
    console.log(req.query)
    res.end('获取query成功')
})

app.listen(7001, () => {
    console.log(`server is running on http://localhost:7001`)
})