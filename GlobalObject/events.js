const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {
}

const myEventEmitter = new MyEventEmitter()
const listen = (args) => {
    console.log(args)
}
myEventEmitter.on('event', listen)

myEventEmitter.emit('event', 'jack')