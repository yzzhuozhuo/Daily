// 同步任务 异步任务
/* 
js分为同步任务和异步任务
同步任务都在主线程上执行，形成一个执行栈
主线程之外，事件触发线程管理这一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件
一旦执行栈中所有的同步任务执行完毕吗（此时js引擎空闲），
系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行
*/
// 微任务 microtask new Promise()
// 宏任务 macrotask setTimeout() setInterval()
// 当当前的执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件，
// 同一次事件循环中微任务永远在宏任务之前执行

setTimeout(function () {
  console.log(2)
}, 0)

new Promise((reslove, reject) => {
  console.log(1);
  for (var i = 0; i < 10000; i++) {
    i = 9999 && reslove()
  }
  console.log(3)
}).then(res => {
  console.log(4)
})
console.log(5)

// 1 3 5 4 2

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j)
    })
  })(i)
}

