
// var kvArray = [{key: 1, value: 10}, 
//   {key: 2, value: 20}, 
//   {key: 3, value: 30}];
// var reformattedArray = kvArray.map(function(obj,index) { 
// console.log(index)
// var rObj = {};
// rObj.id=index;//添加id属性
// rObj[obj.key] = obj.value;//修改属性
// return rObj;
// });
// console.log(reformattedArray);

// var reformattedArray2 = kvArray.map(function(obj,index) { 
// obj.id=index;//添加id属性
// return obj;//如果不返回则输出： Array [undefined, undefined, undefined]
// });
// console.log(reformattedArray2);

var detal = [{
  tag: 'tag_1',
  value: 'value_1'
}, {
  tag: 'tag_2',
  value: 'value_2'
}, {
  tag: 'tag_3',
  value: 'value_3'
}]

var arrObj = [{
  host: 'host_1'
},{
  host: 'host_2'
},{
  host: 'host_3'
}]

var new_detal = [];
detal.forEach(function (items) {
  var dic = {

  };
  arrObj.forEach(function (item) {
    // var key = Object.keys(key)[0];
    // console.log(key.host)
    dic.tag = items.tag;
    dic.value = items.value;
    dic.host = item.host;
  });
  new_detal.push(dic);
});
// console.log(new_detal)

var res = {
  "host_map": {
    "111": {
      "mixer" : 'a'
    },
    "222": {
      "mixer" : 'b'
    },
    "333": {
      "mixer" : 'c'
    },
    "444": {
      "mixer" : 'd'
    }    
  }
}
// for (var i in res) {
//   console.log(res[i])
// }

// console.log(res.host_map)
for (i in res.host_map) {
  // console.log(res.host_map[i].mixer)
}

var key = Object.keys(res.host_map);
console.log(key)
key.forEach((item) => {
  console.log(res.host_map[item])
})

// Object.keys
var person = {
  firstName: 'David',
  lastName: 'Walsh',
  // ...
};
 
Object.keys(person).forEach(function(trait) {
  console.log('Person ', trait,': ', person[trait]);
});