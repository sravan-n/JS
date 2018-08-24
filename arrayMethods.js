var arr = [23, 1, 6, 22, 14];
arr.sort(function (a,b){return a-b});
console.log(arr); //sorted array assending order
var arr2 = arr.sort(function (a,b){return b-a});
console.log(arr2); //sorted aray desending order

var a = [1,2,3,4,5], i;
for (i=0; i<a.length; i++)  {
    a[i] = a[i]*2;
}
console.log(a);

// w/o loop and w/o changin the initial array
var a2 = [1,2,3,4,5];
var b = a2.map(myFunction);
function myFunction (value, index, array){
    return value*2;
}
console.log(a2);
console.log(b);

//filter method
var a3= [1,2,3,4,5,6,7,8,9,10];
var over5 = a3.filter(myFunction2);
function myFunction2(value, index, array){
    return value > 5;
}
console.log(a3);
console.log(over5);

// reduce methods runs on each element in array and produce a single value; reduceRight for right to left
var a4 = [1,2,3,4,5];
var sum = a4.reduce(myFun);
function myFun(total, value, index, array){
    return total += value; 
}
console.log(a4);
console.log(sum); 

// every method check to all elements pass a test or not
var a5 = [1,2,3,4,5];
var over3 = a5.every(myFun2);
function myFun2(value, index, array) {
    return value > 3; 
}
console.log(over3);

// some method check to any elements pass a test or  not 
var over2 = a5.some(myFun3);
function myFun3(value, index, array) {
    return value > 2;
}
console.log(over2);

//indexOf
var fruits = ["mango", "apple", "kiwi", "apple", "mango", "watermelon", "apple", "jackfruit", "mango"];
console.log(fruits.length);
var p = fruits.indexOf("mango");
console.log(p);
var q = fruits.indexOf("mango", 2);
console.log(q);
var r = fruits.lastIndexOf("mango");
console.log(r);

//find find:first element after pass test, findIndex: index of first number pass test
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var x = num.find(myF);
var y = num.findIndex(myF1);
function myF(value, index, array){
    return value > 10; 
}
function myF1(value, index, array){
    return value > 10;
}
console.log(x);
console.log(y);