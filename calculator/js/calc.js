"use strict";

let a = +prompt("Enter the first number", "");
let b = +prompt("Enter the second number", "");
let operation = prompt("Enter the operation", "");



function calc(a, b, operation) {
   let result;
   if (!a || !b || !operation || typeof a !== 'number' || typeof b !== 'number') {
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

alert(calc(a, b, operation));