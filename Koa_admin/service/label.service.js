const connections = require('../app/database')
class LabelService{
    async create(name){
        try {
            const statement = `INSERT INTO label (name) VALUES (?)`
            const res = await  connections.execute(statement,[name])
            return res[0]
        }catch (e) {
            return  e
        }
    }
//    查看标签是否存在
    async doesItExist(name){
        try {
            const statement = `SELECT * FROM label WHERE name = ?`
            const res= await connections.execute(statement,[name])
            return res[0]
        }catch(e){
            console.log(e,'error')
            return false
        }
    }

//    给动态插入标签
    async addMomentLabel(momentId,labels){
            for (const momentIdElement of labels.split(',')) {
                try {
                    const statement = `INSERT INTO moment_label (moment_id,label_id) VALUES (?,?)`
                    await  connections.execute(statement,[momentId,momentIdElement])
                }catch (e){
                    return e
                }
            }
            return  '添加成功'
    }

    //    查询所有
    async getAllList(){
        try {
            const statement = `SELECT l.id id,l.name name FROM label l`
            const res = await  connections.execute(statement)
            return res[0]
        }catch (e) {
            return  e
        }
    }
//    条件查询
    async getListBySome(name){
        try {
            const statement = `SELECT SELECT l.id id,l.name name FROM label l WHERE l.name = ?`
            const res = await  connections.execute(statement,[name])
            return res[0]
        }catch (e) {
            return  e
        }
    }
}


module.exports = new LabelService()