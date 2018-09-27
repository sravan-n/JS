for (var i=0; i<=10; i++){
    console.log(i);
    if (i==3){
        break; 
    }
}
console.log("-------------------------");
for (var j=0; j<=5; j++) {
    if (j==3){
        continue;
    }
    console.log(j);
}
console.log("-------------------------");
var fruits = ['banana', 'kiwi', 'mango', 'apple', 'pineapple', 'jackfruit', 'gragonfruit', 'orange', 'grape'];
console.log(fruits.length);
var text = '';
list: {
    text+=fruits[0]+" ";
    text+=fruits[1]+ " ";
    break list;
    text+=fruits [2]+ " ";
}
console.log(text);
