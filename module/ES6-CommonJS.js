// 写法一
import baz from './a.js';
// baz = {foo: 'hello', bar: 'world'};

// 写法二
// import {default as baz} from './a.js';
// // baz = {foo: 'hello', bar: 'world'};

// // 写法三
// import * as baz from './a.js';
// baz = {
//   get default() {return module.exports;},
//   get foo() {return this.default.foo}.bind(baz),
//   get bar() {return this.default.bar}.bind(baz)
// }