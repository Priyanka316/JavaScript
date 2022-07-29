const findGrades = (a) => {
    let result;
    if (a<= 10){
    return 'E';
    }
    
    else if (a>=11 && a<=20){
      result="D";
    }
    else if (a>=21 && a<=30){
      result="C";
    }
     else if (a>=31 && a<=40){
      result="B";
    }
     else if (a>=41 && a<=50){
      result="A";
    }
    else{
      result="invalid marks"
    }
    return result;
    
};

