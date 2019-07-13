let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 6];

// res = [1,2,5];

// function diffArr(arr1, arr2) {
//   let setArr2 = new Set(arr2);
//   return arr1.filter(x => !setArr2.has(x));
// }


let res = arr1.concat(arr2).filter(x => {
  return !arr1.includes(x) || !arr2.includes(x)
})

console.log(res);