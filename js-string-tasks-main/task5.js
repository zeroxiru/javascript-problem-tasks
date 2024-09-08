// ---
// ### Task-5:
// Capitalize Every first Letter of each word in a String

let sentence = "Xander plays the xylophone every weekend. Yara enjoys yoga and hiking in the mornings."
sentence = sentence.split(' ');

for(let i = 0; i <sentence.length; i++)
{
    sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substring(1);
   
}
sentence = sentence.join(' ');
console.log(sentence);