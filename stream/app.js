// stream 写入
const fs = require('fs')
const writer = fs.createWriteStream('./a.txt', {
    flags: 'a',
    start: 4
})

writer.write('什么啊', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('写入成功')
})