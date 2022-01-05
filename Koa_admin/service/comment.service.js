const connections = require('../app/database')
class CommentService {
    async create(id,momentId,content){
        try {
            const statement = `INSERT INTO comment (content,moment_id,user_id) VALUES (?,?,?)`
            const res = await connections.execute(statement,[content,momentId,id])
            console.log(res)
            return res[0]
        }catch (err){
            return err
        }
    }
//    评论
    async reply(id,momentId,commentId,content){
        console.log(commentId)
        try {
            const statement = `INSERT INTO comment (content,moment_id,user_id,comment_id) VALUES (?,?,?,?)`
            const res = await connections.execute(statement,[content,momentId,id,commentId])
            return res[0]
        }catch (err){
            return err
        }

    }
//    更新评论
    async update(commentId,content){
        try {
            const statement = `UPDATE comment SET content = ? WHERE id = ?`
            const res = await  connections.execute(statement,[content,commentId])
            return res[0]
        }catch (err){
            return err
        }
    }
    async Delete(commentId){
        try {
            const statement = `DELETE FROM comment WHERE id = ?`
            const res = await connections.execute(statement,[commentId])
            return res[0]
        }catch (err) {
            return err
        }
    }
}

module.exports =new CommentService()