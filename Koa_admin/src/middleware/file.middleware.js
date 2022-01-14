const {AVATAR_PATH,PICTURE_PATH} = require('../contance/file.path')
const Multer = require("koa-multer");

const avatarUpload = Multer({
    dest:`${AVATAR_PATH}`
})
const pictureUpload = Multer({
    dest:`${PICTURE_PATH}`
})
const avatarHandler = avatarUpload.single('avatar')
const pictureHandler = pictureUpload.single('picture')


module.exports ={
    avatarHandler,
    pictureHandler
}