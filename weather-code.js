var form = document.querySelector("form-group");
var ul = document.querySelector("ul");
var button = document.querySelector("button");
var input = document.getElementById("searchCity");



//URL to query the database:
var APIKey = "70ef7114ad41776899346875cbf45412";
var searchCity = document.getElementById("searchCity");
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "units=imperial&appid=" + APIKey;


//1. User types a city name, clicks search. Data goes to local storage:

localStorage.setItem("items", JSON.stringify(itemsArray));

var data = JSON.parse(localStorage.getItem("items"));

function liMaker(text) {
    var li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
};

form.addEventListener("submit", function(e) {
    e.preventDefault()

    itemsArray.push(input.value)
    input.value = ""
});




//2. searched city will go to API and show the results as 5 day forecast
//3. searched city will appear in a list of recent searches as a link 
//4. when recent searches are clicked, it get to #2