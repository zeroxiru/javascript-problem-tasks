// ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//     Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let sentence = "Xander plays the xylophone every weekend. Yara enjoys yoga and hiking in the mornings."



let newSentence = sentence.replace(/x/g, 'y').replace(/X/g, 'Y');
console.log(newSentence);


