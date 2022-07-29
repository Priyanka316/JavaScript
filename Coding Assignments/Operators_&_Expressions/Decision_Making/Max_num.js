const Max_out_of_three = (A,B,C) => {
    max_val = 0;
      if (A > B)
      {
        max_val = A;
      } else
      {
        max_val = B;
      }
      if (C > max_val) 
      {
        max_val = C;
      }
      else if ( A == B  && B== C && C==A){
        max_val = "-1" ;
      }
      return max_val;
};
