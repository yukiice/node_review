const EventEmitter = require('events');

// 创建发射器
const emitter = new EventEmitter()

// 监听一个事件
// addlistener 是on的alias的简写
emitter.on('click', (args) => {
    console.log('监听到1的click事件', args)
})


const listener2 = (args) => {
    console.log('监听到2的click事件', args)
}

emitter.on('click', listener2)

emitter.on('tap', (args) => {
    console.log(args)
})

console.log(emitter.eventNames())

console.log(emitter.listenerCount())

console.log(emitter.listeners('click'))