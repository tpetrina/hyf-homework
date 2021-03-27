// Movies exercise
// I have done the exercise in 2 ways for practice.

const apiUrl = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

// 1
fetch(apiUrl)
    .then(response => response.json())
    .then(moviesData => {
        const badMovies = moviesData.filter(movie => movie.rating < 3);
        const badMoviesSince2000 = badMovies.filter(movie => movie.year >= 2000).map(movie => movie.title);
        console.log(badMovies);
        console.log(badMoviesSince2000);
    })
    .catch(error => console.log(error.message))


// 2
async function fetchMovies(url) {

    try {
        const movies = await fetch(apiUrl);
        const moviesData = await movies.json();
        const badMovies = moviesData.filter(movie => movie.rating < 3);
        const badMoviesSince2000 = badMovies.filter(movie => movie.year >= 2000).map(movie => movie.title);
        console.log(badMovies);
        console.log(badMoviesSince2000);

    } catch (error) {
        console.log(error.message)
    }
}

fetchMovies(apiUrl);