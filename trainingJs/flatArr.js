/* 
已知如下数组：
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
*/

// 数组去重
let arr = [1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8];

let unique = arr.reduce((init, cur) => {
    if (init.length === 0 || init[init.length - 1] !== cur) {
        init.push(cur)
    }
    return init;
}, [])

console.log(unique);

let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

Array.prototype.flat = function() {
    return [].concat(...this.map(item => Array.isArray(item) ? item.flat() : [item]))
}

Array.prototype.unique = function() {
    return [...new Set(this)]
}

const sort = (a, b) => a - b;

let result = arr.flat().unique().sort(sort);
console.log('result', result) // result [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]