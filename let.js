var a = 2;
{
    var a = 3;  // global variable
    console.log(a);
}
console.log(a);
console.log(".......................");
var a = 2;
{
    let a = 3; // makes local scope
    console.log(a);
}
console.log(a);