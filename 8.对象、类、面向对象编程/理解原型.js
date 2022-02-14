/* 无论何时只要创建一个函数就会自动创建 prototype 属性（指向原型对象）。所有原型对象自动获得名为 constructor 的属性。这个属性指向与之关联的构造函数。例如
Person.prototype.constructor 指向 Person 
自定义构造函数时，原型对象默认只会获得 constructor 属性。其他的所有方法都会继承自 Object。每次调用构造函数创建一个新实例。这个实例的 [[prototype]] 指针就会被赋值为原型对象。
实例与构造函数原型之间有直接的联系，但实例与构造函数之间没有 */
function Person( name, age ) {
	Person.prototype.name = name
	this.age = age
	Person.prototype.sayName = function() {
		console.log( 'hi,i am' + this.name )
	}
}

const Person1 = new Person( 'zdj', 23 )
const Person2 = new Person( 'zdj123123', 23 )

/* 构造函数的 prototype 引用其原型对象。原型对象中的 constructor 又指向构造函数。这两者是互相引用的 */
console.log( Person.prototype.constructor === Person ) // true
console.log('Person.prototype.__proto__.__proto__:', Person.prototype.__proto__.__proto__) // null
console.log('Person.prototype.__proto__ === Object.prototype:', Person.prototype.__proto__ === Object.prototype) // true

/* 检查一个对象是否是构造函数的实例 */
console.log(Person.prototype.isPrototypeOf(Person1)) // true

/* 返回对象内部 __proto__ 的值*/
console.log('Object.getPrototypeOf(Person):', Object.getPrototypeOf(Person1)) // 值为Person.prototype
console.log('Object.getPrototypeOf(Person):', Object.getPrototypeOf(Person1) == Person.prototype) // true
// 取得原型对象的值
console.log(Object.getPrototypeOf(Person2).name) // zdj123123
// 向实例的 [[prototype]] 写入新值
let a = {
	num: 2
}
let b = {
	newNum: 4
}
Object.setPrototypeOf( a, b )
console.log( a ) // 此时 b 的 newNum 属性就存在于 a 的 [[prototype]] 中
/* Object.setPrototypeOf()可能会严重影响代码性能。Mozilla 文档说得很清楚：
“在所有浏览器和JavaScript 引擎中，修改继承关系的影响都是微妙且深远的。这种影响并
不仅是执行 Object.setPrototypeOf()语句那么简单，而是会涉及所有访问了那些修
改过[[Prototype]]的对象的代码。 */
/* 为避免性能下降可以使用 Object.create() 创建一个新对象同时为其指定原型 */

let biped = {  
	numLegs: 2 
}

let person3 = Object.create( biped )
person3.name = 'zdj'
console.log( biped.numLegs, person3 )

/* 在通过对象访问属性时，会按照这个属性的名称开始搜索。搜索开始于对象实例本身。如果在这个
实例上发现了给定的名称，则返回该名称对应的值。如果没有找到这个属性，则搜索会沿着指针进入原
型对象，然后在原型对象上找到属性后，再返回对应的值。因此，在调用person1.sayName()时，会
发生两步搜索。首先，JavaScript 引擎会问：“person1 实例有sayName 属性吗？”答案是没有。然后，
继续搜索并问：“person1 的原型有 sayName 属性吗？”答案是有。于是就返回了保存在原型上的这
个函数。在调用person2.sayName()时，会发生同样的搜索过程，而且也会返回相同的结果。这就是
原型用于在多个对象实例间共享属性和方法的原理。 */
/* 虽然可以查看原型对象的属性，但是不可以修改，如果在实例上添加与原型对象同样的属性名，那么这个属性会遮住原型对象上的属性 */
person3.numLegs = '325435345'
console.log( person3, person3.numLegs)
// 无论是原型上或是实例上的属性，只要一方存在，使用 in 操作符就会返回 true，可以通过对象访问且可以被枚举的属性都会返回 true
console.log('person3:name :', 'name' in person3) // true
// 如果想知道属性是否存在于原型上，可以将 hasOwnProperty() 和 in 结合使用
function protoHasAttribute( object, attr ) {
	return !object.hasOwnProperty( attr ) && (attr in object)
}
console.log('protoHasAttribute( person3,name ):', protoHasAttribute( person3, 'name' )) // false

// 列出所有实例属性，无论是否可以枚举
const keys = Object.getOwnPropertyNames( Person.prototype )
console.log( keys ) // ['constructor', 'name', 'sayName']

// 定义构造函数的属性和方法时可以直接使用对象字面量的方法，但这种方法会将原型对象上的 constructor 覆盖。

function Person6() {}
Person6.prototype = { 
	name: 'Nnnn',
	age: 24,
	sayName() {
		console.log( this.name )
	}
}
Person6.prototype.constructor = Person6 // 改变 Person6 的 constructor
console.log(Person6.prototype)

// 使用 Object.defineProperty 修改 constructor 属性为 Person6，并将 enumerable 修改为 False
Object.defineProperty( Person6.prototype, 'constructor', {
	enumerable: false,
	value: Person6
} )

// 创建实例后，修改构造函数的属性或方法后也会在实例上反映出来。因为实例并不是拷贝了原型对象的副本，实例与原型间的关系就是简单的指针。
const person7 = new Person6()
Person6.prototype.sayHi = () => { console.log('zdjzdjzdjzdj') }
// person7 调用 sayHi 方法首先会从自身找，自身没有又会去原型对象找
person7.sayHi()

// 虽然随时添加属性和方法会反映到实例上，但跟重写原型是两回事，实例的指针[[prototype]]是在调用构造函数时自动赋值的,这个指针即使把原型修改为不同的对象也不会改变。如果重写了原型对象会切断与实例间的联系，但实例引用的仍然是最初的原型。实例只有指向原型对象的指针，没有指向构造函数的指针。
function Person8(){}
const person9 = new Person8()
Person8.prototype = {
	sayHi(){ console.log(' hi ') }
}
// 此时 person9 指向的原型还是最初的原型
// person9.sayHi() // person9.sayHi is not a function

// 原型的不足
// 原型弱化了向构造函数传递初始化参数的能力，这还不是最大的问题，原型最大的问题源自于它的共享特性。我们知道可以在实例添加同名属性遮蔽原来的原型属性。但如果是引用类型则会出问题：
function Person9() {}
Person9.prototype = {
	constructor: Person9,
	arr: ['1','2','3']
}
const person10 = new Person9()
const person11 = new Person9()
person10.arr.push('4')
console.log(person10.arr) // ['1', '2', '3', '4']
console.log(person11.arr) // ['1', '2', '3', '4']
// person10 通过 push 方法向 arr 数组中添加了一个字符串，由于 person10 本身并没有这个属性，所以会直接修改 Person9.prototype.arr。新加的这个字符串也会在 person11 上反映出来。一般不同的实例应该有自己的属性副本。

