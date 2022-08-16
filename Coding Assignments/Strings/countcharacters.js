//Count Characters
// You are given a string 
// S
// , and your task is to return an array 
// B
 
// (
// having a size of 
// 2
// )
// , where 
// B
// [
// 0
// ]
//  contains the count of character A (uppercase) in string S and 
// B
// [
// 1
// ]
//  contains the count of character D (uppercase) in string S.

// Note: You have to complete countCharacters function. No need to take any input.

// Input Format
// The first and the only line of the input contains a string 
// S
// .

// Output Format
// Return array 
// B
//  as output.

// Example
// Sample Input
// AbaDd

// Sample Output
// 1 1


const countCharacters = (S) => 
{
  let B = [2];
  let countA = 0;
  let countD = 0;
  
  for (let i = 0; i < S.length; i++) {
    if (S[i] == "A") {
      countA = countA + 1;
    } else if (S[i] == "D") {
      countD = countD + 1;
    }
  }
  
  B[0] = countA;
  B[1] = countD;
  return B;
}