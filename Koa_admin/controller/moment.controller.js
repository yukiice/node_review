const service = require('../service/moment.service')
const errorType = require("../contance/error.type");

class MomentController {
    async create(ctx, next) {
        try {
            await service.create(ctx.user.id, ctx.request.body)
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
            const res = await service.getAllList(query)
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
        const res = await service.getMomentDetailById(momentId)
        if (res.length) {
            ctx.body = res[0]
            await next()
        }

    }
}

module.exports = new MomentController()