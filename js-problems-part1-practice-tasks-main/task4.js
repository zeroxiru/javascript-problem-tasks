// # js-problems-part1-practice-tasks
// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming

function findLongestWord(sentence){
    splitSentenceByWord = sentence.split(' ')
   let  longestWord = '';
    for(let i=0; i<splitSentenceByWord.length; i++)
    {
      if(splitSentenceByWord[i].length >= longestWord.length )
      {
       longestWord = splitSentenceByWord[i] ;
      }
    }
  return longestWord;
//console.log(splitSentenceByWord);

}


const sentence ='I am learning Programming to become a programmer'
let output = findLongestWord(sentence);

console.log(output);


