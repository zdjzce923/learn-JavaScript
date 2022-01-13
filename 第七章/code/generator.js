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

/* 
2.1 生成器对象作为可迭代对象
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

*/
// 2.3 yield* 能产生可迭代对象 可以在外部进行遍历
// function* generator3() {
//   yield* [1, 2, 3];
// }
// const generator3fn = generator3();
// console.log(...generator3fn);

//  在进行递归的时候可以使用 yield* ,让代码变得更优雅
// 创建一个可迭代对象并返回递增的整数
// function* nTimes(n) {
//   if (n > 0) {
//     yield* nTimes(n - 1);
//     yield n - 1;
//   }
// }

// console.log(...nTimes(3)); // 0 1 2

// 因为生成器对象实现了 Iterable 接口，而且生成器函数和默认迭代器被调用之后都产生迭代器， 所以生成器格外适合作为默认迭代器。下面是一个简单的例子，这个类的默认迭代器可以用一行代码产 出类的内容
class Foo {
  constructor() {
    this.values = [12, 3, 3, 3];
  }
  *[Symbol.iterator]() {
    yield* this.values;
  }
}
// 任何实现 Iterator 接口的对象都可以作为迭代器使用。在 Foo 类中使用生成器，当 new Foo() 后即返回了默认的迭代器
// 当我们需要使用自定义迭代器时 需要将 [Symbol.iterator] 与 next() 方法结合起来才可迭代 这么写明显方便了许多
const foo = new Foo();
console.log(...foo);

// 2.4 与迭代器类似，生成器也支持“可关闭”的概念。一个实现 Iterator 接口的对象一定有 next() 方法，还有一个可选的 return()方法用于提前终止迭代器。生成器对象除了有这两个方法，还有第三个方法:throw()。
// return()和 throw()方法都可以用于强制生成器进入关闭状态
// 与迭代器不同，所有生成器对象都有 return()方法，只要通过它进入关闭状态，就无法恢复了。 后续调用 next()会显示 done: true 状态，而提供的任何返回值都不会被存储或传播:
function* generatorFn4() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const g = generatorFn4();
console.log(g.next()); // { done: false, value: 1 }
console.log(g.return(4)); // { done: true, value: 4 }
console.log(g.next()); // {value: undefined, done: true}

// 2.4 throw()方法会在暂停的时候将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器
// 就会关闭:
function* generatorFn5() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}
const g5 = generatorFn5();
console.log(g5); // generatorFn {<suspended>}
try {
  g5.throw("foo");
} catch (e) {
  console.log(e); // foo
}
console.log(g5); // generatorFn {<closed>}
// 不过，假如生成器函数内部处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行
// 错误处理会跳过对应的 yield，因此在这个例子中会跳过一个值。比如: 12
function* generatorFn6() {
  for (const x of [1, 2, 3]) {
    try {
      yield x;
    } catch (e) {}
  }
}
const g6 = generatorFn6();
console.log(g6.next()); // { done: false, value: 1} g.throw('foo');
console.log(g6.next()); // { done: false, value: 3}

// 在这个例子中，生成器在 try/catch 块中的 yield 关键字处暂停执行。在暂停期间，throw()方 法向生成器对象内部注入了一个错误:字符串"foo"。这个错误会被 yield 关键字抛出。因为错误是在 生成器的try/catch块中抛出的，所以仍然在生成器内部被捕获。可是，由于yield抛出了那个错误， 生成器就不会再产出值2。此时，生成器函数继续执行，在下一次迭代再次遇到yield关键字时产出了 值3。

// 小结
// 迭代是一种所有编程语言中都可以看到的模式。ECMAScript 6 正式支持迭代模式并引入了两个新的 语言特性:迭代器和生成器。
// 迭代器是一个可以由任意对象实现的接口，支持连续获取对象产出的每一个值。任何实现 Iterable 接口的对象都有一个Symbol.iterator属性，这个属性引用默认迭代器。默认迭代器就像一个迭代器 工厂，也就是一个函数，调用之后会产生一个实现 Iterator 接口的对象。
// 迭代器必须通过连续调用 next()方法才能连续取得值，这个方法返回一个 IteratorObject。这 个对象包含一个done属性和一个value属性。前者是一个布尔值，表示是否还有更多值可以访问;后 者包含迭代器返回的当前值。这个接口可以通过手动反复调用 next()方法来消费，也可以通过原生消 费者，比如 for-of 循环来自动消费。
// 生成器是一种特殊的函数，调用之后会返回一个生成器对象。生成器对象实现了 Iterable 接口， 因此可用在任何消费可迭代对象的地方。生成器的独特之处在于支持 yield 关键字，这个关键字能够 暂停执行生成器函数。使用yield关键字还可以通过next()方法接收输入和产生输出。在加上星号之 后，yield 关键字可以将跟在它后面的可迭代对象序列化为一连串值。
