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

// every method check to pass a test or not
var a5 = [1,2,3,4,5];
var over0 = a5.every(myFun2);
function myFun2(value, index, array) {
    return value > 0; 
}
console.log(over0);
