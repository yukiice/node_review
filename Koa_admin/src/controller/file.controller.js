const fileService = require('../service/file.service')
const fs = require('fs')
const {AVATAR_PATH,PICTURE_PATH} = require('../contance/file.path')
class FileController{
    async uploadAvatar(ctx, next) {
        console.log(ctx.req.file)
        const {filename,mimetype,size }= ctx.req.file
        console.log(ctx.req.file)
        const {id} = ctx.user
        const res = await fileService.fileCreate(filename,mimetype,size,id)
        const fileUrl = `upload/avatar/${id}/`
        const res1 = await fileService.saveAvatarByUseId(id,fileUrl)
        ctx.body = res1
        await next()
    }
//    根据用户id拿到头像
    async getAvatarOne(ctx,next){
        const {userId} = ctx.params
        console.log(userId)
        const avatarInfo = await  fileService.getAvatarByUserId(userId)
        console.log(avatarInfo)
        ctx.response.set('content-type',avatarInfo[0].mimetype)
        ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo[0].filename}`)
        await next()
    }
//    存储图像
    async savePictureInfo(ctx,next){
        const files = ctx.req.file
        ctx.body  =`/upload/picture/${files.filename}`
        await  next()
    }
    async getPicture(ctx,next){
        const {name} = ctx.params
        ctx.response.set('content-type','image/jpeg')
        ctx.body = fs.createReadStream(`${PICTURE_PATH}/${name}`)
        await next()
    }
}

module.exports = new  FileController()