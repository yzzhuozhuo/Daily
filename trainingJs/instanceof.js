/* 
instanceof 判断原理：就是判断右边变量的prototype在左边变量的原型链上即可
因此instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的prototype。 
*/

function instanceOf(left, right) {
  let rightPrototype = right.prototype;
  let leftProto = left.__proto__;
  while (true) {
    if (leftProto == null) {
      return false;
    }
    if (leftProto == rightPrototype) {
      return true;
    }
    leftProto = left.__proto__;
  }
}
