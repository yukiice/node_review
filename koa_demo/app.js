const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');
const app = new Koa()
const upload = multer({
    dest: './uploads/'
})
const uploadRouter = new Router({ prefix: '/uploads' })
uploadRouter.post('/', upload.single('file'), (ctx, body) => {
    console.log(ctx.req.file);
    ctx.body = '上传成功'
})

app.use(uploadRouter.routes())

app.listen(3000, () => {
    console.log('running');
})