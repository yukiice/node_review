const service = require('../service/user.service')
const errorType  =  require('../contance/error.type')
const verifyUser = async (ctx,next)=>{
    const {name,password} = ctx.request.body
    //1.不能为空
    if (!name || !password){
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }
    //2.用户不能已存在
    console.log(name,password)
    const res = await service.getUserByName(name)
    console.log(res)
    if (res.length){
        const error = new Error(errorType.USER_ALREADY_EXISTS)
        return  ctx.app.emit('error',error,ctx)
    }
    await  next()
}

module.exports = {
    verifyUser
}

