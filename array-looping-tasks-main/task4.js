// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person'
let splitStatement = statement.split(' ');
reverseStatement = [];
for(let i = splitStatement.length-1; i>=0; i--)
{
    reverseStatement.push(splitStatement[i]);
   //reverseStatement = splitStatement[i]
}
console.log(reverseStatement);




