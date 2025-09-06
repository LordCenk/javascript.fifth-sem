// const coding = ["js","ruby","java","python","cpp"]
// const values = coding.forEach(item) => {
//     // console.log(item);
//     return item
// })
// console.log(values)
// to use arrow functions(() => {})

    
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4) // in bracket callback function and then return function
// console.log(newNums)
// in bracket callback function and then return function



// Now if you open scope then you would have to use the return keyword


//  const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) =>{
//     return num > 4
// } ) 
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
        
//     }
// })
// console.log(newNums);

//  const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)

// op- [ 5, 6, 7, 8, 9, 10 ] same for all above three operations

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumbers = myNumbers.map((num) => { return num + 10}) // if you don't use the return keyword you would get an array of undefined values
// const newNumbers = myNumbers.map((num) => num * 10).map((num) => num + 1 )
// console.log(newNumbers);
const newNumbers = myNumbers
        .map((num) => num * 10)
        .map((num) => num + 1 )
        .filter((num) => num >= 40)
console.log(newNumbers);

// ############ Reduce method #############
const yournums = [1,2,3]
// const yourToatal = yournums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)// in functions we give the two values accumulator and the current value
// After  the function there is , and the value o that means that you want to start from 0
// console.log(yourToatal);
// op - acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6
// if i give 3 in place of 0 then it would start from 3
const yourToatal = yournums.reduce( (acc, curr) => acc+curr, 0)
console.log(yourToatal); //o/p - 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 3999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item ) => acc + item.price, 0)
console.log(priceToPay);
// o/p - 25996