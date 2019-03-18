/*
原型 原型链
构造函数 原型对象 实例
构造函数都有一个原型对象，构造函数.prototype == 原型对象.prototype
原型对象都包含一个指向构造函数的指针，原型对象.constructor == 构造函数
而实例都包含一个指向原型对象的内部指针，实例.__proto__ == 原型对象.prototype
*/

// 继承的方法

/* 原型链继承 ：利用原型让一个引用类型继承另一个引用类型的属性和方法
 优点：由于方法定义在父类的原型上，复用了父类构造函数的方法
 缺点：子类实例会共享父类构造函数的引用属性
 在创建子类型的实例时，不能像超类型的构造函数传参 */

function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function () {
  return this.property;
}
function SubType() {
  this.subproperty = false;
}
// 继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
}
var instance = new SubType();
// console.log(instance.getSuperValue());

// 原型链继承的问题
function SuperType() {
  this.colors = ['red', 'blue', 'green'];
}
function subType() {

}

// 继承了SuperType
subType.prototype = new SuperType();

var instance1 = new subType();
instance1.colors.push('black');
// console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]
//  包含引用类型值得原型属性会被所有实例共享
var instance2 = new subType();
// console.log(instance2.colors) //. [ 'red', 'blue', 'green', 'black' ]

/*
借用构造函数：在子类型构造函数的内部调用超类型构造函数
优点：子类实例不共享父类构造函数引用类型的属性
     子类构造函数中可以向父类构造函数传递参数
缺点：方法都是在构造函数中定义，因此函数的复用就无从谈起了
      父类的方法不能复用：由于方法在父类构造函数中定义，导致方法不能复用
      因为每次创建子类实例都要创建一遍方法
*/

function SuperType() {
  this.colors = ['red', 'blue', 'green'];
}

function subType() {
  // 继承了SuperType
  SuperType.call(this);
}

var instance1 = new subType();
instance1.colors.push('black');
// console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]

var instance2 = new subType();
// console.log(instance2.colors) // [ 'red', 'blue', 'green' ]

function SuperType(name) {
  this.name = name;
  // this.colors = ['red','blue','green']
}

function subType() {
  // 继承了SuperType,同时还传了参数
  SuperType.call(this, 'Nicholas');
  // 实例属性
  this.age = 29;
}

var instance = new subType();
// console.log(instance.name, instance.age)
/* 
组合继承：也叫伪经典继承，指的是将原型链和借用构造函数的技术组合在一起，从而发挥二者之长
使用原型链实现对原型对象属性和方法的继承，而通过借用构造函数来实现对实例属性的继承
优点：即通过在原型上定义的方法实现了函数复用，又能保证每个实例都有它自己的属性
缺点：调用了两次父类的构造方法，会存在一份多于的父类实例属性
*/

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function subType(name, age) {
  // 继承SuperType
  SuperType.call(this, name);

  // 实例属性
  this.age = age;
}

// 继承方法
subType.prototype = new SuperType();
subType.prototype.constructor = constructor;
subType.prototype.sayAge = function () {
  console.log(this.age);
}

var instance1 = new subType('Nicholas', 29);
instance1.colors.push('black');
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]
instance1.sayName(); // Nicholas
instance1.sayAge(); // 29

var instance2 = new subType('Greg', 27);
console.log(instance2.colors); // [ 'red', 'blue', 'green' ]
instance2.sayName(); // Greg
instance2.sayAge(); // 27

/* 
原型式继承：在object()函数内部，先创建了一个临时性的构造函数，
然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例。
*/

// function object(o) {
//   // 创建一个临时性的构造函数
//   function F() {}
//   // 将传入的对象作为这个构造函数的原型
//   F.prototype = o;
//   // 返回这个临时对象的新实例
//   return new F();
// }

// // 从本质上讲 object() 对传入其中的对象执行了一次浅复制

// var person = {
//   name: 'Nicholas',
//   friends: ['Shelby','Court','Van']
// };

// var anotherPerson = object(person);
// anotherPerson.name = 'Greg';
// anotherPerson.friends.push('Rob');

// var yetAnotherPerson = object(person);
// yetAnotherPerson.name = 'Linda';
// yetAnotherPerson.friends.push('Barbie')

// // console.log(person.friends); // [ 'Shelby', 'Court', 'Van', 'Rob', 'Barbie' ]

// // Object.create() (在传入一个参数的情况下，Object.create() 和 object()方法行为相同)

// var person = {
//   name: 'Nicholas',
//   friends: ['Shelby','Court','Van']
// };

// var anotherPerson = Object.create(person);
// anotherPerson.name = 'Greg';
// anotherPerson.friends.push('Rob');

// var yetAnotherPerson = Object.create(person);
// yetAnotherPerson.name = 'Linda';
// yetAnotherPerson.friends.push('Barbie');

// console.log(person.friends); // [ 'Shelby', 'Court', 'Van', 'Rob', 'Barbie' ]

// Object.create() 第二个参数：每个属性都是通过自己描述符定义的
// 以这种方式指定的任何属性都会覆盖原型对象上的同名属性

var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = Object.create(person, {
  name: {
    value: 'Greg'
  }
});

// console.log(person.name); // 'Greg'

/* 
寄生式继承：即创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，
最后像真的是它做了所有工作一样返回对象。
*/

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function createAnother(original) {
  var clone = object(original);
  clone.sayHi = function() {
    console.log('Hi');
  }
  return clone;
}

var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

anotherPerson = createAnother(person);
anotherPerson.sayHi(); // 'Hi'

/* 
寄生组合式继承：不必为了指定子类型的原型而调用超类型的构造函数，
我们所需要的无非就是超类型原型的一个副本
*/

function inheritProtype(subType,SuperType) {
  var property = object(SuperType.property);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ['red','blue','green'];
}

SuperType.prototype.sayName = function() {
  console.log(this.name);
}

function subType(name,age) {
  SuperType.call(this,name);
  this.age = age;
}

inheritProtype(subType,SuperType);
subType.prototype.sayAge = function() {
  console.log(this.age)
}
