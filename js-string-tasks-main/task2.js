// ### Task-2: 
// Count how many times a string has the letter `a` or `A`

let sentence = 'A man in the village has an Apple garden and he used run business name The Best Apple in the town with its own renowned best quality apples.'
let smallACount = 0;
let capitalACount = 0;

for(let i = 0; i<= sentence.length-1; i++)
{
    if (sentence[i] === 'A')
    {
     capitalACount += 1;
    }
    else if(sentence[i] === 'a')
    {
     smallACount += 1;
    }


}
console.log("there are " + capitalACount + " as capital A "  + 'or ' + smallACount +" as capital a " + "number of letter in the sentence");