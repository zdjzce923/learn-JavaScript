/* js 中有些不能被直接开发者访问到的特殊属性 这些属性被用来描述属性的特征 规范会用 [[]] 将属性框起来
属性分为数据属性和访问器属性
1. 数据属性
例如 1. [[Configurable]] 表示属性是否可以通过 delete 删除并重新定义 2. [[Writable]]：表示属性的值是否可以被修改。3. [[Enumerable]] 表示属性是否可以使用 for in 循环返回 4. [[get]] [[set]] 读取属性 更改属性
这里定义了一个 person 对象，同时生成了 name 属性并赋值，此时 [[value]] 特性会被设置为 'zeng'
let person = {
	name : 'zeng'
}

要修改对象的属性特征，就必须使用 Object.defineProperties() 方法，该方法支持传入三个参数 1. 目标对象 2. 属性的名称 3. 描述符对象
描述符对象由 configurable、enumerable、writable 和 value 组成，他们和 JS 内部的特殊属性一一对应，传入对应属性即可设置值
let defineObj = {}
使用 defineProperty 方法设置了描述对象的 value 属性，即定义了默认值并且之后不可修改。
let obj = {}
Object.defineProperty(obj, 'name', { 
	value: 'zengdj',
	configurable: false
})
console.log(obj.name) // zengdj
obj.name = '123213'
console.log(obj.name) // zengdj
 在 configurable 为 false 的情况下，属性不可删除，即使用 delete 删除已经声明的键值，是无效的。
delete obj.name 
console.log(obj.name) // zengdj
Object.defineProperty(obj, 'name', { configurable: true }) // Cannot redefine property: name
在调用Object.defineProperty()时，configurable、enumerable 和writable 的值如果不指定，则都默认为 false。

 */


// 2. 访问器属性
// 访问器属性不包含数据值。它们包含一个获取（getter）函数和一个设置（setter）函数，不过这两个函数不是必需的。在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效的值。在写入访问器属性时，会调用设置函数并传入新值
let book = {
	year_: 2017,
	edition: 1
}
// 访问器属性不可直接定义，必须使用 Object.defineProperty 定义： 
Object.defineProperty(book, 'year', {
	get() {
		return this.year_
	},
	set( newValue ) {
		if( newValue > 2017 ){
			this.year_ = newValue
			this.edition += newValue - 2017
		}
	}
})

console.log(book.year)
book.year = 2019
console.log(book.edition)
// 在此例中，设置了 year_ 属性，表明并不想让使用者直接访问它，另一个属性 year 被定义为访问器属性，在使用 book.year 时能够直接返回原来的 year_ 的值。当修改 year 的值时，edition也会根据 year 的值进行改变。若只定义 get() 函数，设置该属性的值将会被忽略。
// 2.1 defineProperties 定义多个属性
let book2 = {}
Object.defineProperties( book2, {
	year_: { 
		value: 2017,
	},
	edition: {
		value: 1
	},
	year: {
		get() { 
			return this.year_
		},
		set( newValue ) {
			if( newValue > 2017 ) {
				this.year_ = newValue
				this.edition += newValue - 2017
			}
		}
	}
})
console.log(book2) // {year_: 2017, edition: 1}
// 与 property 唯一的区别是所有属性都是同时定义的，并且数据属性的configurable、enumerable 和writable 特性值都是false。
book2.year = 2021
console.log(book.year)

// 2.2 读取属性的特性 getOwnPropertyDescriptor()
// 获取指定属性的属性描述符，该函数接收两个参数，要获取的对象，获取的属性。
const book2Descriptor = Object.getOwnPropertyDescriptor( book2, 'year_' )
console.log( book2Descriptor )
console.log( book2Descriptor.value) // 2017
console.log( book2Descriptor.configurable ) // false

// ES2017 新增的方法 getOwnPropertyDescriptors() 这个方法会将对象中的每个属性都调用一次 getOwnPropertyDescriptors() 并在一个新对象中返回他们
const book2Descriptors = Object.getOwnPropertyDescriptors(book2)
console.log('book2Descriptors:', book2Descriptors) // {year_: {…}, edition: {…}, year: {…}}

