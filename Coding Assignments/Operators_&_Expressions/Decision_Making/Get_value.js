const getValue = (a) => {
    let result ;
    if (a == 'P' || a== 'p'){
      return "PrepBytes";
    }
    else if(a== 'Z' || a == 'z'){
      return "Zenith";
    }
    else if(a== 'E' || a == 'e'){
      return "Expert Coder";
    }
    else if(a== 'D'|| a =='d'){
      return "Data Structure";
    }
    else {
      return result;
    }
};