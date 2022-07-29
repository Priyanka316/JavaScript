let result; 
 switch(A) {
    case '+':
      result = B + C;
      break;

      case '-':
      result = B - C;
      break;

      case '*':
      result = B * C;
      break;

      case '/':
      result = B / C;
      break;

      default:
      result = "invalid operator";
      break;
 }
 return result;