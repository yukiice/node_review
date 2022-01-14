const commentService = require('../service/comment.service')
class commentController{
    async create(ctx,next){
        const {momentId,content} = ctx.request.body
        const {id} =ctx.user
        const  res = await commentService.create(id,momentId,content)
        ctx.body = res
        await  next()
    }
//    回复评论
    async replay(ctx,next){
        const {momentId,content} = ctx.request.body
        const {commentId} = ctx.params
        const {id} = ctx.user
        const res = await  commentService.reply(id,momentId,commentId,content)
        ctx.body = res
        await  next()
    }
//    更新评论
    async update(ctx,next){
        const {content} = ctx.request.body
        const {commentId} = ctx.params
        const res = await commentService.update(commentId,content)
        ctx.body= res
        await  next()
    }
//    删除评论
    async Delete(ctx,next){
        const {commentId} = ctx.params
        const res = await commentService.Delete(commentId)
        ctx.body = res
        await  next()
    }
//    获取评论
    async getAll(ctx,next){
        //做判断
        let res
        const {content,name} = ctx.request.body
        if (Object.keys(ctx.request.body).length ===0){
            res = await  commentService.getAllList()
        }else{
            res = await commentService.getListBySome(name,content)
        }
        ctx.body = res
        await  next()
    }
}





module.exports = new commentController()