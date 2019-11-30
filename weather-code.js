var form = document.querySelector("form-group");
var ul = document.querySelector("ul");
var button = document.querySelector("button");
var input = document.getElementById("searchCity");



//URL to query the database:
var APIKey = "70ef7114ad41776899346875cbf45412";
var searchCity = document.getElementById("searchCity");
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "units=imperial&appid=" + APIKey;


//1. user types a city, clicks search. Data goes to local storage
//2. searched city will appear in a list of recent searches as a link
//3. searched city will go to API and show the results as 5 day forecast