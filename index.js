let weather = {
    apikey: "6c06887f3d3fc09b70eb5b9797c77203",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
        )
        .then((response) => {
            if (!response.ok) {
                alert("Invalid Entry");
          throw new Error("Invalid Entry");
            }
           return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
       const name = data.name;
       const description = data.weather[0].description;
       const temp = data.main.temp;
       const feelsLike = data.main.feels_like;
       console.log(name, description, temp, feelsLike)
       document.querySelector(".city").innerText = name ;
       document.querySelector(".description").innerText = "Weather Desciption: " + description;
       document.querySelector(".temperature").innerText = "Temperature: " + temp + " °C ";
       document.querySelector(".feels_like").innerText = "Feels Like: " + feelsLike + " °C ";
       document.querySelector(".weather").classList.remove("loading");
       document.body.style.backgroundImage =
       "url('https://source.unsplash.com/1600x900/?" + name + "')";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-city").value);
      },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });

  document.querySelector(".search-city").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
      }
  });