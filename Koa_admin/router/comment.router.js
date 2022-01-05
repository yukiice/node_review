const Router = require('koa-router')
const {verifyAuth, verifyPermission} = require("../middleware/auth.middleware");
const {create,replay,update,Delete}  = require('../controller/comment.controller')
const commentRouter = new Router({prefix:'/comment'})
commentRouter.post('/',verifyAuth,create)
commentRouter.post('/:commentId/reply',verifyAuth,replay)
commentRouter.patch('/:commentId',verifyAuth,verifyPermission,update)
commentRouter.delete('/:commentId',verifyAuth,verifyPermission,Delete)
module.exports = commentRouter
