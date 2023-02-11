
// Step 1: Declare and initialize a new variable to hold the current date
const today = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek = today.getDay();

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week
let dayOfWeekAsString;

// Step 4: Declare a variable to hold a message that will be displayed
let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = "Thank you for doing business with us";
}

// Step 6: Using an else statement, set the message variable to 'Woohoo! It is the weekend!'
else {
    message1 = "It's a beautiful day!";
}
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case 0:
        dayOfWeekAsString = "Sunday";
        break;
    case 1:
        dayOfWeekAsString = "Monday";
        break;
    case 2:
        dayOfWeekAsString = "Tuesday";
        break;
    case 3:
        dayOfWeekAsString = "Wednesday";
        break;
    case 4:
        dayOfWeekAsString = "Thursday";
        break;case 5:
        dayOfWeekAsString = "Friday";
        break;
    case 6:
        dayOfWeekAsString = "Saturday";
        break;
    default:
        dayOfWeekAsString = "Unknown";
    }
/* OUTPUT */
message2 = '' + new Date;

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").textContent = message1;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = message2;


// Variables to store the exchange rates and selected currencies
let exchangeRates;
let fromCurrency;
let toCurrency;

// Function to retrieve the exchange rates
async function getExchangeRates() {
  const apiUrl = `https://v6.exchangerate-api.com/v6/0235ccf5c5afcab3ccebb6d8/pair/${fromCurrency}/${toCurrency}`;
  const data = await response.json();
  exchangeRates = data.rates;
}

// Function to convert the currency
function convertCurrency(amount, fromCurrency, toCurrency) {
  const convertedAmount = amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  return convertedAmount;
}

// Function to handle the form submit event
function handleSubmit(event) {
  event.preventDefault();
  const amount = document.getElementById("amount").value;
  fromCurrency = document.getElementById("fromCurrency").value;
  toCurrency = document.getElementById("toCurrency").value;
  console.log(amount, fromCurrency, toCurrency);
  console.log(exchangeRates[toCurrency], exchangeRates[fromCurrency]);
  const result = convertCurrency(amount, fromCurrency, toCurrency);
  console.log(result);
  document.getElementById("result").textContent = `${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`;
}

// Get the form and the result element
const form = document.querySelector("#form");
const result = document.querySelector("#result");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Get the values of the input elements
  const amount = document.querySelector("#amount").value;
  const fromCurrency = document.querySelector("#fromcurrency").value;
  const toCurrency = document.querySelector("#tocurrency").value;

  // Calculate the conversion result
  const conversionResult = amount * exchangeRates[fromCurrency][toCurrency];

  // Update the result element with the conversion result
  result.textContent = `${amount} ${fromCurrency} is equal to ${conversionResult} ${toCurrency}`;
});
// Add event listener to the form to call the handleSubmit function
document.querySelector("form").addEventListener("submit", handleSubmit);
document.getElementById("result").innerHTML = "The converted amount is: " + convertedAmount;

// Call the getExchangeRates function to retrieve the exchange rates
getExchangeRates();
