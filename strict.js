"use strict";
try {
a = 2; // undefined due to strictmode 
var b = 1;
console.log(a+b);
}
catch (err) {
    console.log(err.message);
}