//1. Problem:
//You are given a string (STR) of length N, consisting of only the lower case English alphabet.
//Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb


// Output:
// abcdef"

function singleAlp (arr) {
    let a = [], res = [];
    a.push(arr[0]);
    for(let i = 1; i <arr.length; i++) {
        if(!(a.includes(arr[i]))) {
            a.push(arr[i]);
        }
    }

    console.log(a);
}
let str = "abcadeecfb";
let arr1 = str.split("");



//2. "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

function alphabetNum(arr) {
    let a = [], res = [];
    // a.push(arr[0]); 
    for(let i = 0; i < arr.length; i++) {
        if(!(a.includes(arr[i]))) {
            // console.log(arr[i]);
            a.push(arr[i]);
            res.push((arr.filter(item => item === arr[i])).length);
            console.log(a[a.length-1] + " = " + res[res.length-1] + " times");
        }
    }   
}

let arr2 = str.split("");

 singleAlp(arr1);

// console.log("-----------------------------");


alphabetNum(arr2);