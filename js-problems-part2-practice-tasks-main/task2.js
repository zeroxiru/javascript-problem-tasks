// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName = heights2[0]
for(let i=1; i < heights2.length; i++)
{
    if(heights2[i].length < smallestName.length)
    {
        smallestName = heights2[i];
    }
}

console.log(smallestName);