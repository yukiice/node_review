// setTimeout(() => {
//     console.log('set1');
//     new Promise((resolve) => {
//         resolve()
//     }).then(() => {
//         new Promise((resolve) => {
//             resolve()
//         }).then(() => {
//             console.log('then4');
//         })
//         console.log('then2');
//     })
// })

// new Promise((resolve) => {
//     console.log('pr1');
//     resolve()
// }).then(() => {
//     console.log('then1');
// })

// setTimeout(() => {
//     console.log('set2');
// })

// console.log(2);

//  pr1 2 then1 set1 then2  then4  set2


console.log('--------')


// async function async1() {
//     console.log('async1 start');
//     await async2()
//     console.log('async1 end');
// }
//
// async function async2() {
//     console.log('async2');
// }
//
// console.log('script start');
//
// setTimeout(() => {
//     console.log('settimeout');
// })
//
// async1()
//
// new Promise((resolve) => {
//     console.log('promise1');
//     resolve()
// }).then(() => {
//     console.log('promise2');
// })
//
// console.log('script end');


// script start  =>   async1 start   => promise1  =>  async2 =>  async1 end   => promise2 => settimeout => script end

// scipt start => async1 start => async2 => promise1 => script end => async1 end =>  promise2  => settimeout

async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}

setTimeout(() => {
    console.log('settimeout0')
})

setTimeout(() => {
    console.log('settimeout2')
}, 300)
setImmediate(() => {
    console.log('setimmediate')
})

process.nextTick(() => {
    console.log('nextTrick1')
})
async1()
process.nextTick(() => {
    console.log('nextTrick2')
})
console.log('script start')
new Promise(resolve => {
    console.log('promise1')
    resolve()
    console.log('promise2')
}).then(function () {
    console.log('promise3')
})
console.log('script end')


// async1 start => async2  => async1 end => script start => promise1 => promise3 => script end => promise2  => nextTrick1 => nextTrick2 => setimmediate => settimeout0  => settimeout2