// 2.3 Object.assign() 这个方法接收一个目标对象和一个或多个源对象作为参数。在合并时，将每个对象的可枚举（即（Object.propertyIsEnumerable()返回true）
// 和自有（Object.hasOwnProperty()返回 true））属性复制到目标对象。对每个符合条件的属性，会先使用源对象的 [[get]] 取得对象的值，再使用 [[set]] 设置目标对象的属性值。
let objA={}, objB = { name: '1', age: 15}, objC = { hoby: '1123123', num: 1111}
const obj4 = Object.assign(objA, objB, objC)
console.log('Obj4:', obj4) // {name: '1', age: 15, hoby: '1123123', num: 1111}

let objD, objE
objD = {
	get a() {
		console.log('i am objD, 源对象的 getter')
		return 'foo'
	}
}
objE = {
	set a( value ) {
		console.log('value:', value) // value: foo
	} 
}

console.log( Object.assign( objE, objD) ) // { a: [Setter] }
// 这里将 objD 源对象的属性浅拷贝到 objE 上，在浅拷贝时通过 get 获取到的键值为 a: foo，随后再调用 set 函数，由于 set 函数并没有设置值，所以并不会将新属性合并进去。
// Object.assign() 实际上浅复制，如果源对象中有多个属性与目标对象相同，将会取最后一次的值。从源对象访问器取到的属性值如果是函数，会作为一个静态值赋给目标对象。

// 2.4 对象标识及相等判定
// 在ECMAScript 6 之前，有些特殊情况即使是===操作符也无能为力：这些情况在不同JavaScript 引擎中表现不同，但仍被认为相等
console.log(NaN === NaN); // false 
console.log(+0 === -0);   // true 
console.log(+0 === 0);    // true 
console.log(-0 === 0);    // true

// ECMAScript  6 规范新增了 Object.is()，这个方法与===很像，这个方法必须接收两个参数：
// 正确的NaN 相等判定 
console.log(Object.is(NaN, NaN)); // true 

// 正确的0、-0、+0 相等/不等判定 
console.log(Object.is(+0, -0));   // false 
console.log(Object.is(+0, 0));    // true 
console.log(Object.is(-0, 0));    // false

// 2.5 增强的对象写法
// ES6新增了许多语法糖，这些语法糖并没有改变引擎的行为，但是极大地提高了可书写性
// 当对象内属性与某变量名同名时
const name = 'zengdejin'
const obj6 = { name }
console.log(obj6.name) // zengdejin

// 代码压缩程序会在不同作用域保留属性名，以防找不到引用
function getObjName(name) {
	return {
		name
	}
}
console.log(getObjName( 'zzzz' ))
const person = getObjName( 'zengDeJin' )
console.log( person ) // { name: 'zengDeJin' }

// 在这里，即使参数标识符不在限定的函数作用域，编译器也会保留初始的标识符。如果使用 Google Closure 编译器压缩，那么函数参数会被缩短，而属性名不变： 
// function makePerson(a) {  
// 	return { 
// 	  name: a
// 	} 
// } 
   
// var person = makePerson("Matt")
   
// console.log(person.name) // Matt

// 2.5.2 可计算属性
// 在引入可计算属性之前，如果想使用变量的值作为属性，那么必须先声明对象，然后使用中括号语法来添加属性。
const nameKey = 'name'
const ageKey = 'age'
const jobKey = 'job'
 
let person3 = {}
person3[nameKey] = 'Matt'
person3[ageKey] = 27
person3[jobKey] = 'Software engineer'
 
console.log(person3) // { name: 'Matt', age: 27, job: 'Software engineer' }
// 因为被当做复杂表达式求值，所以计算属性本身也可以是复杂的表达式：

let uniqueToken = 0
function getObjectKey( key ) {
	return `${ key }_${ uniqueToken++ }`
}
let person4 = {
	[getObjectKey( nameKey )]: 'Matt',
	[getObjectKey( ageKey )]: 27,
	[getObjectKey( jobKey )]: 'Soft',
}
console.log( person4 ) // {name_0: 'Matt', age_1: 27, job_2: 'Soft'}

// 简写方法名与可计算属性键相互兼容： 
const methodKey = 'sayName';
 
let person5 = { 
  [methodKey](name) { 
    console.log(`My name is ${name}`); 
  } 
} 

person5.sayName('Matt'); // My name is Matt

// 2.6 对象解构
const person6 = { 
	name2: 'zdj',
	age2: 22,
}
const { name2: personName, age2: PersonAge } = person6
console.log('PersonAge:', PersonAge) // PersonAge: 22
console.log('personName:', personName) // PersonName: zdj

