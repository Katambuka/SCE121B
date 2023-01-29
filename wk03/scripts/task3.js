/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
  return number1 + number2;
}

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
//function addNumbers() {
 // var number1 = document.getElementById("#addend1").value;
 //var number2 = document.getElementById("#addend2").value;
  //var sum = add(number1, number2);

//}
function addNumbers() {
  let sum = add(parseInt(document.querySelector('#addend1').value), parseInt(document.querySelector('#addend2').value));
}

// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
  let sum = add(parseInt(document.querySelector('#addend1').value), parseInt(document.querySelector('#addend2').value));
  document.querySelector('#sum').value = sum;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(number1, number2) { 
  return number1 - number2; 
}


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (factor1, factor2) => {
  return factor1 * factor2;
}

const multiplyNumbers = () => {
  const factor1 = document.getElementById("#factor1").value;
  const factor2 = document.getElementById("#factor2").value;
  const product = multiply(factor1, factor2);
  document.getElementById("product").value = product;
}
// adding eventlistener
document.getElementById("#multiplyNumbers").addEventListener("click", multiplyNumbers);

//assigning the result of multiplication in the html
document.getElementById("#product").value = product;




// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const subtractNumbers = function() { 
  const minuend = document.getElementById("#minuend").value; 
  const subtrahend = document.getElementById("#subtrahend").value; 
  const difference = subtract(minuend, subtrahend);
  document.getElementById("#difference").value = difference; 
}

// Step 9: Test all of the mathematical functionality of the task3.html page.

document.getElementById("#subtractNumbers").addEventListener("click", subtractNumbers);


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
var today = new Date();

// Step 2: Declare a variable to hold the current year
var today = today.getFullYear();

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
var today = new Date();
var currentYear;
currentYear = today.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("#year").value = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("#array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let numbers = [...Array(25).keys()].map(i => i + 1);
let odds = numbers.filter(num => num % 2 !== 0);
document.getElementById("#array").innerHTML = numbers;
document.getElementById("#odds").innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
document.getElementById("#evens").innerHTML = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
document.getElementById("#sumOfArray").innerHTML = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplied = numbers.map(num => num * 2);
document.getElementById("#multiplied").innerHTML = multiplied;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = multiplied.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
document.getElementById("#sumOfMultiplied").innerHTML = sumOfMultiplied;