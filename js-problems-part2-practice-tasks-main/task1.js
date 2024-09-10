// # js-problems-part2-practice-tasks

// ### Task -1: 
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`



// first Solution with ... separator
// const heights2 = [167, 190, 120, 165, 137];
// let lowestHeight = Math.min(...heights2);
// console.log(lowestHeight);

const heights2 = [167, 190, 120, 165, 76, 137];
let lowestNumber = heights2[0]
for(let i=1; i< heights2.length; i++)
{
    if(heights2[i]< lowestNumber)
    {
        lowestNumber = heights2[i];
    }
}


console.log(lowestNumber);
