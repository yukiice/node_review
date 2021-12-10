const express = require('express')
const logger = require('morgan')
const multer = require('multer')
const path = require("path");
const stream = require("stream");
const fs = require("fs");
const port = 3000
const app = express()
const writerStream = fs.createWriteStream('./logs/access.log', {flags: "a+"})
app.use(require("cors")());
app.use(express.json())
app.use(logger('dev', {stream: writerStream}))
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    },
})
const upload = multer({storage})

app.get('/', (req, res, next) => {
    res.send('halo express')
})
app.post('/login', (req, res, next) => {
    console.log(req.query)
    // res.type("application/json")
    res.json({name: req.query.name, age: req.query.age})
    // res.end(JSON.stringify({name:req.query.name,age:req.query.age}))
})
//文件上传
app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.file)
    res.send('上传成功啦')
})
app.post('/register', (req, res, next) => {
    const isExists = true
    if (!isExists) {
        res.json('user register success')
    } else {
        next(new Error('halo'))
    }
})
app.use((err, req, res, next) => {
    let status = 400
    let message = ''
    switch (err.message) {
        case  'halo':
            message = 'user halo'
            break
        default:
            message = 'not found'
    }
    res.status(status)
    res.json({
            errCode: status,
            errMessage: message
        }
    )
})


app.listen(port, () => {
    console.log('server is running on http://localhost:3000/')
})