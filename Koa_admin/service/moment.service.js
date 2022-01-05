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
        const statement = `SELECT u.id id,u.name name,JSON_ARRAYAGG(JSON_OBJECT('id',m.id,'content',m.content,'createTime',m.createAt,'updateTime',m.updateAt))content FROM user u LEFT JOIN moment m ON u.id = m.user_id GROUP BY u.id LIMIT ? OFFSET ?`;
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