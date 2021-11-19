const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const server = http.createServer((req, res) => {
    if (req.url === '/upload') {
        if (req.method === 'POST') {
            req.setEncoding('binary')
            let body = ''
            const boundry = req.headers['content-type'].split(';')[1].replace(' boundary=', '')
            req.on('data', (data) => {
                body += data
            })
            req.on('end', () => {
                //获取img/jepg的位置
                const payload = qs.parse(body, '\r\n', ": ")
                //拿到位置
                const type = payload['Content-Type']
                //开始在Img/png位置进行截取
                const typeIndex = body.indexOf(type)
                const typeLength = type.length
                //取出imgdata
                let imgData = body.substring(typeIndex + typeLength)
                imgData = imgData.replace(/^\s\s*/, '')
                //数据处理
                imgData = imgData.substring(0, imgData.indexOf(`--${boundry}--`))
                fs.writeFile('./a.jpeg', imgData, 'binary', (err) => {
                    console.log(err)
                })
                res.end('文件上传成功了')
            })
        }
    }
})

server.listen(7001, () => {
    console.log('开启成功')
})