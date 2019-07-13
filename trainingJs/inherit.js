// 原型链继承
// 原型链继承存在的问题
// 1.引用类型的属性被所有实例共享 2.在创建Child实例时，不能向Parent传参。
function Parent() {
  this.name = 'kevin';
}
Parent.prototype.getName = function () {
  console.log(this.name);
}
function Child() {

}

Child.prototype = new Parent();
let child1 = new Child();
console.log(child1.getName());

// 借用构造函数（经典继承）
// 借用构造函数的优点：1.避免了引用类型的属性被所有实例共享 2.可以在Child向Parent传参。
// 缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法
function Parent() {
  this.name = ['kevin', 'daisy'];
}

function Child() {
  Parent.call(this);
}

let child1 = new Child();
child1.name.push('yayu');
console.log(child1.name);

let child2 = new Child();
console.log(child2.name);

// 组合继承：原型链继承和经典继承的组合，是JavaScript中最常用的继承。
function Parent(name) {
  this.name = name;
  this.color = ['red','blue','green'];
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

let child1 = new Child('kevin', 18);
child1.color.push('black');
console.log(child1.name);
console.log(child1.age);
console.log(child1.color);

let child2 = new Child('daisy', 18);
console.log(child2.name);
console.log(child2.age);
console.log(child2.color);

// 原型式继承
function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F()
}

// 寄生式继承
function createObj(o) {
  let clone = Object.create(o);
  clone.sayName = function () {
    console.log('Hi')
  }
  return clone;
}

// 继承组合式继承

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  var prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);