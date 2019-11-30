//VARIABLES AND OTHER USEFUL ITEMS:

var form = document.querySelector("form-group");
var ul = document.querySelector("ul");
var button = document.querySelector("button");
var input = document.getElementById("searchCity");

//to check if the items are already stored in the local storage (so when the page refresh it won't disappear)
var itemsArray = [] 

if (localStorage.getItem("myCities")) {
    itemsArray = JSON.parse(localStorage.getItem("myCities"))
} else {
    itemsArray = []
};   

//=====================================

//FUNCTIONS:

//1. User types a city name, clicks search. Data goes to local storage:

localStorage.setItem("myCities", JSON.stringify(itemsArray));

var data = JSON.parse(localStorage.getItem("myCities"));

function liMaker(text) {
    var li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
};

button.addEventListener("click", function(e) {
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem("myCities", JSON.stringify(itemsArray))

    liMaker(input.value)
    input.value = ""
});

// will display all previously stored info from Local St every time you open the app
data.forEach(function (item) {
    liMaker(item)
});

//====================================================

// 2. searched city will go to API and show the results as 5 day forecast

// URL to query the database:
var APIKey = "70ef7114ad41776899346875cbf45412";
var searchCity = document.getElementById("searchCity");
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&appid=" + APIKey;

// Run our AJAX call to the OpenWeatherMap API:
$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {
    console.log(queryURL);
    console.log(response);

    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F): " + response.main.temp);

    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + response.main.temp);

});


// 3. searched city will appear in a list of recent searches as a link 
// 4. when recent searches are clicked, it get to #2