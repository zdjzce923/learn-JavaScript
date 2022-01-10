/* 
//  1. 基本使用
//  生成器写法
// function* generator() {}

// const generatorFn = function* () {};

// const obj = {
//   *generator() {}
// };

// class generatorClass {
//   *generatorFn() {}
// } 

// 调用生成器函数会产生生成器对象 可以随意中断跟开始函数 默认为停止状态 生成器也实现了 iterator 接口 使用 next() 开始执行
// 生成器执行完毕后与 iterator 类似 返回{done:true,value:''}
// return 后的值即是返回后的 value 值

function* useGenerator() {
  return "i am generator";
}

let gener = useGenerator();
console.log(gener);
console.log(gener.next()); // {value: "i am generator", done: true}

// 生成器只会在初次调用 next() 方法后开始执行
function* useGenerator2() {
  console.log("Hello,Generator");
}
let userGenerator = useGenerator2();
userGenerator.next(); // Hello,Generator

//  生成器对象实现了 iterator 接口它的默认迭代器是自引用的
console.log(useGenerator2()[Symbol.iterator]); // ƒ [Symbol.iterator]() {}
console.log(useGenerator2()[Symbol.iterator]()); // generatorFn {<suspended>}
const a = useGenerator2();
console.log(a[Symbol.iterator]() === a); // generatorFn {<suspended>}

*/

// 2. yield 中断执行 生成器遇到 yield 会中断执行 停止执行只能调用 next() 恢复执行
/* function* yieldGener() {
  yield;
}

let yieldGener2 = yieldGener();

console.log(yieldGener2.next()); // {value: undefined, done: false}
console.log(yieldGener2.next()); // {value: undefined, done: true} */

// 通过 return 关键字退出的生成器函数会处于 done:true 状态
/* function* yieldGener() {
  yield "foo";
  yield "bar";
  return "baz";
}

let yieldGener2 = yieldGener();

console.log(yieldGener2.next()); // {value: undefined, done: false}
console.log(yieldGener2.next()); // {value: undefined, done: false}
console.log(yieldGener2.next()); // {value: undefined, done: true} */

// yield 只能在生成器函数内部使用 用在其他地方会抛出错误 即使在生成器函数中的嵌套函数也会抛出错误
// 无效
// function* yieldGener() {
//   function a(){
//     yield "foo";
//   }
// }

// 2.1 生成器对象作为可迭代对象
// 在生成器上使用 next() 方法用处并不大 可以把生成器当成可迭代对象
function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
}

for (const x of generatorFn()) {
  console.log(x); // 1 2 3
}

// 2.2 使用 yield 实现输入输出 上一次让生成器函数暂停的 yield 关键字会接收到传给 next() 方法的第一个值
// 第一次调用 next() 传入的值不会被使用 因为这一次调用是为了开始执行生成器函数
function* generatorFn2(data) {
  console.log(data);
  console.log(yield);
  console.log(yield);
}

const fn = generatorFn2("foo");
console.log(fn.next("bar")); // foo
console.log(fn.next("baz")); // baz
console.log(fn.next("ba123")); // ba123
