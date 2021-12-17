class AuthController{
    async login(ctx,next){
        const {name} = ctx.request.body
        ctx.body = `WELCOME YOU, ${name}`
        await next()
    }

}

module.exports = new  AuthController()