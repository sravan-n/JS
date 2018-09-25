var a = Math.random(); // generates random value between 0 and 1 exludes
var b = Math.floor(Math.random()*10); // between 1 and 9 
var c = Math.floor(Math.random()*100)+1; // between 1 and 10
var min, max;
// includes min and excluded max custom function
function getRandom1 (min, max){
    return Math.floor (Math.random()*(max-min))+min; 
}
// includes both min and max custom function
function getRandom2 (min, max){
    return Math.floor (Math.random()*(max-min+1))+min;
}
console.log(a);
console.log(b);
console.log(c);
console.log(getRandom1(3,5));
console.log(getRandom1(3,7));