// 解构赋值不一定能够完全匹配对象的属性，若是属性不存在将会返回 undefined

let { name2, age2, job3 } = person6
console.log('job:', job3) // undefined
console.log(name2) // zdj

// 给属性默认值，如果源对象存在则返回源对象属性，不存在值即为默认值
let { job2 = 'zzzzzzz' } = person6
console.log(job2)

// 解析在内部使用 ToObject() 将源数据结构转换为对象。如果是原始值，也将被转换为对象，如果是 null 或者 undefined 将不能被解构
const { length } = 'I am String'
console.log('length:', length) // length: 11
const { constructor: c } = 1010
console.log('c:', c === Number) // true

// 解构并不要求先声明。如果是先声明的对象应放在 () 里
let name4, age4 
( { name2: name4, age2: age4 } = person6 )
console.log('name4, age4:', name4, age4) // zdj 22

// 嵌套解构，解构对于引用嵌套的属性和赋值并没有限制，所以可以使用解构赋值来复制对象属性
let person7 = {  
	name: 'Matt', 
	age: 27, 
	job: { 
	  title: 'Software engineer' 
	} 
}
let personCopy = {};
   
({ 
	name: personCopy.name, 
	age: personCopy.age, 
	job: personCopy.job 
 } = person7)

console.log( personCopy ) // {name: 'Matt', age: 27, job: { title: 'Software engineer' }}

const abc = { name: { a: 123}}
const b33 = { asd: abc.name }
console.log(b33);
abc.name = { b: 45}

console.log(b33)

// 解构赋值也可以用在函数参数中，对参数的解构赋值不会影响到 arguments ，并且可以直接声明在函数体内的局部变量。
const person8 = {
	name: 'zdjzdjzdj',
	age: 4545
}
function getPersonInfo( foo, { name, age }, bar ) {
	console.log(arguments)
	console.log( 'name, age:', name, age )
}
getPersonInfo( 'hello i am ', person8, 'bar') // { [Iterator] 0: 'hello i am ',1: { name: 'zdjzdjzdj', age: 4545 },2: 'bar' } , name,age: zdjzdjzdj 4545


// 2.7 创建对象
// ECMAScript6 开始正式支持类和继承。ES6 的类旨在完全涵盖之前规范设计的基于原型的继承模式。
// 创建构造函数的新实例后，内部会执行以下操作：
// 新建一个空对象，将这个新对象内部的 [[prototype]] 指向构造函数的 prototype，构造函数内部的 this 被复制给新对象（即 this 指向新对象）。执行构造函数内部的代码(给新对象添加属性)，如果构造函数返回非空对象，那么则返回该对象，否则则返回刚创建的新对象
function Person9( name, age ) {
	this.name = name
	this.age = age
	this.sayName = function() {
		console.log( 'name:', this.name )
	}
}

const personInfo = new Person9( 'zdj', 23 )
const personInfo2 = new Person9( 'zce', 26)
personInfo.sayName()
// 创建的 personInfo 与 personInfo2 保存着不同的实例，但指向同一个 constructor ，即 Person9
console.log( personInfo.constructor  === personInfo2.constructor ) // true
// personInfo 与 personInfo2 是 Object 的实例同时也是 Person9 的实例：
console.log('personInfo:', personInfo instanceof Object) // true
console.log('personInfo2:', personInfo2 instanceof Person9) // true

// 构造函数也是函数，任何函数只要 new 了以后就是构造函数。不使用 new 操作符调用的函数就是普通函数。比如之前的 Person9 函数
// 作为普通函数调用
Person9( 'zdj', 22 ) // 添加到 window 对象
window.sayName() // name: zdj

// 在另一个对象的作用域中调用：
const o = new Object()
Person9.call( o, 'zcecece', 24)
o.sayName()

/* 普通函数的调用方式，这时候没有使用 new 操作符调用Person()，结果会将属性和方法添加到 window 对
象。在调用一个函数而没有明确设置 this 值的情况下（即没有作为对象的方法调用，或
者没有使用call()/apply()调用），this 始终指向Global 对象（在浏览器中就是window 对象）。
因此在上面的调用之后，window 对象上就有了一个 sayName()方法，调用它会返回"Greg"。最后展
示的调用方式是通过call()（或apply()）调用函数，同时将特定对象指定为作用域。这里的调用将
对象o 指定为Person()内部的this 值，因此执行完函数代码后，所有属性和sayName()方法都会添
加到对象o 上面。 */