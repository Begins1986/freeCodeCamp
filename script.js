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

// Use Recursion to Create a Countdown  
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Use an Array to Store a Collection of Data
let yourArray; 
yourArray=[1, "2", true, false, "Hello"];

// Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
    return arr;
  }
  console.log(mixedNumbers(['IV', 5, 'six']));