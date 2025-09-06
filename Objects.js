//Objects
//Singleton
// Object.create
// Object Literals
const mySym = Symbol("Key1") 

const JsUser = {
    name: "Hitesh",
    "full name" : "Hitesh Chaudhary",
    mySym: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
} //Our object is made
console.log(JsUser["email"])
console.log(JsUser.email)
// console.log(JsUser(full name)
// Avoid using .email type
// To refer symbols we use square brackets
console.log(JsUser["full name"])
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"//This value didn't came beacuse the value was freezed before it
console.log(JsUser)

// functions 
JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
// Removing " " to `` is called string interpolation
console.log(JsUser.greeting());//Hello JS User
console.log(JsUser.greetingTwo());//Hello Js User, Hitesh

// const tinderUser = new Object() //this gives o/p as {} and is a singleton object
const tinderUser = {} // gives the same o/p but is non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
// { id: '123abc', name: 'Sammy', isLoggedIn: false }
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }


    }
}
console.log(regularUser.fullname.userfullname.firstname);
// now we take key as number and value as string
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2,...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//Key-value pairs are separated as arrays
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to check whether that object has that property or not
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {
// }
// Whenever you see curly braces then remember that destructuring is being done
// navbar(company = "hitesh")
// destructuring is possible of objects and arrays also
// Concepts of API - Apna kamm kisi aur ke sar pr dal dena
//{
    //This is json api
//}
[
    {},
    {},
    {}
]
//JSON might look like an object or array
// Functions and parameters
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName - This is reference
sayMyName()

function addTwoNumbers(number1 , number2){
    //console.log(number1 + number2)
    // let result = number1 + number2
    // return result
    return number1 + number2
    // function has a rule that if we have used return statement then it will not do any other work.
}
//addTwoNumbers(3,"4")  gives op 34 considering both as strings
 addTwoNumbers(3, 4) // op 7
 const result = addTwoNumbers(3,5)
// console.log("Result: ", result);
function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh")) //hitesh just logged in
 console.log(loginUserMessage()) //undefined just logged in

function whoistheboss(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} is the boss`
}
// console.log(whoistheboss()) o/p-sam is the boss
// console.log(whoistheboss("Shashank")) // Gives o/p Shashank is the boss because we passed the value shashank
function calculateCarPrice(...num1){ //these three dots are only called as rest or spread operator, depending on their usecases
    return num1//we have used rest operator
}
console.log(calculateCarPrice(200, 400, 500))//[ 200, 400, 500 ]
function calculateTruckPrice(val1, val2, ...jam1){
    return jam1
}
console.log(calculateTruckPrice(200, 400, 500, 2000))//[ 500, 2000 ]
// It happened because val1 took 200 and val2 took 400 and the remaining values we got in the o/p array
const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)  //Username is hitesh and price is 199
handleObject({
    username : "sam",
    price: 399
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200, 400, 500, 1000]));
// @@@@@@@@@@@@@@@@@@@@ Scope {}  @@@@@@@@@@@@@@   uses three keywords let, var and const
let a = 300
if (true) {

    let a = 10
    const b = 20
    console.log("INNER:" ,a) //Block scope
}
// console.log((a));
// console.log((b));
console.log((a));//prints global scope

function one(){
    const username = "hitesh"
    function two(){ // ice cream borrow example
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    //two()
}
one()
if(true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
} // o/p- hitesh youtube
// console.log(username);

//  ++++++++++++++++++++++ interesting ++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}
addone(5)
const addTwo = function(num){ //This is also called expression
    return num + 2
}
// Here we declared a function and also holded it with a variable
addTwo(5)
// // ///////// Arrow Functions and this keyword
// this keyword tells us about the current context
const usur = {
    username: "ritesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }

}
usur.welcomeMessage()
// usur.username = "sam"
// usur.welcomeMessage()
// console.log(this);


// function chai(){
//     console.log(this);

// }
// chai()
// The above code gives a very long output

// const chai = function(){
    
// }
// Use of arrow(=>) function
// baisc arrow function () => {}
// const Twoadd = (num1,num2) => {
//     return num1 + num2
// }
// console.log(Twoadd(3,4))
// in the above code we used curly braces that's why we need to write the return statement
// Now we will see implicit arrow function where curly braces won't be used
//To return an object it's very necessary to wrap it in parenthesis
const Twoadd = (num1,num2) => (num1 + num2)
console.log(Twoadd(3,4))
const You = (num1,num2) => ({usersname:"Ritesh"})
console.log(You(3,4)) //{ usersname: 'Ritesh' } as op
//  const myArray = [2,3,5,7,8]
//  myArray.forEach()

// Immediately Invoked Function Expressions(IIFE) - We use IFFE to get rid from the pollution of global scope 
function mocha(){
    console.log(`DB CONNECTED`);
}
mocha()
//THE OTHER WAY 
// The first parenthesis() for function and the second parenthesis() for execution
// (function bobba(){
//     console.log(`DB cut`);
// })();
// THe above code is synatactically correct but is not working idk
// (function aurcode(){
//     console.log(`DB CONNECTED TO`);
// })()
// The above codes are running in indexi.js

