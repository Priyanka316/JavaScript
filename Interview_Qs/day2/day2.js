//1.Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
//call()

//creating an object for the reference
//call():In this case of call each and every argument which is required to be passed to th function will be passed individually
console.log("call()");
let user = {
    name:"keerthi",
    age:20,
    city:"Ahmedabad"
}
let user1 = {
    name:"manoj",
    age:20,
    city:"gujrat"
}

function UserDetails(company,designation){
    console.log("Hello",this);
    console.log(this.name + "is" + this.age + "years old",company," ",designation);
}
UserDetails.call(user1,"Google","Backend Developer");

console.log("---------------------------------------------------");

// apply():In case of apply each and every argument which is required to be passed to the function will be passed inside an array

console.log("apply()");

UserDetails.apply(user,["HP","frontend Developer"]);

console.log("---------------------------------------------------");

//bind():In case of bind ,it will return yo a new function.And this new function you can use anytime anywhere.

console.log("bind()");

const newFunction = UserDetails.bind(user);
newFunction("Flipkart","Data Sceintist");

console.log("---------------------------------------------------");

//2.What are objects in javascript?

console.log("Objects");

const ObjName = {
    name:'Sairam',
    age:24,
}

console.log('I am '+ObjName.age + 'years old');
console.log("----------------------------------------------------");

//3.What are function constructors?

console.log("Function Constructor");

function Person(name,salary){
    this.name = name,
    this.salary = salary
}

const person1 = new Person('sanjay',50000);
console.log(person1.name);

console.log("----------------------------------------------------");

//4.Explain prototypes
const Person1 = {
    Pname:"Roshan",
    mname:"Apple",
    price: 57000,
    showDetails: function(){
        console.log(`The Person1 is ${Person1.Pname},and mname is ${Person1.mname},and it's price is ${Person1.price}`);
        return (`manem is ${Person1.mname},and its's price is ${Person1.price}`);
    }    
}
console.log(Person1);

const Dress = {
    Pant:"Bellbottom",
    rate:2000,
    ring:"gold",
    Ttlbill:
    showDetails=function(){
        console.log(`Pant name is ${Dress.Pant},and it's rate is ${Dress.rate},and ring is ${Dress.ring},and Total Bill is ${Dress.Ttlbill}`);
        return (`Pant name is ${Dress.Pant},and it's rate is ${Dress.rate},and ring is ${Dress.ring},and Total Bill is ${Dress.Ttlbill}`);
    }
}
console.log(showDetails());
console.log(Dress);

Dress.__proto__ = Person;
console.log(Dress.Pname);

//5.What is prototype chain?
console.log("prototype and prototype chain");

function Data(name,age){
    this.name = name;
    this.age = age;
    this.salary = 10000000;
}

let data1 = new Data("Anwar",23);
let data2 = new Data("shanth",45);

console.log(data1);
console.log(data2);



//in case ,if you want to add other properties by using function constructor:


data1.salary = 500000;
console.log(data1);

//in case when you want to add properties inside the function constructor

Data.prototype.Nationality = "India";
data1.Nationality = "American";
console.log(data1.Nationality);

console.log("----------------------------------------------------");

//6.Give an example of inheritance using function constructor

console.log("Inheritence");

function Animal(name,color){
    this.name = name;
    this.color = color;
}

function AnimalDescription(name,color,age,sound){
    Animal.call(this,name,color);
    this.age = age;
    this.sound = sound;
}

let Animal1 = new AnimalDescription('Bruno','Dark',2,'Barks')
console.log(Animal.prototype);
console.log(Animal1);

console.log("----------------------------------------------------");


//7.What are callbacks?
console.log("callback");

function output(callback){
    console.log("out");
    callback()
};
function input(){
    console.log("in");
};
output(input);



console.log("callback with setTimeout");
function firstFunction(){
    setTimeout(function(){
        console.log("First function called");
    },1000);
}

function secondFunction(){
    console.log("Second function called");
}

firstFunction();
secondFunction();

console.log("----------------------------------------------------");

//8.What is the use of setTimeout

console.log("setTimeout");

setTimeout(function(){
    console.log("Hi everyone");
},3000)

console.log("----------------------------------------------------");

//9.What are pure functions?

function calculateGST( productPrice ) {
    console.log(productPrice * 0.05);;
}
calculateGST(5);

console.log("----------------------------------------------------");