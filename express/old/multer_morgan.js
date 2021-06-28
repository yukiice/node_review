// form-data的解析
const path = require('path')
const fs = require('fs')

const express = require('express')
const multer = require('multer')
const morgan = require('morgan')

const app = express()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})

// morgan
const loggerWriter = fs.createWriteStream('./log/access.log', {
    flags: 'a+'
})
app.use(morgan('dev'));     //打印到控制台
app.use(morgan('combined', {stream: loggerWriter}));  // 打印到日志


// app.use(upload.any())

app.post('/login', (req, res, next) => {
    console.log(req.body)
    res.end('登录成功')
})
app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.files)
    res.end('文件上传成功')
})

app.listen(7001, () => {
    console.log('server is running on http://localhost:7001')
})
