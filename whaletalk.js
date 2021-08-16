let input="a whale of a deal!";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray=[];

for(let i=0; i<input.length; i++){
 // console.log("i is "+i);//To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string.
 for(let j=0; j<vowels.length; j++)//Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.{
//console.log("j is "+j);//To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.
if (input[i] === vowels[j]){//nside the second for loop, write a code block that compares the input letter to every letter in the vowels array. 
 resultArray.push(vowels[j]);
    }
    //Write an if statement that checks if each letter in the input string is equal to 'e'. If so, .push() input[i] to the resultArray.Note, this statement belongs after the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.
if (input[i] === "e"){
   resultArray.push(input[i]);
}

if (input[i] === "u"){
   resultArray.push(input[i]);
}
}

console.log(resultArray);//[ 'a', 'a', 'e', 'e', 'o', 'a', 'e', 'e', 'a' ]
//Notice when we log the array, the output has commas between each letter. To produce proper whale language, we want to capitalize the array elements and put them together as one string.

console.log(resultArray.join("").toUpperCase());//AAEEOAEEA