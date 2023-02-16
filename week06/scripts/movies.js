// Select the button element
const button = document.querySelector('button');

// Add event listener to the button element
button.addEventListener('click', handleClick);

// Define the handleClick function
function handleClick() {
  // Fetch data from the Star Wars API
  fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(data => {
      // Filter the data to get only the films released after 1999
      const filteredData = data.results.filter(film => parseInt(film.release_date.slice(0, 4)) > 1999);
      
      // Map the filtered data to an array of film titles
      const filmTitles = filteredData.map(film => film.title);
      
      // Update the HTML to display the film titles
      const filmList = document.querySelector('#film-list');
      filmList.innerHTML = '';
      filmTitles.forEach(title => {
        const listItem = document.createElement('li');
        listItem.textContent = title;
        filmList.appendChild(listItem);
      });
    })
    .catch(error => console.log(error));
}

// Define a function that uses conditional branching
function isEven(num) {
  if (num % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
