/* 
函数防抖: 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。

函数防抖的原理: 通过闭包保存一个标记来保存 setTimeout 返回的值，
每当用户输入的时候把前一个 setTimeout clear 掉，然后又创建一个新的 setTimeout，
这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数了。
*/
  
/**
 *
 *
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
function deBounce (fn,delay) {
  let timeout = null;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this,arguments)
    },delay)
  }
}  
