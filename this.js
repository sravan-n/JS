var person = {
    fname: 'sravan', lname: 'kumar',
    fullname: function() {  // function in object --> method
        return this.fname + this.lname
    }
}


console.log(person.fullname()); // function in object --> method 