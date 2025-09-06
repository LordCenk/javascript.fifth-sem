// if
const isUserLoggedIn = true
const temperature = 41
// if(2 == "2"){
//     console.log("executed");
// } // This would give o/p executed
if(2 === "2"){
    console.log("executed");
} // nothing comes in output
// <,>,<=,>=,==, != , === (This checks datatype also) , !==
// if (2 != 3){
//     console.log("executed yes");
// }
// if ( temperature === 50){
//         console.log("less than 50");
// }
// console.log("Temperature is greatet than 50");

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);
// if we use the console statement after the } then it would give error as it is outside of the scope but if we had used var instead of const then that problem wouldn't be there
// const power = "fly" //let could also be used
const balance = 1000
// if (balance > 500) {
// }
// if (balance > 500) console.log("test"); // this is how implicit scope works
// console.log("test2");


// ############# NESTING $$$$$$$$$$$$$$$$
// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if (userLoggedIn && debitCard && 2==2) { //This is and statement , here every condition needs to be true
    console.log("Allow to buy courses");    
}
if (LoggedInFromGoogle || LoggedInFromEmail){ // This is or condition 
    console.log("User Logged In")
}

// $$$$$$$$$$$$$$$$$$ Switch case $$$$$$$$$$$$$$$$$$$



// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("February");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break; // shift + alt + down arrow (select from case 1 to break and press 

    default:
        console.log("default case match");
        
        break;
}

const Weekend = "march"
switch (Weekend) {
    case "jan":
        console.log("January");
        
        break;
    case "feb":
        console.log("February");
        
        break;
    case "march":
        console.log("March");
        
        break;
    case "april":
        console.log("April");
        
        break; // shift + alt + down arrow (select from case 1 to break and press 

    default:
        console.log("default case match");
        
        break;
}

const userEmail = "h@gmail.com"
if (userEmail) {
    console.log("Got User email");
} else {
    console.log("Don't have user email");
}

// const userEmail = ""
// if (userEmail) {
//     console.log("Got User email");
// } else {
//     console.log("Don't have user email");
// }   
// This would give o/p Don't have user email




// const userEmail = []
// if (userEmail) {
//     console.log("Got User email");
// } else {
//     console.log("Don't have user email");
// }
// //  Got o/p - Got user email


//  ############TRUTHY AND FALSY VALUES ############3
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Except the above ones all are known as truthy values

// truthy values(we have written under strings that's why truthy)
//  "0", 'false', " ",[],{}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

// This condition only works if userEmail is an array (e.g. []).
// But if userEmail is a string, then .length will give you the number of characters in the string, not the number of items in an array.

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10   o/p 5
// val1 = null ?? 10  o/p 10  when function id not in our control then we use this operator
// val1 = undefined ?? 15    o/p 15
// val1 = null ??10 ?? 20 // o/p 10 i.e the first value it gets after null it assigns that value
console.log(val1);

//  Terniary Operator

// condition ? true : false


//  const iceTeaPrice = 100
//  iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// o/p - more than 80


// const iceTeaPrice = 100
//  iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")
// o/p-  less than 80

//  Having null or undefined in our code is not considered good





