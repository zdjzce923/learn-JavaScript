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
console.log(book2.year)

