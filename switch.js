var d = new Date; 
switch(d.getDay()) {
    case 0:
    console.log("Sunday");
    break;
    case 1:
    console.log("Monday");
    break; 
    case 2:
    console.log("Tuesday");
    break; 
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday"); // break not need in final case
}

switch(d.getDay()){
    case 0:
    case 5:
    case 6:
    console.log("time for weekend vibes")
    brake;
    default:
    console.log("weekend is there.. cheers!!!")
}
