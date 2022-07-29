const Check_divisibility = (N) => {
    let result; 
  if (N % 6==0 && N % 9==0){
     result = "Divisible by both";
  }
   else{
     result = "Not Divisible by both";
   }
    
    return result;
};

// console.log(Check_divisibility(27))
