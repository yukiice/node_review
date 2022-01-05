const Router = require('koa-router')
const {verifyAuth,verifyPermission} = require("../middleware/auth.middleware");
const {create,detail,getAll,update,Delete} = require('../controller/moment.controller')
const momentRouter = new Router({prefix:'/moment'})
momentRouter.post('/',verifyAuth,create)
momentRouter.get('/',getAll)
momentRouter.get('/:momentId',detail)
momentRouter.post('/:momentId',verifyAuth,verifyPermission,update)
momentRouter.delete('/:momentId',verifyAuth,verifyPermission,Delete)
module.exports = momentRouter