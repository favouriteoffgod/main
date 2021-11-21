"use strict";

function calc(a, b, operation) {

   const isNotValid = (!a || !b || !operation
      || typeof a !== 'number' || typeof b !== 'number');

   let operations = {
      sum: (a + b),
      sub: (a - b),
      mult: (a * b),
      div: (a / b),
      exp: (a ** b),
   }

   if (isNotValid) {
      return "Error";
   } else if (operation in operations) {
      return (operations[operation]);
   } else {
      return "Unknown operaton";
   }
}

console.log(calc(5, 4, "sum"));