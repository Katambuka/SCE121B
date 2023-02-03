/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let info = {}
// Step 2: Inside of the object, add a property named name with a value of your name as a string
info.name = ['Nathane','Kanyesigye']
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
info.MyImage = "images/edited image.png";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
info.favoriteFood = ['Matooke','Meat','Rice','Butter steamed veggies'];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
info.hobbies =['Soccer','Watching movies','Bird watching'];
// Step 6: Add another property named placesLived with a value of an empty array
info.placesLived = []
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
info.placesLived.push({
    place: 'Kampala',
    length: '10 years',
    })
// Step 8: For each property, add appropriate values as strings
info.placesLived.push({
    place: "Dubai",
    length: "4 years"
  });
// Step 9: Add additional objects with the same properties for each place you've lived
info.placesLived.push({
    place: 'Bushenyi',
    length: '6 years',
    })

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerHTML = info.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = info.MyImage;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = info.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFoodsList = "";
for (let i = 0; i < info.favoriteFood.length; i++) {
  favoriteFoodsList += "<li>" + info.favoriteFood[i] + "</li>";
}
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.getElementById("favorite-foods").innerHTML = favoriteFoodsList;
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbiesList = "";
for (let i = 0; i < info.hobbies.length; i++) {
  hobbiesList += "<li>" + info.hobbies[i] + "</li>";
}
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.getElementById("hobbies").innerHTML = hobbiesList;
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placesLivedList = "";
for (let i = 0; i < info.placesLived.length; i++) {
  placesLivedList += "<dt>" + info.placesLived[i].place + "</dt><dd>" + info.placesLived[i].length + "</dd>";
}
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.getElementById("places-lived").innerHTML = placesLivedList;