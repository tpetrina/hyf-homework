// 1. Array containing the movies with a short title

const shortTitleMovies = movies.filter(movie => movie.title.length < 4);
console.log(shortTitleMovies);


// 2. Array of movie titles with long movie titles

const longTitleMovies = movies.filter(movie => movie.title.length > 45);
console.log(longTitleMovies);


// 3. Count the number of movies made between 1980-1989

const countByYear = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989).length;
console.log(countByYear);


/* 4. Create a new array that has an extra key called tag.
*The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)*/

const ratingTag = movies.map(movie => {
    movie["tag"] = movie.rating >= 7 ? "Good" :
        movie.rating >= 4 && movie.rating < 7 ? "Average" : "Bad";
    return movie;
})
console.log(ratingTag);


/* 5.Using chaining, first filter the movies array to only contain 
*the movies rated higher than 6. 
*Now map the movies array to only the rating of the movies.*/

const moviesRating = movies.filter(movie => movie.rating > 6).map(movie => `Rating : ${movie.rating}`);
console.log(moviesRating);

// 6.Count the total number of movies containing the specific words in their title.


// First solution

const moviesTitle = movies.map(movie => {
    let surferTitle = (movie.title.match(/Surfer/gi) || []).length;
    let alienTitle = (movie.title.match(/Alien/gi) || []).length;
    let benjaminTitle = (movie.title.match(/Benjamin/gi) || []).length;
    let Count = surferTitle + alienTitle + benjaminTitle;
    return Count;
});
const TotalCount = moviesTitle.reduce((sum, num) => sum + num);
console.log(TotalCount);

// Second solution
let moviesCount = movies.filter(movie => movie.title.toLowerCase().includes("Surfer".toLowerCase()) ||
    movie.title.toLowerCase().includes("Alien".toLowerCase()) || movie.title.toLowerCase().includes("Benjamin".toLowerCase())).length;
console.log(moviesCount);

// 7. Create an array of movies where a word in the title is duplicated.

const duplicationInTitle = movies.filter(movie => movie.title.match(/\b(\w+)\b.*\b\1\b /gi) !== null);

console.log(duplicationInTitle);


// 8. Calculate the average rating of all the movies using reduce. Optional

const averageRating = movies.reduce(((Sum, movie) => Sum + movie.rating), 0) / movies.length;
console.log(averageRating);


// 9. Count the total number of Good, Average and Bad movies using reduce. 
// I used ratingTag Array which has been created in Step 4.

const moviesQuality =
    ratingTag.reduce((total, movie) => {
        if (movie.tag === "Good") {
            total.goodMovies++;
        }
        if (movie.tag === "Average") {
            total.averageMovies++;
        }
        if (movie.tag === "Bad") {
            total.badMovies++;
        }
        return total;
    },
        {
            goodMovies: 0,
            averageMovies: 0,
            badMovies: 0
        }
    );

console.log(moviesQuality);