/* [1,2,4], 3 return true
[1,2,4], 7 return false */

//brute force
let doesArrayContainSum = (array, sum) => {
    results = [];
    for (let i=0; i<array.length; i++) {
        for (let j=1; j<array.length; j++) {
            if (array[i] == sum-array[j]) {
                results.push([array[i],array[j]])
            }
        }
    }
}
doesArrayContainSum([1,2,6,7], 20);
console.log(results);
if (results.length != 0) {
    console.log("True");
} else {
    console.log("False");
} 