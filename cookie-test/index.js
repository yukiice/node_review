const Koa = require('koa');
const Router = require('koa-router');
const Session = require('koa-session');
const app = new Koa()
const router = new Router()
const session = Session({
    key: 'sessionid',
    maxAge: 10 * 1000,
    signed: false
}, app)
app.use(session)

router.get('/', (ctx, next) => {
    ctx.cookies.set('name', 'yukiice', {
        maxAge: 50 * 1000
    })
    const id = 110
    const name = 'yukiice'
    ctx.session.user = { id, name }
    ctx.body = 'look at network'
})

router.get('/cookie', (ctx, next) => {
    const value = ctx.cookies.get('name')
    ctx.body = value
    console.log(ctx.session.user);
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {

    console.log('server is running');
})