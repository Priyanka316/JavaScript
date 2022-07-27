

console.log("connected 🔥");

// data types



//1. Declarations✅: let, const and var

// var --> variable {global scope}
// const --> constant
// var vs const 
// var vs let
// let --> block{ghar, house} scope

// var a=12;
// console.log(a);
var a=34;
{
    a=56;
    console.log(a) 
}
console.log(a);


// Syntax error | Reference error | Type error
// Hoisting in JS
// https://www.geeksforgeeks.org/javascript-hoisting/#:~:text=In%20JavaScript%2C%20Hoisting%20is%20the,scope%20is%20global%20or%20local.


var language= "JavaScript is here";
// Functions

console.log(language);





console.log(names);
var names="Priyanka"


// Hoisting is not possible in let and const ❌

function addition1() {
    console.log(12+45);
}
var addition2=function () {
    console.log(12+45);
}
// fat arrow function
var addition3= () => {
    console.log(12+45);
}

addition1()

var language= "JavaScript is here"
//Functions
function trex(){
    console.log('function 1')
}

var trex1 = function(){
    console.log('function 2');
}

trex()
console.log(language)


var names="Priyanka"
console.log(names);