var person = {
    firstName: "Sravan Kumar",
    lastName: "Nuthalapati",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());