const errorType = require('../contance/error.type')
const errorHandle = (error, ctx) => {
    let status, message
    console.log(error.message,'2')
    switch (error.message) {
        case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400;
            message = '用户名或者密码不能为空';
            break;
        case errorType.USER_ALREADY_EXISTS:
            status = 409;
            message = '用户已存在';
            break;
        case errorType.USER_DOES_NOT_EXISTS:
            status = 409;
            message = '用户不存在';
            break;
        case errorType.PASSWORD_IS_INCORRENT:
            status = 409;
            message = '密码错误';
            break;
        case errorType.UN_AUTHORIZATION:
            status = 401;
            message = 'token无效';
            break;
        default:
            status = 404
            message = 'NOT FOUND'
    }
    ctx.status = status
    ctx.body = message
}

module.exports = errorHandle