// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
function odd_even(number){
    if(number % 2 === 0)
    {
        return 'Even';
    }
    else
    return 'Odd';
console.log(number);
}

const evenOrOdd = odd_even(678);
console.log(" the value of the number is: ",evenOrOdd)
