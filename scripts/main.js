const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";



// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });