/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const MyName = "Kanyesigye Nathane"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = MyName;

// Step 3: declare and instantiate a variable to hold the current year
const CurrentYear = 2023;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = CurrentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const MyImage = "images/edited image.png";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector("img").setAttribute("src", MyImage);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const FavoriteFood = ["Matooke","Meat","Rice","Butter steamed veggies"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = FavoriteFood;

// Step 3: declare and instantiate a variable to hold another favorite food
 const AddFavoriteFood = ("Roasted potatoes");

// Step 4: add the variable holding another favorite food to the favorite food array
FavoriteFood.push(AddFavoriteFood);
// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = FavoriteFood;

// Step 6: remove the first element in the favorite foods array
FavoriteFood.splice(0, 1);

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = FavoriteFood;


// Step 8: remove the last element in the favorite foods array
const removed = FavoriteFood.pop()

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = FavoriteFood;


