let users = [{
  id:1, name: '杨卓'
},{
  id:2, name: '杨卓'
},{
  id:3, name: '杨卓'
}]

Array.prototype.myFind = function (conditionFunc) {
  for (let i = 0; i < this.length; i++) {
    if (conditionFunc(this[i], i)) {
      // find return this[i]
      // fingIndex return i
      return this[i];
    }
  }
}

let ret = users.myFind(function (item, index) {
  return item.id === 1
})

console.log(ret);