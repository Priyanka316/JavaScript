const Triangle_Check = (A,B,C) => {
    let result;
       
           if (A < 90 && B < 90 && C < 90) {
              result = "acute";
           }
       
      else{
         result = "obtuse"
       }
       return result;
};
