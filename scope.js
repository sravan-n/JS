// function scope
console.log(".....FUNCTION SCOPE.....");
function myFunction() {
    var str = "Hello!";
    console.log(str);
}
myFunction();
try {
    console.log(str);
}
catch (err) {
    console.log(err.message);
}
// global scope 
console.log(".....GLOBAL SCOPE.....");
var str2 = "Hello World!";
function myFunction2(){
    console.log(str2);
}
myFunction2();
console.log(str2);
//automatic global - undeclared variables
console.log(".....AUTO GLOBAL.....");
function myFunction3(){
    str3 = "Chitti is Back";
    console.log(str3);
}
myFunction3();
console.log(str3);

