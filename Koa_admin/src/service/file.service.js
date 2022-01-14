const connections = require('../app/database')
class FileService{
    async fileCreate(filename,mimetype,size,userId){
        try {
            const statement = `INSERT INTO avatar (filename,mimetype,size,user_id) VALUES (?,?,?,?)`
            const res = await  connections.execute(statement,[filename,mimetype,size,userId])
            return res[0]
        }catch (e) {
            return  e
        }
    }
    async saveAvatarByUseId(id,url){
        try {
            const statement = `update user set avatar_url = ? where id = ?`
            const res = await  connections.execute(statement,[url,id])
            return res[0]
        }catch (e){
            return  e
        }
    }
    async getAvatarByUserId(id){
        try {
            const statement = `SELECT * FROM avatar WHERE user_id = ?`
            const res = await  connections.execute(statement,[id])
            return  res[0]
        }catch (e) {
            return e
        }
    }
}

module.exports = new FileService()