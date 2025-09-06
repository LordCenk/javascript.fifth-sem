const name = "hitesh"
const repoCount = 50
console.log(name + repoCount + "Value");
// We use backtrics(``) which is used in string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Hello my name is hitesh and my repo count is 50
const gameName = new String('hitesh-hc')
console.log(gameName[0]); //h
console.log(gameName.__proto__);//{}
console.log(gameName.length) //8
console.log(gameName.toUpperCase());
// To know which character is at which place(index) we use charAt
console.log(gameName.charAt(3));//e
console.log(gameName.indexOf('t'));//2
const newString = gameName.substring(0,4)
console.log(newString);//o/p - hite   considered till second last element
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
// We use reversed value and the o/p we get is hte
const newStringy = gameName.substring(-8,4)
console.log(newStringy)//would give hite as the o/p i.e it doesn't obey negative values
// trim and replace methods
const newStringOne = "   hitesh    "
console.log(newStringOne);//    hitesh
console.log(newStringOne.trim());//hitesh
const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-chaudhary
console.log(url.includes('hitesh')) //To find whether certain keyword is there or not
//gives true or false
console.log(gameName.split('-')); //[ 'hitesh', 'hc' ]
const score = 400
const balance = new Number(100)
console.log(balance);//[Number: 100]
console.log(balance.toString().length);
console.log(balance.toFixed(2));//100.00
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));//23.9
const brotherNumber = 123.8966
console.log(brotherNumber.toPrecision(3));//124
const hundreds = 1000000
console.log(hundreds.toLocaleString());// for us form
console.log(hundreds.toLocaleString('en-IN'));
// ******************* Maths******************
console.log(Math);
console.log(Math.abs(-4));//4
// Gives absolute value ie converts -ve to +ve
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.2))//4
console.log(Math.max(4,2, 7,9))
console.log(Math.random())//Gives random value but betwen 0 and 1
console.log(Math.random()*10)
console.log(Math.random()*10 + 1);//This would ensure that we never get 0 as value
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
const min = 10
const max = 20
console.log(Math.random() * (max - min + 1) + min)
// ****************** dates in js ****************
let myDate = new Date()
console.group(myDate);
console.log(myDate.toString());//Sat Aug 23 2025 21:35:01 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(typeof myDate);//object

let myCreateDate = new Date(2023, 0, 23)//january is represented by 0 in JS in this case
console.log(myCreateDate);
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);//  1756013521909
console.log(myCreatedDate.getTime());
console.log(Date.now());//we get answer in millisecond
console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);//  2025-08-25T13:08:54.016Z
console.log(newDate.getMonth());
console.log(newDate.getDay() + 1);
//  `${newDate.getDay()} and the time
newDate.toLocaleString('default',{
    weekday: "long",
    
})
//Want to master java then master objects and events


