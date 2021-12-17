const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const userRouter = require('../router/user.router');
const errorHandle = require("./error-handle");
const authRouter = require("../router/auth.router");

const app = new Koa()
// 处理数据
app.use(bodyParser())
    // 路由处理
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(authRouter.routes())
app.use(authRouter.allowedMethods())
app.on('error',errorHandle);
//错误处理注册
module.exports = app