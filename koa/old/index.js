// 文件上传
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser =  require('koa-bodyparser')
const multer = require('@koa/multer')
const {upload} = require('./middleware/multer')
const app = new Koa()
const router = new Router({prefix: '/login'})

app.use(bodyParser())

router.get('/', (ctx, next) => {
    ctx.body = 'what are you doing now'
    ctx.response.body = ctx.request.url
})
    .get('/:id',(ctx,next)=>{
        ctx.body = ctx.request.params
        console.log(Object.prototype.toString.call(ctx.body))
    })
    .post('/',upload.single('file'), async (ctx,next)=>{
        ctx.body =  {
            code:1,
            data:ctx.file
        }
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(7001, () => {
    console.log('hello')
})