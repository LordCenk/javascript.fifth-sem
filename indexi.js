console.log('External JavaScript data');
// String number boolean symbols
console.log(typeof 'CMRIT');
console.log(typeof 123);
console.log(typeof 4.23);
console.log(typeof True);

let a = "Data 1"
var b = "Data 2"
const c = "Data 3"
a = 12
b = 'New'

console.log(a);
console.log(b);
console.log(c);
// Variables that move to the top that you can host them is called variable hoisting
// () => {} // Basic notation of arrow function
// Immediately invoked function expressions(IIFE)
(function coffee(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
( () => {
    console.log(`DB CONNECTED TWO`);
}) ();
//  used the semicolon at the end of above parenthesis  to detach itself from the previous code
((usn) => {
    console.log(`DB CONNECTED To ${usn}`);
})('hitesh');
// Here its is unnamed IFFE and we have passed the parameters

