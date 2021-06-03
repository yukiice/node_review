const fs = require('fs')

const filePath = './a.txt'

// 同步操作

// const info = fs.statSync(filePath)
// console.log('后续执行')
// console.log(info)


// 异步执行

// fs.stat(filePath, (err, info) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(info)
// })

// console.log('后续执行')


// promise方式

// fs.promises.stat(filePath).then(info => {
//     console.log(info)
// }).catch(err => {
//     console.log(err);
// })

// console.log('后续执行')