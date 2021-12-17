const service = require('../service/user.service')
const errorType = require('../contance/error.type')
const md5Password = require("../utils/password-handle");
const verifyUser = async (ctx, next) => {
    const {name, password} = ctx.request.body
    //1.不能为空
    if (!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
    //2.用户不能已存在
    const res = await service.getUserByName(name)
    if (res.length) {
        const error = new Error(errorType.USER_ALREADY_EXISTS)
        return ctx.app.emit('error', error, ctx)
    }
    await next()
}

const handlePassword = async (ctx, next) => {
    const {password} = ctx.request.body
    ctx.request.body.password = md5Password(password)
    await next()
}

module.exports = {
    verifyUser,
    handlePassword
}