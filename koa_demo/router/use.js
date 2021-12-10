const Router = require('koa-router')
const router = new Router({ prefix: '/users' })
router.put('/', (ctx, next) => {
    ctx.response.body = {
        code: 200,
        msg: 'halo'
    }
})
router.patch('/', (ctx, next) => {
    console.log(ctx.req.body)
    ctx.response.body = {
        code: 201,
        msg: 'get'
    }
})

module.exports = router