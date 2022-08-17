// Perfect Number Check.
// Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.

// Now, You are given an integer 
// N
// , write a program to check whether the given number is a Perfect Number or not.

// Note: You have to complete Perfect _Check function. No need to take any input.

// Input Format
// The input contains a single number 
// N
// .

// Output Format
// Return "YES" if the number is a Perfect Number, else return "NO".

// Example
// Sample Input 1
// 1

// Sample Output 1
// YES

// Sample Input 2
// 96345

// Sample Output 2
// NO

var Perfect_Check = (N) => 
{
    let sum = 1;
      
      for(let i = 2; i <= N/2; i++)  {
        if(N/i == 0) {
          sum = sum + i;
        }
      }
      
      if(sum == N) {
        return "YES"
      }
      
      return "NO";          
};