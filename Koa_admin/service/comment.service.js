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
        console.log(commentId,momentId)
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
//    查询所有
    async getAllList(){
        try {
            const statement = `SELECT m.id id,m.content content,u.name name, JSON_ARRAYAGG(JSON_OBJECT('id', c.id, 'name', u.name, 'content', c.content)) moment FROM moment m JOIN user u ON m.user_id = u.id JOIN comment c ON c.moment_id = m.id GROUP BY m.id;`
            const res = await  connections.execute(statement)
            return res[0]
        }catch (e) {
            return  e
        }
    }
//    条件查询
    async getListBySome(name,content){
        let statement
        console.log(name,content)
        try {
            if (name && content){
            //    两个条件都有
                statement= `SELECT m.id id,m.content content,JSON_OBJECT('id',u.id,'name',u.name,'content',c.content) author,(SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id) FROM moment m LEFT JOIN user u ON m.user_id =  u.id WHERE u.name = ${name} AND m.content LIKE '%${content}%' `
            }else if(!name){
            //    只有详情搜索
                statement= `SELECT c.id id, u.name name,c.content content  FROM comment c LEFT JOIN user u ON c.user_id =  u.id WHERE c.content LIKE '%${content}%'`
            }else{
            //    根据用户搜索
                statement= `SELECT c.id id, u.name name,c .content content  FROM comment c LEFT JOIN user u ON c.user_id =  u.id WHERE u.name = '${name}'`
            }
            const res = await  connections.execute(statement)
            return res[0]
        }catch (e) {
            return  e
        }
    }
}

module.exports =new CommentService()