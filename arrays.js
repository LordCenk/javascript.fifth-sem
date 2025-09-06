// array
// parenthesis(), brackets[], braces or curly braces{}
const myArr = [0,1,2,3,4,5]
// indexing of arrays start from 0
console.log(myArr[0])
const myHeroes = ["Mehmet Ince","Dogan Kaya","Siraj Arktan"]
console.log(myHeroes[1]);
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);
// Array Methods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.group(myArr.includes(9));
console.log(myArr.indexOf(20));// gives op -1 means that it does not whether value exist or not
console.log(myArr.indexOf(3));
const newArr = myArr.join()//Adds all the elements of an array into a string,separated by the specified separator
console.log(myArr);
console.log(typeof newArr);

// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
// slice,splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)//Returns a copy of a section of an array
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

const fruits = ['apple','orange','banana','mango','kiwi']//Does not change the actual array , it creates a new one and returns that
let newFrits = fruits.slice(1);
console.log(newFrits);
// splice is used to remove values ie the original one 
console.log(fruits.splice(1,2,'lemon','kiwi'));
console.log(fruits);
// [ 'orange', 'banana' ]
//   [ 'apple', 'lemon', 'kiwi', 'mango', 'kiwi' ]
const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// //   [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]     
// console.log(marvel_heros[3][1]);

const all_Heros = marvel_heros.concat(dc_heros)
console.log(all_Heros);//got the correct form here
//   [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);
const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//values spread out
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting case i.e gives an empty array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//  [ 100, 200, 300 ]


