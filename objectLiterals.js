/** object literals **/
const movie = {
    title: "The Avengers",
    year: 2020,
    genre: "Action, Sci-fi, Thriller",
    cast:[" Robert Drown Junior, Elligabet, Chris Evens"],
    getDetails: function(){
        console.log(`Titile:${movie.title}\n Year:${movie.year}\n Genre:${movie.genre}\n Cast:${movie.cast}`);
    }
};

console.log(movie.title);
movie.getDetails();
