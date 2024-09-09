/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/



// Task-1 Find all the odd numbers from 61 to 100.

listOfOddNum = [];
for(let i=61; i<=100; i++)
{
    if(i % 2 !== 0){
        listOfOddNum.push(i);
    }
}
console.log(listOfOddNum);


//task-2 Find all the even numbers from 78 to 98.

let evenNumbers = [];
for(let i= 78; i<=98; i++)
{
    if(i % 2 === 0)
    {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);