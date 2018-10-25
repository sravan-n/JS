// object literal 
var person = {
    name: "sravan",
    age: "26"
};

// by using object key word
employee = new Object();
employee.name = "sravan";
employee.age = 26;

// object as a function
function human(name, age, country) {
    this.name = name; 
    this.age = age; 
    this.country = country; 
}
var human1 = new human('sravan', 26, 'USA');

console.log(person);
console.log(employee);
console.log(human1);