const Router = require('koa-router')
const {verifyAuth,verifyPermission} = require("../middleware/auth.middleware");
const {create,detail,getAll,update,Delete,momentAddLabel} = require('../controller/moment.controller')
const {verifyLabelDoesExists} = require("../middleware/label.middleware");
const momentRouter = new Router({prefix:'/moment'})
momentRouter.post('/',verifyAuth,create)
momentRouter.get('/',getAll)
momentRouter.get('/:momentId',detail)
momentRouter.post('/:momentId',verifyAuth,verifyPermission,update)
momentRouter.delete('/:momentId',verifyAuth,verifyPermission,Delete)
momentRouter.post('/:momentId/addlabel',verifyAuth,verifyPermission,verifyLabelDoesExists,momentAddLabel)
module.exports = momentRouter