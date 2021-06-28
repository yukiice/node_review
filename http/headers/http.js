const http = require('http')
const server = http.createServer((req, res) => {
    const data = new URL('/api', 'http://localhost:7001')
    console.log(data)

})

server.listen(7001, '127.0.0.1', () => {
    console.log('服务器请求成功')
})