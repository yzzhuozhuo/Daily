/* 
Question:
定义这样一个函数
function repeat(func, times, wait) {
}
参数分别是需要 repeat的函数， repeat的次数，每次repeat的间隔
使用方式如下
调用这个函数能返回一个新函数。

比如传入的是alert， 执行10次，间隔5秒
var repeatedFun = repeat(alert, 10, 5000);
调用返回的这个新函数，如: 

repeatedFun(“hellworld”);

会alert十次 helloworld
*/

// setInterval
function repeat(func, times, wait) {
  return function fun(str) {
      //console.log(str); //helloworld
      var flag = 0;
      var timer = setInterval(() => {
          flag++;
          if (flag === times) {
              clearInterval(timer);
          }
          func(str);
      }, wait);
  }
}
var repeatedFun = repeat(alert, 4, 1000);
repeatedFun('helloworld');

// setTimeout
// function repeat(func, times, wait) {
//     return function fun(str) {
//         //console.log(str); //helloworld
//         var flag = 0;
//         var timer = setTimeout(function () {
//             flag++;
//             if (flag === times) {
//                 clearInterval(timer);
//             }
//             func(str);
//             fun(str);
//         }, wait);
//     }
// }
// var repeatedFun = repeat(console.log, 1 , 1000);
// repeatedFun("helloworld");
