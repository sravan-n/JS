var isPositive = true; // lets assume this is response from server 
// promise is a function which returns an object of two functions 
// one is resolve and another one is reject
new Promise((resolve, reject) => { // resolve or reject
    if(isPositive == true) { // if we got the positive response from server
        resolve(); // resolved 
    } else { 
        reject(); // otherwise rejected 
    }
})
.then(() => console.log("resolved")) // returns if resolves
.catch(() => console.log("rejected")); // returns if rehects
