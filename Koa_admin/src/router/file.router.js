const Router =require('koa-router')
const {verifyAuth} = require("../middleware/auth.middleware");
const {uploadAvatar,getAvatarOne,savePictureInfo,getPicture} = require('../controller/file.controller')
const {avatarHandler,pictureHandler} = require('../middleware/file.middleware')
const fileRouter = new  Router({prefix:'/upload'})
fileRouter.post('/avatar',verifyAuth,avatarHandler,uploadAvatar)
fileRouter.get('/avatar/:userId',getAvatarOne)
fileRouter.post('/picture',verifyAuth,pictureHandler,savePictureInfo)
fileRouter.get('/picture/:name',getPicture)
module.exports = fileRouter