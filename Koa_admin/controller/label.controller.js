const labelService = require('../service/label.service')
class  labelController{
    async create(ctx,next){
        const {label} = ctx.request.body
        const res = await labelService.create(label)
        ctx.body = res
        await  next()
    }
//    获取所有或者个别
    async getAllOrSome(ctx,next){
        let res
        const {name} = ctx.request.body
        if (Object.keys(ctx.request.body).length ===0){
            res = await  labelService.getAllList()
        }else{
            res = await labelService.getListBySome(name)
        }
        ctx.body = res
        await  next()
    }
}

module.exports = new labelController()