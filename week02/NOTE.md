学习笔记

## 状态机

利用状态机实现了字符串的查找功能.
最简单的实现代码如下:

function match(str) {
let state = start;
for(let c in str) {
state = state(c);
}
return state === end;
}

function start(c) {
if(c === 'a') return foundB;
return start(c);
}

function foundB(c) {
if(c === 'b') return foundC;
return start(c);
}

function foundC(c) {
if(c === 'c') return end;
return start(c);
}

function end(c) {
return end;
}

## HTTP Request Line

例如: POST / HTTP/1.1 表示 使用 POST 请求 /, 协议版本是 HTTP/1.1

headers 包含多行, 与 body 之间的分割使用 \r\n\r\n

## HTT Response Line

例如: HTTP/1.1 200 OK 请求返回的结果是 200, 协议版本是 HTTP/1.1

## ToyBrowser

通过使用状态机的处理方法来解析服务器返回的数据
