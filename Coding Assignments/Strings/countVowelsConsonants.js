// Count the Vowels and Consonants
// You are given a string 
// S
//  containing both uppercase and lowercase letters. 
// You need to find out the number of vowels and the number of consonants in the given string.

// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.

// Input Format
// The first and only line of the input contains string  
// S
// . 

// Output Format
// Return the number of Vowels and the number of Consonants in the string 
// S
//  in the functions.


// Example
// Sample Input
// Prepbytes

// Sample Output
// 2
// 7

var Count_Vowels= (S) => 
{
    let count = 0;
    let Vowels = ["a","e","i","o","u"];
    
    for(let letter of S.toLowerCase()){
      for(let V of Vowels){
        if(letter==V){
          count++;
        }
      }
    }
    return count;
};
var Count_Consonants= (S) => 
{
    return S.length - Count_Vowels(S);  
};