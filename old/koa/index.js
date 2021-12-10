const Koa = require('koa');

const app = new Koa()

app.use(async (ctx, next) => {
    ctx.body = 'hello'
})

app.listen(7001, () => {
    console.log('server is running on http://localhost:7001')
})
1