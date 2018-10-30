//Gyphin'

//Create an array of strings and store it into a variable named topics
//Create function that renders buttons for each object in the topics array
//On the event of clicking these buttons, ask the API for the corresponding data
//Select the first 10 data-types (gif) related to the selected button by the user
//Display data received (results) in the form of static gifs
//Create events that when the gifs are clicked, they animate
//Create a search box for input 
//Ask the API for the data input
//Add the object searched to the array of buttons

//Document ready
$(document).ready(function () {

        //Array of strings stored into variable 'topics'
        var topics = ["scuba dive", "kitesurf", "rollerskate", "bicycle", "snowboarding", "zipline", "paraglide"]

        function renderButtons() {
                $("#buttons").empty(); //This .empty method empties and populate the html with the loop below
                for (var i = 0; i < topics.length; i++) {
                        var b = $("<button>");
                        b.addClass("sports");
                        b.attr("data-name", topics[i]);
                        b.text(topics[i]);
                        $("#buttons").append(b);
                }
        }

        //Function to display the gifs on the screen after running through the api (button pressed)
        function displayResults() {
                $("#display").empty();
                var subject = $(this).attr("data-name");                     //Passing the animal name into a variable named subject
                var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=WfqTJJFDDTIrfk061oJHowQnGGylvPvI&limit=10";

                //AJAX call
                $.ajax({
                        url: queryURL,
                        method: "GET",
                }).then(function (response) {
                        var results = response.data;
                        console.log(results);

                        for (var i = 0; i < results.length; i++) {

                                var animated = results[i].images.fixed_height.url;
                                var still = results[i].images.fixed_height_still.url;

                                
                                var image = $("<img>");
                                image.attr("src", still);
                                image.attr("data-still", still);
                                image.attr("data-animate", animated);
                                image.attr("data-still", still);

                                var rated = $("<p>").text('Rating: ' + results[i].rating.toUpperCase());
                                $("#display").append(image);
                                $("img").prepend(rated);
                        };
                })

        }

        $(document).on("click", "img", function () {
                var state = $(this).attr("data-state");
                if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                }
        });


        $("#add-sport").on("click", function (event) {
                event.preventDefault();
                var sport = $("#sport-input").val().trim();
                if (sport === "") {
                        alert('Choose a sport. No blank spaces!')
                } else if (topics.includes(sport)) {
                        $("#sport-input").val("");
                        alert('Button Already Exists! Choose a new label.')
                } else {
                        topics.push(sport);
                        $("#sport-input").val("");
                        renderButtons();
                }
        });

        $("#clearBtns").click(function () {
                topics = ["scuba dive", "kitesurf", "rollerskate", "bicycle", "snowboarding", "zipline", "paraglide"];
                renderButtons();
        })

        $("#clear").click(function () {
                $("#display").empty();
                console.log(clear);
        })

        $(document).on("click", "button", displayResults);

        renderButtons();

})




