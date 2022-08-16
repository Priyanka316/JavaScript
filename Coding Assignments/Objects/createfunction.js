// Create a Function
// Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member named 
// n
// a
// m
// e
// . Your task is to create a method inside this object named 
// s
// e
// t
// t
// e
// r
// , such that this method will print the value of the data member named as 
// n
// a
// m
// e
// .

// Input Format
// The input will contain one name only, which denotes the only data member of the object.

// Output Format
// Your task is to create a method inside this object named as 
// s
// e
// t
// t
// e
// r
//  such that this method will print the value of the data member named as a name.

// Example
// Sample Input
// Utkarsh

// Sample Output
// Utkarsh

function Check(obj1){
    obj1.setter = function(){
      console.log(obj1.name);
    }
 }