const momentService = require('../service/moment.service')
const labelService = require('../service/label.service')
const errorType = require("../contance/error.type");

class MomentController {
    async create(ctx, next) {
        try {
            await momentService.create(ctx.user.id, ctx.request.body)
            ctx.status = 200
            ctx.body = {
                code: 0,
                message: '添加成功'
            }
            await next()
        } catch (err) {
            const error = new Error(errorType.ADD_ERROR)
            return ctx.app.emit('error', error, ctx)
        }
    }

//    查看所有
    async getAll(ctx, next) {
        try {
            let query = ctx.query
            query.page = (query.page - 1).toString()
            const res = await momentService.getAllList(query)
            if (res.length) {
                ctx.body = res
                await next()
            }
        } catch (err) {
            const error = new Error(errorType.ADD_ERROR)
            return ctx.app.emit('error', error, ctx)
        }
    }

//    查看详情
    async detail(ctx, next) {
        const {momentId} = ctx.params
        const res = await momentService.getMomentDetailById(momentId)
        if (res.length) {
            ctx.body = res[0]
            await next()
        }

    }

//    更新详情
    async update(ctx,next){
        const {momentId}  = ctx.params
        const {content} =  ctx.request.body
        const res = await  momentService.updateMomentById(content,momentId)
        ctx.body = res[0]
        await next()
    }

//    删除详情
    async Delete(ctx,next){
        const {momentId} = ctx.params
        const res = await  momentService.deleteByMomentId(momentId)
        try {
            ctx.body = '删除成功'
        }catch (err){
            const error = new Error(errorType.CANT_DELETE)
            return ctx.app.emit('error', error, ctx)
        }
        await next()
    }
//    动态添加标签接口
    async momentAddLabel(ctx,next){
        const {momentId} = ctx.params
        const {labels} = ctx
        const res = await labelService.addMomentLabel(momentId,labels)
        ctx.body = res
         await next()
    }
}

module.exports = new MomentController()