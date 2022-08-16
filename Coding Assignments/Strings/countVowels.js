// Count the Vowels
// You are given a string 
// S
//  containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.

// Note: You have to complete Count_Vowel function. No need to take any input.

// Input Format
// The first and only line of the input contains string  
// S
// . 

// Output Format
// Return the number of Vowels in the string 
// S
//  as output.

// Example
// Sample Input
// Prepbytes

// Sample Output
// 2

var Count_Vowels= (S) =>  
{
  const count = S.match(/[aeiou]/gi).length;
  return count;
};