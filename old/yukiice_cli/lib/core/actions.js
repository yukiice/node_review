// 把callback转换成promise模式
const {
    promisify
} = require('util')


const open = require('open')

const download = promisify(require('download-git-repo'))

const {
    commandSpawn
} = require('../utils/terminal')

const {
    vueRepo
} = require('../../config/repo-config')

const createProjectAction = async (project) => {

    // 判断是unix还是windows
    const command = process.platform === 'win32' ? 'cnpm.cmd' : 'cnpm'
    console.log('please waiting a moment')
    // clone 项目
    await download(vueRepo, project, {clone: true}, (err) => {
        console.log(err)
    })

    // // npm install

    // await commandSpawn(command, ['install'], {
    //     cwd: `./${project}`
    // })


    // // 运行
    // await commandSpawn('npm', ['run', 'dev'], {
    //     cwd: `./${project}`
    // })

    // // open in browser
    // await open('http://localhost:3000/')

}

module.exports = {
    createProjectAction
}