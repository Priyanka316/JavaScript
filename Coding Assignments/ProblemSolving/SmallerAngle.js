// Substring Check.
// You are given two strings 
// S
// 1
//  and 
// S
// 2
// , you need to check whether the string S1 is a substring of string S2 or not.

// Note: You have to complete Substring_Check function. No need to take any input.

// Input Format
// The first line of input contains the first string 
// S
// 1
// .
// The second line of input contains the second string 
// S
// 2
// .

// Output Format
// Return "YES" if 
// S
// 1
//  is a substring of 
// S
// 2
//   else return "NO".

// Example
// Sample Input 1
// Hii this is Prepbuddy
// Prepbuddy

// Sample Output 1
// YES

// Sample Input 2
// Hii this is Prepbuddy
// Prepbytes

// Sample Output 2
// NO

var Substring_Check = (S1, S2) => 
{
    if(S1.includes(S2))
   {
     return "YES"
   }
   else
   {
     return "NO"
   } 
};