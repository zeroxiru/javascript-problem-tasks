// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function numberDivisor(number){

    if (number % 2 === 1)
    {
        const total = number * 2;
        return total;
    }
    else if(number % 2 ===0)
    {
        const total = number /2;
        return total;
    }
    
}

const result = numberDivisor(90);
console.log("The result of the number is: ", result);