var form = document.querySelector("form");



//URL that we need to query the database:
var APIKey = "70ef7114ad41776899346875cbf45412";
var searchCity = document.getElementById("searchCity");
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "units=imperial&appid=" + APIKey;
