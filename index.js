console.log("Merhaba")
const usename = "Prasad";
console.log("Prasad")
let age = 30
console.log(30)

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "123456789"
accountCity = "Jaipur"
// accountId = 2 // not allowed
accountEmail = "hchc@gmail.com"
accountPassword = "2122345"
accountCity = "Bengaluru"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
// the curly braces which we write is called the scope
//console.table is used to print the data in the form of table

// to get the above syntax just type for and select the second one with a square symbol beside it , similarly for if also
/*
Prefer not to use var beacuse of issue in block scope and functional scope
*/
// semicolon there or not there it doesn't matter
let accountState;
"use strict"; // treat all JS code as newer version
// now it's not required but you could use
// alert("hello") // we are using nodejs, not browser
//Most important thing in coding is readability
console.log(3+3)
console.log("Hitesh")
let name = "hitesh" //string data type
 age = 18 //number data type
let isLoggedIn = false //boolean data type
// number => 2 to power 53
//bigint
//string => " "
// boolean => true/false
// null = standalone value
// undefined => value is not assigned till now
// symbol => unique
// object

console.log(typeof "hitesh");
console.log(typeof null);//object
console.log(typeof undefined);//undefined 

let score = undefined
// for the other case we took 33abc and we get NaN that means not a number
// if we don't put "" around 33 then it will show number for the next line of command
// and we can check the datatype by writing the below command
// if we take null in score then we get 0 as the o/p. and for t/f it will show 1/0 and for undefined we again get NaN 
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
// the above line is used to convert the datatype from string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);
// "33" => 33
// "33abc" => NaN
let passed = "hitesh"
let booleanIspassed = Boolean(passed)
// Conversion of 1 in boolean gives True and 0 => false
console.log(booleanIspassed);
// "" => false
// "hitesh" => true
// now conversion into string
let someNumber = 27
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
// we get 27 only but if we see it it is a number but actually its converted into string
// ***************** Operations ***************
let value = 3
let negValue = -value
console.log(negValue);
// we assigned negative value and we got negative value
// console.log(20+20);
// console.log(20-20);
// console.log(20*20);
// console.log(20**30);
// console.log(20/20);
// console.log(20%20);
let str1 = "hello"
let str2 = "hitesh"
let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 +"2");
// We got 12 in both cases
console.log("1" + "2" + 2); // we get 122 here because its converted into string
console.log(1 + 2 + "2");// we get 32 here because first sum is done 2+1=3 and then 2 ie 32
console.log(3+4*5%3);
console.log(+true);//we get 1 as o/p
console.log(+"");//we get 0
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num2);
let gameCounter = 100
gameCounter++;//++gameCounter also valid
console.log(gameCounter);//we get 101
//conversion and operations over
//comaprison
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);
// We get true in both cases
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
//The reason is that an equality check == and comparisons > <>= <= work differently.
// Comparisons convert null to a Number, treating it as 0.
// that's why (3) null >= 0 is true and (1)null>0 is false
console.log(undefined == 0); //false
console.log(undefined <= 0);//false
console.log(undefined >= 0);//false
console.log(undefined < 0);
//Script check i.e ===
console.log("2" === 2);//we get false ,for == we get true
//Clean code is most valuable
//Primitive-call by value used
// 7 types : String, nUmber, Boolean, null, undefined , Symbol(used to make any value unique), BigInt

// Reference Type also called non-primitive
// Arrays, Objects, Functions
// To master JS Then master objects in js and events in browser
const outsideTemp = null
const scoreValue = 100.3
// let userEmail = undefined same as let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)//we get false
const bigNumber = 3456787653349876567n
const heros = ["Shaktiman","nagaraj","doga"];//we use square brackets to define arrays
let myObj = {
    name: "hitesh",
    age: 22,
}
//function could be stored as a variable in JavaScript
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);//bigint
console.log(typeof outsideTemp);//object
console.log(typeof myFunction);//function
// Memory are of two types - Stack(used in primitive) , Heap(Non-Primitive)
let myYoutubename = "hiteshchaudharydotcom"
// Stack is one rectangle above another and heap is a big container
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername)
console.log(myYoutubename);
// Now example of heap
let user01 = {
    email: "user@google.com",
    upi:"user@ybl"
//In stack we were getting copy while in heap we get reference of the previous one
}
let user02 = user01
user02.email = "hitesh@google.com"
console.log(user01.email);
console.log(user02.email);
// In both we get the same value as output


