"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  getMovies();
}

// Function to fetch movies from a JSON file
async function getMovies() {
  const response = await fetch("./data/movies.json"); // Fetch the JSON file
  const data = await response.json(); // Parse the JSON data
  console.log(data); // Log the data to the console
  displayMovies(data); // Call displayMovies function with the fetched data
}

// Function to display movies (not implemented yet)
function displayMovies(movies) {
  // This function will be implemented to display movies on the webpage
  for (const movie of movies) {
    document.querySelector("#movie-list").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
        <p>${movie.title}</p>
        `
    ); // Display movie titles in the #movies element
  }
}
