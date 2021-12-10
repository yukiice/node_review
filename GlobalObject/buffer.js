const fs = require("fs");
const sharp = require('sharp')
const message = 'yukiice'
const buffer = Buffer.from(message)
console.log(buffer)
console.log(buffer.toString())

const message1 = '花花'
console.log(Buffer.from(message1, 'utf-8'))


fs.readFile('./a.txt', (err, data) => {
    console.log(data.toString('utf8'))
})

//读取图片文件
fs.readFile('./yukiice.jpg', (err, data) => {
    console.log(data)
    fs.writeFile('./newyukiice.jpg', data, (err) => {
        console.log(err)
    })
})


