const buffer = Buffer.alloc(8, 0)

console.log(buffer)

buffer[0] = 88
buffer[1] = 0x88

console.log(buffer)