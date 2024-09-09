// # js-problems-part1-practice-tasks
// ----
// ### Task-3: 
// Write a function to count the number of vowels in a string.

function countVowels(vowels, sentence){

    let splitChar = sentence.toLowerCase().split('');
    let count = 0;
    for(let i=0; i<splitChar.length; i++)
        if(vowels.includes(splitChar[i]))
            {
                count++;
            }
        
        
    //console.log(splitChar);

    return count;

}

const vowels = ['a', 'e', 'i', 'o', 'u'];
const sentence = 'Write a function to count the number of vowels in a string.';

const output = countVowels(vowels, sentence);
console.log(output);
