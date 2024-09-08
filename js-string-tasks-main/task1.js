// ### Task-1: 
// Count how many times a string has the letter `a`

let word = 'baaaanaaaana is not like apple but banana is good for health'
let count = 0;
for(let i = 0; i<= word.length-1; i++)
{
    if(word[i] === 'a')
    {
 count += 1;
    }

}
console.log(count);