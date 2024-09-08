let sentence = 'A man in the village has an Apple garden and he used run business name The Best Apple in the town with its own renowned best quality apples.'

let vowels = new Set (['a', 'e', 'i', 'o', 'u']);
let foundVowels = new Set();
sentence = sentence.toLowerCase();

for(let i = 0; i < sentence.length; i++)
{
    let char = sentence[i];
    if(vowels.has(char))
    {
        foundVowels.add(char);
    }
    if (foundVowels.size == vowels.size)
    {
        break
    }
}

if (foundVowels.size === vowels.size)
{
    console.log(" The vowels are exist in the sentence");
}
else
{
    console.log(" The vowels are not exist in the sentence"); 
}
