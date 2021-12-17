const errorType = require("../contance/error.type");
const service = require("../service/user.service");
const md5Password = require("../utils/password-handle");
const verifyLogin = async (ctx, next) => {
    //获取用户信息
    const {name, password} = ctx.request.body
//    判断账号密码是否为空
    if (!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
//    判断用户是否存在
    const res = await service.getUserByName(name)
    const user = res[0]
    if (!user) {
        //    不存在
        const error = new Error(errorType.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error', error, ctx)
    }
//    判断密码是否一致
    if (md5Password(password) !== user.password) {
        //不一致
        const error = new Error(errorType.PASSWORD_IS_INCORRENT)
        return ctx.app.emit('error', error, ctx)
    }
//    一致
    await next()
}

module.exports = {
    verifyLogin
}