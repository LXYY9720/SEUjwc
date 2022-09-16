var a={n:1};
var b=a;
a.x=a={n:2}; /* 先声明变量,再右到左赋值 */

var dateNow = new Date()
var weekShow = '一二三四五六天'
var dateWeek = weekShow.charAt(dateNow.getDay()-1)
console.log(dateNow.toLocaleString())

var arr=Array.from({length:10})
arr.fill(1)
console.log(arr)