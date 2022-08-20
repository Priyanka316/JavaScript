//1.
const text = document.getElementById("text");
console.log(text);
console.log(text.innerText);
console.log(text.innerHTML);

//2. 
const tag = document.getElementsByTagName("h1");
console.log(tag[0]);
console.log(tag[0].innerText);

//3. 
const box = document.getElementsByClassName("box");
console.log(box[0]);
 
//4.
// document.getElementById("hello").innerHTML = "Hello World";
function changeText(){
    const hello = document.getElementsByClassName("flex");
    hello[0].style.flexDirection = "Hello World"    
}
//5.
function changeFlexDirection(){
    const direction = document.getElementsByClassName("flex");
    direction[0].style.flexDirection = "column"    
}

//7.
let element = document.getElementsByClassName("heading");
console.log(element[0]);
console.log(element[0].innerText);
//element[0].style.color = "red";

//8.
const element1 = document.getElementById("ReplaceText");

//9.
// function time() {
//     const date = new Date();
//     const hours = date.getHours();
//     const mins = date.getMinutes();
//     const secs = date.getSeconds();
//     console.log(hours-12,mins,secs);
//     // setTimeout(() => )
// }
// time();
function clock1() {
    let currTime = new Date();
    let hrs = ("0" + currTime.getHours()).slice(-2);
    let mins = ("0" + currTime.getMinutes()).slice(-2);
    let secs = ("0" + currTime.getSeconds()).slice(-2);
    document.getElementById("clock").innerText = hrs + " : " + mins + " : " + secs;

    let x = setInterval(clock1, 500);    
}

//10.
function changeyear() {
    let Cyear  = document.getElementById("year");
    let Ytext = Cyear.options[Cyear.selectedIndex].text;
    document.getElementById("print").innerText = Ytext;
}

//11.
let mail = document.getElementById("email");
let defaultEmail = "Prepbypte.com";
mail.value = defaultEmail;
