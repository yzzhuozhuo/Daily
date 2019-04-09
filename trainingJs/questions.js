/* 4,给定一个数组order：[{orderId:'',goodsIds:[{goodsId:''}],buyerId:'',goodsNum:''}]
得到，属于buyerId=‘zhangsan’ 且 goodsNum > 3 且 购买了goodsId = 'phoneX' 的订单列表。
至少两种方式。
 */

 // ES6方法 filter条件过滤
var order = [{ orderId: '', goodsIds: [{ goodsId: '' }], buyerId: '', goodsNum: '' }]
order.filter((val) =>
  val.buyerId === 'zhangsan' && val.goodsNum > 3 && val.goodsIds && val.goodsIds.some(subVal =>
    subVal.goodsId === 'phoneX'))

// 通过for循环 把满足条件的push进去
var res = []
for (let i = 0; i < order.length; i++) {
  if (order[i].buyerId === 'zhangsan' && order[i].goodsNum > 3 && order[i].goodsIds.some(subVal => subVal.goodsId === 'phoneX')) res.push(order[i])
}
console.log(res)