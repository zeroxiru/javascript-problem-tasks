// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(numbers) {
    let total = 0;
    let avgOfValues = 0;
    for(let i = 0; i< numbers.length; i++){
      total = total + numbers[i];
      
    } 
    avgOfValues = total / numbers.length
    return avgOfValues;
console.log(numbers)
}

const numbers = [11, 33, 44, 55, 66, 22]

const output = make_avg(numbers)

console.log("The average of a numbers of Array: ", output);
