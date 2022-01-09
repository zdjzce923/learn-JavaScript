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
