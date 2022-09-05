//Q-1. Write one example explaining how you can write a callback function

const names = (name) =>{
    console.log(`Hi, my name is ${name}`);
}

function typeName(name1, callback) {
    console.log("Enter your name");
    callback(name1);
}
typeName("priyanka", names);

//Q-2. Wrtie a Callback function to print numbers from 1 to 7,n which 1 should be printed after 1 sec, 2 should be printed after 2 sec 3 should be printed after 3 sec and so on.


const printNums = () => {
    console.log("Numbers");
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
                        setTimeout(() =>{
                            console.log("6");
                            setTimeout(() =>{
                                console.log("7");
                            }, 7000)
                        }, 6000)
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}
printNums();

//Q-4. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 after 2 sec and so on

let printNumber = ( time, num ) => {
    return new Promise( ( resolve, reject )=>{
        if( num ){
            setTimeout(()=>{
                resolve( num() )
            }, time)
        }
        else{
            reject( console.log("No number") )
        }
    })
}
printNumber( 0, ()=>console.log("Numbers"))//print Numbers at 0th sec.
.then(()=>{
    return printNumber(1000,()=>console.log('1'))//prints 1    
    //after 1 secs
})
.then(()=>{
    return printNumber(2000,()=>console.log('2'))//prints 2
    //after 2 secs and so for others
})
.then(()=>{
    return printNumber(3000,()=>console.log('3'))
})
.then(()=>{
    return printNumber(4000,()=>console.log('4'))
})
.then(()=>{
    return printNumber(5000,()=>console.log('5'))
})    
.then(()=>{
    return printNumber(6000,()=>console.log('6'))
})
.then(()=>{
    return printNumber(7000,()=>console.log('7'))
})

//Question 5. Create a promise function accpeting an argument. if yes is spassed the function should go to resolved state and print Promise Resolved. But if nothing is passed then it should go to reject state and catch the error and print Promise Rejected

const Arg = (num) => {
    return new Promise( (resolve, reject) =>{
        if(num % 2 == 0){
            resolve(console.log(`Printing number ${num} is even`))
            }
        else{
            reject( console.log(" This Number is not even"));
        }
    })
}

Arg(9)
.then(() =>{
      console.log("Number is Even");
})

.catch(() =>{
    console.log("Sorry!!");
})

// .finally(() =>{
//     console.log("End of Promise");
// })

//Question 6 - Create examples to explain callback hell function

const EmpId = () => {
    setTimeout(() =>{
        console.log("Search Employee Id");
        let id = [101, 102, 103, 104, 105, 106];
        console.log(id);

        setTimeout(() =>{
        let empDetails = {
        fName: "Nikunj",
        lName: "Rao",
        age: 24,
        };
        console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age} `);

        setTimeout(() =>{
        (empDetails.gender = 'Male'),
        console.log(`The name of the Employee gender is ${empDetails.gender}`);
        }, 2000);
    }, 2000);
},2000);
}

EmpId();

//Q-7. Create examples to explain async and await functions

async function promises(){
    console.log("I am inside the async function"); // after line 145, this is printed as the function is called
    const response = await fetch("https://api.github.com/users") //4th  line inititated but not finished because javascript has to wait so it leaves the async function and goes to line 147
    console.log("before the response is fetched"); // after line 148
    const users = await response.json();
    console.log("Users resolved");

    return users;
}

   console.log("This is printed first");
   let data = promises() // functions Promises is called
   console.log("After calling the function"); //  this is printed
   console.log("data recieved", data); // again function Promises is called
   data.then((res) =>{
   console.log(res);
})

//Q-8. Create examples to explain promise.all functions

const var1 = Promise.resolve(4);
const var2 = 70;
const var3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'Are You there');
});

Promise.all([var1, var2, var3]).then((values) => {
  console.log(values);
});