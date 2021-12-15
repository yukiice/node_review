const connections = require('../app/database')
class UserService {
    //创建用户
    async create(user) {
        const {name,password} = user
        const statement = `INSERT INTO users (name,password) VALUES(?,?);`;
        const res = await  connections.execute(statement,[name,password])
        return res[0]
    }
//    查询用户是否存在
    async getUserByName(name){
        const statement = `SELECT * FROM users WHERE name = ?;`;
        const res = await connections.execute(statement,[name])
        return res[0]
    }

}

module.exports = new UserService()