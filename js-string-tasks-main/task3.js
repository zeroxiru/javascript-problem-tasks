// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

// let sentence = 'A man in the village has an Apple garden and he used run business name The Best Apple in the town with its own renowned best quality apples.'
// let vowels = [`a`, `e`, `i`, `o`, `u`];
// for (let i = 0; i < sentence.length - 1; i++) {
//     if (sentence[i] === vowels[0]) {
//         console.log("One of the vowels element 'a' is available in the sentence. ");
//     }
//     else if (sentence[i] === vowels[1]) {
//         console.log("One of the vowels element 'e' is available in the sentence. ");
//     }
//     else if (sentence[i] === vowels[2]) {
//         console.log("One of the vowels element 'i' is available in the sentence. ");
//     }
//     else if (sentence[i] === vowels[3]) {
//         console.log("One of the vowels element 'o' is available in the sentence. ");
//     }
//     else if (sentence[i] === vowels[4]) {
//         console.log("One of the vowels element 'u' is available in the sentence. ");
//     }
//     else
//     {
//         console.log("Vowels value are not available in the sentence");
//     }
// }

// task 3 second solution 

let sentence = 'A man in the village has an Apple garden and he used run business name The Best Apple in the town with its own renowned best quality apples.'
let vowels = new set ( [`a`, `e`, `i`, `o`, `u`]);
let foundVowels = new set ();

sentence = sentence.toLowerCase();
for(let i = 0; i < sentence.length; i++)
{
    let char = sentence[i];
    // if the character is a vowel, add it to the foundvowels set
    if(vowels.has(char))
    {
        foundVowels.add(char);
    }
   if (foundVowels.size === vowels.size )
   {
    break;
   }
}

if(foundVowels.size === vowels.size)
{
    console.log("The sentence contains all the vowels: a, e, i, o, u")
}
else
{
  console.log("The sentence does not contain all the vowels");  
}