console.log(typeof(2));
console.log(typeof "2" );
console.log(typeof(sravan));
console.log(typeof(sravan1508));
console.log(typeof("sravan1508"));
console.log(typeof NaN);
console.log(typeof true);
console.log(typeof [1,2,3,4]);
console.log(typeof function(){});
var person = {
    fname:"sravan",
    age:25
};
console.log(typeof person);
function linenbreak(){
    console.log("--------------------");
}
linenbreak();
console.log(person.constructor);
console.log((3.23).constructor);
linenbreak();
a = String(1+2);
console.log(a);
console.log(typeof a);
if (a === 3){
    console.log("both are equal");
} else {
    console.log("string is not equal to number");
}
linenbreak();
var x = 1; 
var y = "2";
console.log(x+y);
