// call()
var obj1 = {name:"Sravan"}
function myF1(a1, b1) {
    return "Welcome " + this.name + " " + a1 + " and " + b1;
}
console.log(myF1.call(obj1, "Kumar", "Arjun"));
//apply()
var obj2 = {name:"Sravan"}
function myF2(a2, b2) {
    return "Welcome " + this.name + " " + a2 + " and " + b2;  
}
var args = ["Kumar", "Arjun"];
console.log(myF2.apply(obj2, args));