## HTML 中的 JavaScript
### 1.JavaScript 标签的用法
#### 初识 <script> 
要嵌入行内 JavaScript 代码，直接把代码放在 <script> 元素中即可
```
function sayScript(){
	console.log('hi,JavaScript')
}
```
包含在 <script> 中的元素会从上到下依次执行
要引用外部 JS 文件，则必须使用 src 属性。这个属性的值是一个 URL，指向引用的 JS 文件。
```
<script src="example.js"></script>
```
使用了 src 属性的 <script> 元素不应该再在标签中包含其他 JS 代码。如果两者都提供的话，行内代码将会被忽略，浏览器只会下载并执行脚本文件。
src 属性可以包含来自外部域的 JS 文件。它的值可以是一个完整的 URL。例如请求一个指定的外部 JS 文件
```
<script src="http://www.baidu.com/hi.js"></script>
```
浏览器在解析这个资源时，会向指定的 URL 路径发送 *GET* 请求，这个初始的请求不受浏览器的同源策略限制，但返回并被执行的 JS 则受限制。当然，这个请求仍受父页面 HTTP/HTTPS 协议的限制。

#### 标签位置
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="example.js"></script>
	<script src="example2.js"></script>
	<script src="example3.js"></script>
	<title>Document</title>
</head>
<body>
	<!-- 这里是页面内容 -->
</body>
</html>
```
我们通常会将 CSS 文件放到 <head> 标签中，若是将 <script> 标签放在 <head> 中，这意味着必须把所有 JavaScript 代码都下载、解析并解释完成后，才会开始渲染页面。若是使用很多 JS 文件，那么将阻塞页面渲染，在此期间浏览器完全空白。为了解决这个问题，通常我们会放在 <body> 标签中，或使用 <script> 标签的 defer 和 async 属性。

## 2.标签属性
#### 推迟执行脚本
```
<head>
	<meta charset="UTF-8">
	<script defer src="example.js"></script>
	<script defer src="example3.js"></script>
	<title>Document</title>
</head>
```
defer这个属性表示脚本在执行的时候不会改变页面的结构，脚本将在整个页面都解析完毕后再运行。设置 defer 属性，相当于告诉浏览器立即下载。页面解析完毕后，拥有 defer 属性的标签将依次执行。这个属性只对外部引用的脚本生效。

#### 异步执行脚本
```
<head>
	<meta charset="UTF-8">
	<script async src="example.js"></script>
	<script async src="example3.js"></script>
	<title>Document</title>
</head>
```
async 与 defer 属性类似，他们两者都适用于外部脚本，都会告诉浏览器立即下载。区别在于，async 属性并不能保证标签按照他们出现的次序执行。

#### 动态加载脚本
```
let script = document.createElement('script')
script.src = 'hi.js'
document.head.appendChild(script)
```
除了 <script> 标签，还有其他方式可以加载脚本。例如向 DOM 中添加 <script> 元素。在元素添加到 DOM 且执行到这段代码之前将*不会*发送请求,以这种方式创建的 <script> 元素是以异步方式加载的。相当于添加了 async 属性。

## 3.行内代码与外部文件
虽然可以直接在 HTML 中嵌入 JavaScript 代码，但最佳实践为尽可能将 JavaScript 代码放在外部文件中。这么做有以下优点：
1. 可维护性。若是将代码分散到众多 HTML 文件中，将导致维护困难。把它们都放到一个文件夹中，则更容易维护。
2. 缓存。浏览器会根据特定的设置缓存所有外部链接的 JavaScript 文件，这意味着如果两个页面都用到同一个文件，则该文件只需下载一次。这样性能就将提升。