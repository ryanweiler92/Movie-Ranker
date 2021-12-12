const moviesObject = [{
        
        title: "Midsommar",
        image: "./assets/images/Movie Posters/midsommar-poster.jpg"
        },
        {
            title: "It Follows",
            image: "./assets/images/Movie Posters/it-follows-poster.jpg"
        },
        {
            title: "Hereditary",
            image: "./assets/images/Movie Posters/hereditary-poster.jpg"
        },
        {
            title: "Get Out",
            image: "./assets/images/Movie Posters/get-out-poster.jpg"
        }];


var currentMovieIndex = 0;

var generateMovies = function() {

    for (var i = 0; i < moviesObject.length; i++) {


    var selectionRow = document.getElementById("selections");
    var selectionDiv = $("<div></div>")
    .addClass("col-12 col-md-6 col-xl-3 mb-3")
    .appendTo(selectionRow);
    var cardDiv = $("<div></div>")
    .addClass("card bg-tertiary")
    .appendTo(selectionDiv);
    var movieTitle = $("<h4></h4>")
    .addClass("card-header bg-dark text-light text-center")
    .text(moviesObject[i].title)
    .appendTo(cardDiv);
    }

    
}

var startBttn = document.getElementById("start-btn");

startBttn.addEventListener("click", generateMovies);

var resetBttn = document.getElementById("reset-btn");