var person_details = {
    fname: "Sravan",
    lname:"Kumar",
    sex:"male",
    age:"26"
}
var x, text="";
for (x in person_details){
    text+=person_details[x]+" ";
}
console.log(text);
