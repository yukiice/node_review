const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const app = new Koa()
const router = new Router()
const fs = require('fs');

const PRIVATE_KEY = fs.readFileSync('./keys/private.key')
const PUBLIC_KEY = fs.readFileSync('./keys/public.key')
router.get('/', (ctx, next) => {
    const user = { id: 1, name: 'yukiice' }
    const token = jwt.sign(user, PRIVATE_KEY, {
        expiresIn: 30,
        algorithm: 'RS256'
    })
    console.log(token);
})

router.get('/demo', (ctx, next) => {
    const authorization = ctx.header.authorization
    console.log(authorization);
    const token = authorization.replace('Bearer ', '')
    console.log(token);
    try {
        const res = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        ctx.body = res
    } catch (error) {
        ctx.body = '验证不过'
    }
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8000, () => {

})