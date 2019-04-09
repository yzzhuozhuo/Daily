
// 实现：主要利用Object.keys方法获取对象的key,value值，配上forEach循环实现最终想要的结果。
var goodsSpecJSON = [{
  "SpecA": "颜色"
}, {
  "SpecB": "容量"
}, {
  "SpecC": "大小"
}, {
  "SpecD": "尺寸"
}, {
  "SpecE": "套餐"
}];
var goodsSpecList = [{
  c_id: 3133,
  costPrice: 0,
  discountPrice: 0,
  earn: 0,
  etime: null,
  flag: 0,
  goodsDetailCount: 199,
  goodsDetailId: "100PgQ2xy08121409mY27",
  goodsDetailInventory: 199,
  goodsDetailOff: 0,
  goodsDetailPic: "/upload/messageImage/1523281057461_Personal.jpg,/upload/messageImage/1523282906972_Personal.jpg,/upload/messageImage/1523283570897_Personal.jpg",
  goodsDetailPrice: 188,
  goodsDetailSpec: "",
  goodsId: "00Y1kR4r1029X822731o0",
  isHost: 0,
  managerEarn: 0,
  postage: 10,
  profit: 0,
  specA: "红色",
  specB: "32G",
  specC: "小",
  specD: "4.7寸",
  specE: "套餐一",
  unionEarn: 0,
  vipPrice: 0
}, {
  c_id: 3134,
  costPrice: 0,
  discountPrice: 0,
  earn: 0,
  etime: null,
  flag: 0,
  goodsDetailCount: 199,
  goodsDetailId: "100PgQ2xy08121409mY27",
  goodsDetailInventory: 199,
  goodsDetailOff: 0,
  goodsDetailPic: "/upload/messageImage/1523281057461_Personal.jpg,/upload/messageImage/1523282906972_Personal.jpg,/upload/messageImage/1523283570897_Personal.jpg",
  goodsDetailPrice: 188,
  goodsDetailSpec: "",
  goodsId: "00Y1kR4r1029X822731o0",
  isHost: 0,
  managerEarn: 0,
  postage: 10,
  profit: 0,
  specA: "白色",
  specB: "64G",
  specC: "小",
  specD: "5寸",
  specE: "套餐二",
  unionEarn: 0,
  vipPrice: 0
}, {
  c_id: 3135,
  costPrice: 0,
  discountPrice: 0,
  earn: 0,
  etime: null,
  flag: 0,
  goodsDetailCount: 199,
  goodsDetailId: "100PgQ2xy08121409mY27",
  goodsDetailInventory: 199,
  goodsDetailOff: 0,
  goodsDetailPic: "/upload/messageImage/1523281057461_Personal.jpg,/upload/messageImage/1523282906972_Personal.jpg,/upload/messageImage/1523283570897_Personal.jpg",
  goodsDetailPrice: 188,
  goodsDetailSpec: "",
  goodsId: "00Y1kR4r1029X822731o0",
  isHost: 0,
  managerEarn: 0,
  postage: 10,
  profit: 0,
  specA: "黑色",
  specB: "128G",
  specC: "小",
  specD: "4.7寸",
  specE: "套餐一",
  unionEarn: 0,
  vipPrice: 0
}, {
  c_id: 3136,
  costPrice: 0,
  discountPrice: 0,
  earn: 0,
  etime: null,
  flag: 0,
  goodsDetailCount: 199,
  goodsDetailId: "100PgQ2xy08121409mY27",
  goodsDetailInventory: 199,
  goodsDetailOff: 0,
  goodsDetailPic: "/upload/messageImage/1523281057461_Personal.jpg,/upload/messageImage/1523282906972_Personal.jpg,/upload/messageImage/1523283570897_Personal.jpg",
  goodsDetailPrice: 188,
  goodsDetailSpec: "",
  goodsId: "00Y1kR4r1029X822731o0",
  isHost: 0,
  managerEarn: 0,
  postage: 10,
  profit: 0,
  specA: "蓝色",
  specB: "64GG",
  specC: "大",
  specD: "4.5寸",
  specE: "套餐二",
  unionEarn: 0,
  vipPrice: 0
}];

// var keys = {
//     '颜色': ['红色', '白色'],
//     '容量': ['8g', '16g', '32g', '64g'],
//     '尺寸': ['大', '小', '大'],
//     '套餐': ['套餐一', '套餐二', '套餐三']
// };
// //SKU，Stock Keeping Uint(库存量单位)    
// var sku_list = [{
//     'attrs': '红色|16g|big|套餐二',
//     'price': 120
// }, {
//     'attrs': '红色|8g|big|套餐一',
//     'price': 10
// }, {
//     'attrs': '白色|16g|big|套餐二',
//     'price': 28
// }, {
//     'attrs': '红色|64g|small|套餐三',
//     'price': 220
// }, {
//     'attrs': '白色|32g|middle|套餐二',
//     'price': 130
// }, {
//     'attrs': '红色|32g|big|套餐一',
//     'price': 120
// }, ];

var keys = {};
var sku_list = [];
//原数据转换小写
goodsSpecJSON = goodsSpecJSON.map(function (keyo) {
  var key = Object.keys(keyo)[0];
  var newkey = key.substring(0, 1).toLowerCase() + key.substring(1);
  var dic = {};
  dic[newkey] = keyo[key];
  return dic
});
//生成keys
goodsSpecJSON.forEach(function (keyo) {
  var key = Object.keys(keyo)[0]; //['specA']
  var val = keyo[key]; //颜色
  if (!keys.hasOwnProperty(val)) {
    keys[val] = [];
  }
  var hash = {};
  goodsSpecList.forEach(function (item, i) {
    if (hash[item[key]] === undefined) {
      hash[item[key]] = true;
      keys[val].push(item[key]);
    }
    // if (keys[val].indexOf(item[key]) === -1) {
    //     keys[val].push(item[key]);
    // }
  });
});
console.log(keys)
//生成sku_list
goodsSpecList.forEach(function (item) {
  var dic = {
    attrs: ''
  };
  goodsSpecJSON.forEach(function (keyo, j) {
    var key = Object.keys(keyo)[0];
    dic.attrs += item[key] + (j === goodsSpecJSON.length - 1 ? '' : '|');
    dic.price = item.goodsDetailPrice;
    dic.goodsDetailCount = item.goodsDetailCount;
    dic.goodsDetailId = item.goodsDetailId;
  });
  sku_list.push(dic);
});
console.log(sku_list)
