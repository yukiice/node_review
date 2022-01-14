const connections = require('../app/database')
class MomentService{
    async create(userId,value){
        const statement = `INSERT INTO moment (user_id,content) VALUES (?,?)`
        const res = await connections.execute(statement,[userId,value.content])
        return res[0]
    }
    //查询所有
    async getAllList (query){
        let {page,pageSize} = query
        const statement = `SELECT m.id id,m.content content,JSON_OBJECT('id',u.id,'name',u.name) author,IF(COUNT(c.id),JSON_ARRAYAGG(JSON_OBJECT('id',c.id,'content',c.content,'user',JSON_OBJECT('id',u.id,'name',u.name))),NULL) comments,IF(COUNT(l.id),JSON_ARRAYAGG(JSON_OBJECT('id',l.id,'label',l.name)),NULL) labels FROM moment m LEFT JOIN user u ON u.id = m.user_id LEFT JOIN comment c ON c.moment_id = m.id LEFT JOIN moment_label ml ON ml.moment_id = m.id LEFT JOIN label l ON l.id = ml.label_id GROUP BY m.id LIMIT ? OFFSET ?`;
        // const statement = `SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,JSON_OBJECT('id',u.id,'name',u.name) user FROM moment m LEFT JOIN user u ON m.user_id = u.id LIMIT ?,?`;
        const res = await connections.execute(statement,[pageSize,page])
        console.log(res)
        return res[0]
    }
    //查询单个带用户
    async getMomentDetailById(id){
        const statement = `SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,JSON_OBJECT('id',u.id,'name',u.name) user FROM moment m LEFT JOIN user u ON m.user_id = u.id WHERE m.id = ?`;
        const res  = await  connections.execute(statement,[id])
        return res[0]
    }
//    更新详情
    async updateMomentById(content,momentId){
        const statement = `UPDATE moment SET content = ? WHERE id = ?`
        const res = await  connections.execute(statement,[content,momentId])
        return res
    }
//    删除详情
    async deleteByMomentId(momentId){
        const statement = `DELETE FROM moment WHERE id = ?`
        const res = await  connections.execute(statement,[momentId])
        return res
    }
}

module.exports = new  MomentService()