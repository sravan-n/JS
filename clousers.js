function greet (fname, lname) { // outer function 
    var intro ="my name is " // outer function scope 
    function msg() { // inner function 
        return intro + fname +" "+ lname // has access to outerfunction scope
    }
    return msg();        //returns outerfunction + innerfunction 
}
console.log(greet('sravan', 'kumar'));