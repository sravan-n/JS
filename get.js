var person = {
    fname: "Sravan",
    lname:"Kumar",
    get fullname () {
        return this.fname + " " + this.lname;
    }
}
console.log(person.fullname);
