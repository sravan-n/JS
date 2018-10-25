var person = {
    fullName : function (age, country) {
        return this.fname + ' ' + this.lname + ' age: ' + age + ' country: ' + country
    }
}
var xperson = {
    fullName : function() {
        return this.fname + ' ' + this.lname;
    }
}

var details ={
    fname: 'sravan', 
    lname: 'kumar'
}

console.log('-----------------------------------');
console.log(xperson.fullName.call(details)); // call invokes object as an argument 
console.log('-----------------------------------');
console.log(person.fullName.call(details, [26, 'India'])); // call invokes object as an argument
//for person we need 2 arguments so it will call details as usual 
//and takes array as first argument and second argument as undefined
console.log('-----------------------------------');
console.log(xperson.fullName.apply(details)); // apply also invokes object as an argument same like call
console.log('-----------------------------------');
console.log(person.fullName.apply(details, [26, 'USA'])); // apply takes array as argument
console.log('-----------------------------------');
console.log(person.fullName.apply(details)); // if we didnt give array its return undefined
console.log('-----------------------------------');

