// js 中有些不能被直接开发者访问到的特殊属性 这些属性被用来描述属性的特征 规范会用 [[]] 将属性框起来
// 属性分为数据属性和访问器属性
// 例如[[Configurable]] 表示属性是否可以通过 delete 删除并重新定义 [[Writable]]：表示属性的值是否可以被修改。
// 这里定义了一个 person 对象，同时生成了 name 属性并赋值，此时 [[value]] 特性会被设置为 'zeng'
let person = {
	name : 'zeng'
}

// 要修改对象的属性特征，就必须使用 Object.defineProperties() 方法，该方法支持传入三个参数 1. 目标对象 2. 属性的名称 3. 描述符对象
// 描述符对象由 configurable、enumerable、writable 和 value 组成，他们和 JS 内部的特殊属性一一对应，传入对应属性即可设置值
let defineObj = {}
// 使用 defineProperty 方法设置了描述对象的 value 属性，即定义了默认值并且之后不可修改。
let obj = {}
Object.defineProperty(obj, 'name', { 
	value: 'zengdj',
	configurable: false
})
console.log(obj.name) //zengdj
obj.name = '123213'
console.log(obj.name) // zengdj

// Object.defineProperty(obj, 'name', { configurable: true }) // Cannot redefine property: name
