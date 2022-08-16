// Reverse the String
// You are given a string 
// S
// , Your task is to Reverse the string.
// String can contain both upppercase lowercase letters. 
// Note: You have to complete Reverse_String function. No need to take any input.

// Input Format
// The first and the only line of the input contains a string 
// S
// .

// Output Format
// Return the reversed String.

// Example
// Sample Input
// I am utkarsh raj

// Sample Output
// jar hsraktu ma I

var Reverse_String = (str) => 
{
    return str.split("").reverse().join("");
};