// Reverse a Number.
// Write a program which takes a numebr 
// N
//  as input from the user and You need to reverse the number.

// Note: You have to complete Reverse_Number function. No need to take any input.

// Input Format
// The input contains a single number 
// N
// .

// Output Format
// Return the reversed number.

// Sample Input 1
// 1900

// Sample Output 1
// 91

// Sample Input 2
// 2012

// Sample Output 2
// 2102

var Reverse_Number = (N) => 
{
  N = N + "";
	let num = N.split("").reverse().join("");
  return parseFloat(num);
};