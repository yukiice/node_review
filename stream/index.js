// 流的方式进行读取
const fs = require('fs')
const reader = fs.createReadStream('./a.txt', {
    start: 3,
    end: 5,
    highWater: 2
})

reader.on('data', (data) => {
    console.log(data)
})

reader.on('open', () => {
    console.log('文件被打开')
})

reader.on('close', () => {
    console.log('文件被关闭')
})