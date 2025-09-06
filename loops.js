// Loops are also called as iterations
//  for 
 for (let i = 0; i <= 10; i++) { // for(value initialization, checking of condition(if condition true then print ocuurs),just befor ending increase the iteration)
    const element = i; //there is a magic associated with ctrl + D, by pressing sequentially ctrl + d all te occureces of that term gets covered
    if (element == 5) {
        // console.log("5 is best number")
        
    }
    // console.log(element);
// for (let i = 1; i <=10; i++) { 
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j)
//     }
// }
//  }
//  let myArray = ["flash","batman","superman"]
//  for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
 }



//  break and continue
// for (let index = 1; index < 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`)
    
// }
// //  to copy paste we used Alt + Shift + Down Arrow Key
// for (let index = 1; index < 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         continue
//     }
//     console.log(`Value of i is ${index}`)
    
// }

//  @@@@@@@@@@@    While and Do while loop ##############

// let india = 0
// while(india <= 10){
//     console.log(`Value of index is ${india}`);
//     india = india + 2
// }
// let myArray = ["flash","batman","superman"]
// let arr = 0
// while(arr < myArray.length){
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }
// readability of code is more important than shorter code with less complexities
// do while loop

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
    
} while (score <= 10);


//  for of
// ["","",""]  - Strings in arrays
// [{},{},{}] - Objects in arrays
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);  
}
const greetings = "Hello World!"
for(const greet of greetings ){
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr', "France")
// map.set('IN',"India")
// console.log(map);
// maps store unique values and they don't allow duplication
// for (const key of map) {
//     console.log(key)
// }
// Now we would do destructuring of the array and is used to hold key-value pair
for (const [key, value] of map){
    console.log(key, ':-',value)
}
// const myObject = {
//     'game1': 'NFS',
//     'game2':'spiderman'
// }
// // for (const [key, value] of myObject) {
//     console.log(key, ':-',value);  
// }

//  for in
const myObject = {
    js: 'javascript',
    cpp:'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject ) {
        console.log(`${key} shortcut is for ${myObject[key]}`);
        
}
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
}
// const Geomap = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr', "France")

// for (const key in Geomap) {
//     console.log(key);
    
// }
//  this can't be printed beacuse map can't be printed


// for (const key in myObjectbject) {
    
//         const element = object[key];
        
    
// }

//  foreach loop
const coding = ["js","ruby","java","python","cpp"]
coding.forEach(function (val) {
    console.log(val)
})



// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=> {
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        lamguageFileName: "js",
    },
    {
        languageName: "java",
        lamguageFileName: "java",
    },
    {
        languageName: "python",
        lamguageFileName: "python",
    },
]


