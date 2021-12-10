const fs = require('fs')
const path = require('path')
fs.readFile('./a.txt', {encoding: 'utf-8'}, (err, data) => {
    console.log(data)
})

//创建文件夹
const dirname = './yukiices'
// 异步方式判断文件夹是否存在
if (!fs.existsSync(dirname)) {
    fs.mkdir(dirname, (err, data) => {
        console.log(data)
    })
}

// 读取文件夹中的所有文件

function getFiles(dirname) {
    fs.readdir(dirname, {withFileTypes: true}, (err, files) => {
        for (const file of files) {
            // 判断是否是文件夹
            if (file.isDirectory()) {
                // 是文件夹
                const fileName = path.resolve(dirname, file.name)
                getFiles(fileName)
            } else {
                // 不是文件夹，是文件
                console.log(file);
            }
        }
    })
}

getFiles(dirname)


const srcDir = process.argv[2]
console.log(srcDir)