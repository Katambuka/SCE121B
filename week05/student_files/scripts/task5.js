/* Lesson 5 */

/* IF/ELSE IF */

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
    message1 = "Hang in there!";
}

// Step 6: Using an else statement, set the message variable to 'Woohoo! It is the weekend!'
else {
    message1 = "Woohoo! It is the weekend!";
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
message2 = "Today is " + dayOfWeekAsString;

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").textContent = message1;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = message2;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
const output = (temples) => {
    temples.forEach((temple) => {
      let article = document.createElement("article");
  
      let templeName = document.createElement("h3");
      templeName.textContent = temple.templeName;
  
      let location = document.createElement("h4");
      location.textContent = temple.location;
  
      let dedicated = document.createElement("h4");
      dedicated.textContent = temple.dedicated;
  
      let img = document.createElement("img");
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", temple.templeName);
  
      article.appendChild(templeName);
      article.appendChild(location);
      article.appendChild(dedicated);
      article.appendChild(img);
  
      document.querySelector("#temples").appendChild(article);
    });
  };
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
async function getTemples() {
    // Call the built-in fetch method
    const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
    // Convert fetch response into a Javascript object
    templeList = await response.json();
    // Call the output function and pass it the list of temples
    output(templeList);
}
getTemples();
// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    // Clear all of the <article> elements from the HTML element with an ID of temples
    var temples = document.getElementById('temples');
    temples.innerHTML = '';
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy() {
    // Call the reset function
    reset();
    // Sort the global temple list by the currently selected value of the HTML element with an ID of sortBy
    var sortBySelect = document.getElementById('sortBy');
    var sortValue = sortBySelect.value;
    var sortedTemples;
    if (sortValue === 'templeNameAscending') {
        sortedTemples = templeList.sort(function(a, b) {
            return a.templeName > b.templeName;
        });
    } else if (sortValue === 'templeNameDescending') {
        sortedTemples = templeList.sort(function(a, b) {
            return a.templeName < b.templeName;
        });
    }
}
    // Call

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById("sortBy").addEventListener("change", sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
function filterByLocation(temples, location) {
    return temples.filter(temple => temple.location === location);
}

// Add change event listener to the filter dropdown
document.getElementById("filterBy").addEventListener("change", function() {
    reset();
    var location = this.value;
    var filteredTemples = filterByLocation(templeList, location);
    output(filteredTemples);
});
