var fruits = ["mango", "kiwi", "banana", "pappaya", "gua"];
var str = 'i love java script which is different from java';
var arr = [40, 20, 10, 30, 50]; 

var spliceFruits = fruits.splice(1, 1,  "added", "added", "added");
//splice: first parameter -> where to insert
//second parameter -> how many elemnts need to be removed
//splice returns removed elements

var sliceFruits = fruits.slice(1); // removes elements 1 
var sliceFruits2 = fruits.slice(2, 3); // removes 3 elemets from starting 2

//var findinstr = str.find('java');
var findindex = str.indexOf('java');
var lastindex = str.lastIndexOf('java');

var arrfil = arr.filter((x, index) => x > 25);
var arrred = arr.reduce((x,y) => x + y);
var arrmap = arr.map(x => x*2 ); 

console.log("fruits: ", fruits);
console.log("Splice Fruits: ", spliceFruits);
console.log("slice(1) of splice fruits : ", sliceFruits);
console.log("slice(2,3) of slice(1): ", sliceFruits2);
console.log('string: ', str);
//console.log(findinstr);
console.log(findindex);
console.log(lastindex);
console.log(arrfil);
console.log(arrred);
console.log(arr.sort());
console.log(arrmap);