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
        var topics = ["Snakes", "Sharks", "Bears", "Cats", "Dogs", "Skunks", "Racoons", "Crocodiles", "Birds", "Lizards"]

        //Function to create and print buttons for each string in the array (topics)
        function renderButtons() {
                $("#buttons").empty(); //This .empty method empties and populate the html with the loop below
                for (var i = 0; i < topics.length; i++) {
                        var b = $("<button>");
                        b.addClass("animals");
                        b.attr("animal-name", topics[i]);
                        b.text(topics[i]);
                        $("#buttons").append(b);
                }
        }

        //Function to display the gifs on the screen after running through the api (button pressed)
        function displayResults() {
                var subject = $(this).attr("animal-name"); //Passing the animal name into a variable named subject
                var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=WfqTJJFDDTIrfk061oJHowQnGGylvPvI";

                //AJAX call
                $.ajax({
                        url: queryURL,
                        method: "GET",
                }).then(function (response) {
                        console.log(response);
        
                        for (var i = 0; i < response.data.length; i++);
                        console.log(results);

                })
        }

        renderButtons();

})




