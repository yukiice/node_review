// express 默认错误处理

const express = require('express')

const app = express()

const DOES_NOT_EXISTS = "DOES_NOT_EXISTS"
const ALREADY_EXISTS = "ALREADY_EXISTS"

app.post('/go', (req, res, next) => {
    const isLogin = true
    if (!isLogin) {
        res.json(`user  login success`)
    } else {
        next(new Error(DOES_NOT_EXISTS))
    }

})

app.post('/back', (req, res, next) => {
    const isLogin = true
    if (!isLogin) {
        res.json(`user  login success`)
    } else {
        next(new Error(ALREADY_EXISTS))
    }
})

app.use((err, req, res, next) => {
    let status = 400
    let message = ""

    switch (err.message) {
        case DOES_NOT_EXISTS:
            message = 'do not'
            break;
        case ALREADY_EXISTS:
            message = 'already'
            break;
        default:
            message = '404 not  found'
    }

    res.status(status)
    res.json({
        errCode: status,
        errMessage: message
    })
})

app.listen(7001, () => {
    console.log('running')
})