const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const errorHandle = require("./error-handle");
const useRouters = require('../router')
const logger  = require('koa-logger')
const app = new Koa()
app.use(logger())
app.useRouters = useRouters
// 处理数据
app.use(bodyParser())
    // 路由处理
app.useRouters()

app.on('error',errorHandle);
//错误处理注册
module.exports = app