const Koa = require('koa')
const router = require('koa-router')
const userRouter = require('./router/use')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer')
const app = new Koa()
const port = 3000
const upload = multer()
app.use(logger())
app.use(bodyParser())
app.use(upload.any())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
userRouter.post('/', (ctx, next) => {
    console.log(ctx.req.body);
})


app.listen(port, () => {
    console.log('server is running on http://localhost:3000')
})