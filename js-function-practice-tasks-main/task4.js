// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(bString){

    let numberOfZero = bString.split('')
    let totalCountOfZero = 0;
    for(let zero of numberOfZero)
    {
      if(numberOfZero[zero] === '0')
        {
            totalCountOfZero++
        }
    }
    return totalCountOfZero;

console.log(numberOfZero);
}

let binaryString = '010010100100'
const output = count_zero(binaryString);
console.log('The total number of zero of a binary string',output);