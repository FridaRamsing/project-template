// En array (liste) af film - MEGET bedre!
var movieTitles = ["The Matrix", "Inception", "Interstellar"];
console.log("Alle film:", movieTitles);

// Opret array af filmtitler
var movieTitles = ["The Matrix", "Inception", "Interstellar"];

// Få fat i enkelte film (VIGTIGT: vi starter fra 0!)
console.log("Første film:", movieTitles[0]); // The Matrix
console.log("Anden film:", movieTitles[1]); // Inception
console.log("Tredje film:", movieTitles[2]); // Interstellar

// Find ud af hvor mange film vi har
console.log("Antal film:", movieTitles.length); // 3

// Start med nogle film
var movieTitles = ["The Matrix", "Inception", "Interstellar"];
console.log("Start:", movieTitles);

// Tilføj en film til slutningen
movieTitles.push("The Dark Knight");
console.log("Efter tilføjelse:", movieTitles);

movieTitles.push("frozen 2");
console.log("Efter tilføjelse:", movieTitles);

// Tilføj flere film på én gang
movieTitles.push("Pulp Fiction", "Goodfellas");
console.log("Efter flere tilføjelser:", movieTitles);

// Fjern den sidste film
const removedMovie = movieTitles.pop();
console.log("Fjernet film:", removedMovie);
console.log("Efter fjernelse:", movieTitles);


// Array med tekst (strings)
var movieTitles = ["The Matrix", "Inception", "Interstellar"];

// Array med tal (numbers)
const releaseYears = [1999, 2010, 2014];
const ratings = [8.7, 8.8, 8.6];

// Array med true/false (booleans)
const isFavorite = [true, false, true];

// Array med blandet indhold
const movieInfo = ["The Matrix", 1999, 8.7, true];

// Vis alle arrays
console.log("Titler:", movieTitles);
console.log("Årstal:", releaseYears);
console.log("Ratings:", ratings);
console.log("Favoritter:", isFavorite);
console.log("Blandet info:", movieInfo);

// Beregn gennemsnit af ratings
const sum = ratings[0] + ratings[1] + ratings[2];
const average = sum / ratings.length;
console.log("Gennemsnitlig rating:", average);