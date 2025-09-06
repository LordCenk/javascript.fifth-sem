Theory
Javascript Execution Context
{}-> Global EC (this)
i) Global Execution Context
ii) Function Execution Context
iii) Eval Execution Context
{} -> Memory Creation Phase
-> Execution Phase
In memory Creation phase only space is alloted for variables created ie memory allocation phase and operations are performed in execution phase

Code Example:
// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1,val2)
// let result2 = addNum(10,2)
Whatever code is there it runs through global execution and is allocateed through this
in memory phase first the val is there and undefined value is kept there first
// val1 -> undefined
// val2 -> undefined
// addNum - > definition // ie the definition of the function goes here
// result1 -> undefined
// result2 -> undefined 
This is the first cycle
3} Execution Phase
val1<-10
val2<-5
addNum<- [new variable environment + Ececution Thread] Like this a box is made evry time and is called New Exection Context
result1 = 15
result2 = [NVE+thread]
Then memoryphase and execution phase gets repeated for addSum
val1 -> undefined
val2 - > undefined
total -> undefined
Now in execution context where processing occurs
num1 - > 10 // 10 is allocated here
nm2 - > 5
total - > 15 // total is returned back
This total value is returned back to global execution context
Whenever work is done on GEC , it gets deleted then
//        CALL STACK 
LIFO works here

