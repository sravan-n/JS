var first = () => {
    console.log("I am First"); 
    setTimeout(second, 5000);
    console.log("second is waitig"); 
}

var second = () => {
    console.log("I am Second");
}

first();