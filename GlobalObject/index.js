const http = require('http')
const url = require('url')
const qs = require('querystring')
const server = new http.Server((req, res) => {
    req.setEncoding('utf8')
    res.statusCode = 400
    const {pathname, query} = url.parse(req.url)
    console.log(pathname)
    console.log(qs.parse(query));
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    req.on('data', (data) => {
        //这里的data是一个二进制数据
        console.log(data.toString())
    })
    res.end('OK')

})
server.listen(8001, () => {
    console.log('server is running on http://localhost:8001');
})