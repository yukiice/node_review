const connections = require('../app/database')
class AuthService{
    async checkMoment(tableName,momentId,id){
        try {
            const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?`;
            const [result] = await  connections.execute(statement,[momentId,id])
            return result.length !== 0
        }catch(e){
            return false
        }
    }
}
module.exports = new  AuthService()
