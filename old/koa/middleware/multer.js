const path = require('path')
const multer = require('@koa/multer')

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,path.join(__dirname,'/public'))
    },
    filename:function (req,file,cb){
        let type = file.originalname.split('.')[1]
        cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
    }
})

//限制
const limits = {
    fields:10, // 非文件字段的数量
    fileSize:500 * 1024,  // 文件大小 单位b
    files:1  // 文件数量
}

const upload = multer({storage,limits})

module.exports = {upload}
