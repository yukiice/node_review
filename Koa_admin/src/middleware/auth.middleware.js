const errorType = require("../contance/error.type");
const UserService = require("../service/user.service");
const AuthService = require('../service/auth.service')
const md5Password = require("../utils/password-handle");
const jwt = require('jsonwebtoken')
const {PUBLIC_KEY} = require("../app/config");
//登录验证
const verifyLogin = async (ctx, next) => {
    //获取用户信息
    const {name, password} = ctx.request.body
//    判断账号密码是否为空
    if (!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
//    判断用户是否存在
    const res = await UserService.getUserByName(name)
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
    ctx.user = user
//    一致
    await next()
}

//验证用户是否登录
const verifyAuth = async (ctx,next)=>{
    const authorization  = ctx.headers.authorization
    if (!authorization){
        const error = new Error(errorType.UN_AUTHORIZATION)
        return ctx.app.emit('error',error,ctx)
    }
    const token =  authorization.replace('Bearer ','')
    try {
        ctx.user = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        await  next()
    }catch (err){
        const error = new Error(errorType.UN_AUTHORIZATION)
        ctx.app.emit('error',error,ctx)
    }

}

// 验证用户是否有权限
const verifyPermission  = async (ctx,next)=>{
        const [resourceKey] = Object.keys(ctx.params)
        const tableName = resourceKey.replace('Id','')
        const resourceId = ctx.params[resourceKey]
        const {id} = ctx.user
        try {
            const isPermission = await  AuthService.checkMoment(tableName,resourceId,id)
            if (!isPermission) throw new Error()
            await  next()
        }catch (err) {
            const error = new  Error(errorType.UN_PERMISSION)
            ctx.app.emit('error',error,ctx)
        }
    }

module.exports = {
    verifyLogin,
    verifyAuth,
    verifyPermission
}