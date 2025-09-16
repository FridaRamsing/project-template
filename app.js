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
  displayMovies(data); // Call displayMovies function with the fetched data
}

// Function to display movies
function displayMovies(movies) {
  // Clear previous content
  document.querySelector("#movie-list").innerHTML = "";
  // Loop through each movie and display it
  for (const movie of movies) {
    displayMovie(movie); // Call displayMovie function for each movie
  }
}

function displayMovie(movie) {
  // Function to display a single movie
  document.querySelector("#movie-list").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
      <article class="movie-card">
        <img src="${movie.image}" alt="Poster of ${movie.title}" class="movie-poster" />
        <div class="movie-info">
          <h3>${movie.title} <span class="movie-year">(${movie.year})</span></h3>
          <p class="movie-genre">${movie.genre.join(", ")}</p>
          <p class="movie-rating">⭐ ${movie.rating}</p>
          <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
        </div>
      </article>
    `
  );
}
