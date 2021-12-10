const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/upload') {
        if (req.method === 'POST') {
            let body = ''
            const fileWater = fs.createWriteStream('./foo.png', {flags: 'a+'})
            req.pipe(fileWater)
            req.on('data', (data) => {
                body += data
                console.log(data.toString())
                fileWater.write(data)
            })
            req.on('end', () => {
                console.log(body)
                console.log('写入成功')
                res.end('文件上传成功啦')
            })
        }
    }
})

server.listen(8000, () => {
    console.log('server is running on 8000')
})