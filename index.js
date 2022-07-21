let weather = {
    apikey: "6c06887f3d3fc09b70eb5b9797c77203",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
       const name = data.name;
       const description = data.weather[0].description;
       const temp = data.main.temp;
       console.log(name,description, temp)
       document.querySelector(".city").innerText = name ;
       document.querySelector(".description").innerText = description;
       document.querySelector(".temperature").innerText = temp + " °C ";
    }

};