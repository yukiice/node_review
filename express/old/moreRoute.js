const express = require('express')
const router = require('./router/')

const app = express()

app.use('/go', router)

app.listen(7001, () => {
    console.log('server is running on 7001');
})