var a = "053-87-1230";
var b = /^\d[0-9]-\d[0-9]-\d[0-9]$/;
if (a.match(b)) {
    console.log("OK");
}
else {
    console.log("Not Ok")
}