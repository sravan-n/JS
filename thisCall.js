var person = {
    fName: "Sravan", 
    lName: "Kumar"
}
var personName = {
    fullName: function () {
        return this.fName + " " + this.lName;
    }
}

console.log(personName.fullName.call(person));