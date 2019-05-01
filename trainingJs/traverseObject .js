// var host_map = {
//   '10.10.10.001': {
//     mixer: 'wg_01',
//     root: 'wg_01'
//   },
//   '10.10.10.002': {
//     mixer: 'wg_02',
//     root: 'wg_02'
//   },
//   '10.10.10.003': {
//     mixer: 'wg_03',
//     root: 'wg_03'
//   },
//   '10.10.10.004': {
//     mixer: 'wg_04',
//     root: 'wg_04'
//   }
// }
// var ipsObject = [];
// var host_map_keys = Object.keys(host_map);
// // console.log(host_map_keys);
// for (var i in host_map_keys) {
//   // 拿到所有的IP值
//   var ips = host_map_keys[i];
//   // 拿到所有的IP所对应的对象
//   ipsObject.push(host_map[ips]);
// }
// console.log(ipsObject);
// for (var i in ipsObject) {
//   for (var j in ipsObject[i]) {
//     console.log(ipsObject[i][j])
//   }
// }
//创建一个对象
var obj = {
  0: {
    id: '1',
    name: '二狗'
  },
  1: {
    id: '2',
    name: '三狗'
  },
  2: {
    id: '3',
    name: '四狗'
  }
}
//使用for...in  遍历对象
for (var i in obj) {
  // console.log(obj[i])
  //使用for...in获取对象中的键值， j为key，obg[i][j]为value
  for (var j in obj[i]) {
    // console.log(j);
    console.log(obj[i][j])
  }
}

