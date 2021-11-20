"use strict";

function calc(a, b, operation) {
   let result;
   const isNotValid = (!a || !b || !operation || typeof a !== 'number' || typeof b !== 'number');
   if (isNotValid) {
      return "Error";
   }

   switch (operation) {
      case "sum":
         result = a + b;
         break;
      case "dif":
         result = a - b;
         break;
      case "multi":
         result = a * b;
         break;
      case "div":
         result = a / b;
         break;
      case "exp":
         result = a ** b;
         break;
      default:
         result = "unknown operation";
   }
   return result;
}

console.log(calc()));