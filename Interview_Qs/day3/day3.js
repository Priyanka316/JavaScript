// 1.What are promises and why do we need them?
//8.What is promise chaining

const printAlphabets = (time,value) =>{
    return new Promise ((resolve,reject) =>{
      setTimeout(() =>{
        console.log(value);
        resolve();
      },time);
    })
  }
  
  printAlphabets(6000,"A")
  
    .then(() => printAlphabets(5000,"E"))
    .then(() => printAlphabets(4000,"I"))
    .then(() => printAlphabets(3000,"O"))
    .then(() => printAlphabets(2000,"U"))//multiple blocks leads to promise chaining
  
  
  // 2.What is the purpose of async/await keywords?
  //10.Give an example of async/await
  
  const printAlphabet = (time,value) =>{
    return new Promise ((resolve,reject) =>{
      setTimeout(() =>{
        console.log(value);
        resolve();
      },time);
    })
  }
  
  async function newFunction(){
           await printAlphabet(6000,"A")
           await printAlphabet(5000,"E")
           await printAlphabet(4000,"I")
           await printAlphabet(3000,"O")
           await printAlphabet(2000,"U")
  }
  newFunction();
  
  //3.What is hoisting?
  
  console.log(a);
  var a =10;
  
  //callback hell
  
  function printNumber(){
    setTimeout(() =>{
      console.log("1");
          setTimeout(() =>{
          console.log("2");
             setTimeout(() =>{
              console.log("3");
                setTimeout(() =>{
                  console.log("4");
                    setTimeout(() =>{
                      console.log("5");
                    },5000);
                },4000);
             },3000);
          },2000);
    },1000);
  }
  printNumber();
  
  //9.What are arrow functions?
  
  const x = () =>{
    console.log("Arrow Function");
  }
  x();