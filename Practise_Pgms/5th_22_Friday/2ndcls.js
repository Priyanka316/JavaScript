//1.
function sum()
{
    console.log("Prepbytes");
}
sum();

//2.
function add(a,b)
{
    let sum;
    sum=a+b;
    console.log(sum); 
}
add(3,4);

//4.

const addition = (a,b) =>{
    let result = a+b;
    console.log(result);
}
// console.log(addition);
addition(6,8);

//5.
var x=21;
var girl=function(){
    console.log(x);
    var x=20;
};
girl();//undefined

//6.
var x=21;
girl()
console.log(x)
function girl(){
    console.log(x);//undefined
    var x = 20;
};

//7.
var x=21;
a();
b();
console.log(a)
a=function(){
    let a;
    a=20;
    console.log(a);
};
b=function(){
    x=40;
    console.log(x);
};

//8.
function fact(n){
    if (n===0)
    {
        return 1;
    }
        return (n * fact (n - 1));
}
console.log(fact(5)); //120
