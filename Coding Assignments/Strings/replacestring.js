// String Replace
// You are given a string 
// S
// , along with a pattern string and a text string. 
// You need to repalce the pattern string in 
// S
//  to the text string.

// Note: You have to complete Replace function. No need to take any input.

// Input Format
// The first and the only line of the input contains a string 
// S
// .

// Output Format
// Return updated String 
// S
//  as output.

// Example
// Sample Input
// Hi, I am You.
// You
// Prepbytes

// Sample Output
// Hi, I am Prepbytes.

var Replace = (S, pattern , text) => 
{
    const res = S.replace(pattern, text);
    return res;
};