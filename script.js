//Iterate with JavaScript Do...While Loops
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 11) 

// Replace Loops using Recursion
function sum(arr, n) {
    if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
  }

  // Generate Random Fractions with JavaScript
  function randomFraction() {
    return Math.random();
  }

  // Generate Random Whole Numbers with JavaScript
  function randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }

  // Generate Random Whole Numbers within a Range
  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }

  // Use the parseInt Function
  function convertToInteger(str) {
    return parseInt(str);
   }
   convertToInteger("56");

  //  Use the parseInt Function with a Radix
   function convertToInteger(str) {
    return parseInt(str, 2);
    }
    convertToInteger("10011");

  // Use the Conditional (Ternary) Operator
  function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
  }
  checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return (num == 0) ? "zero" 
  : (num > 0) ? "positive" : "negative";
  }
  checkSign(10);

    