const findRelation = (x,y) => {
    if (x < y){
      return (x + " is smaller than " + y)
    }
    else if (x > y){
      return (x + " is greater than " + y)
    }
    else if (x == y){
      return (x + " is equal to " +y)
    }
    else{
      return ("unkown")
    }
};

