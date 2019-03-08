const promise = new Promise((resolve,reject) => {
  // resolve(2)
  reject('erro~')
  console.log('我是新建的promise 我是立即执行promise 我会立即执行')
})
promise.then(res => {
  console.log('成功')
  console.log(res)
})
.catch(err => {
  console.log(err)
})
console.log('我是同步任务')