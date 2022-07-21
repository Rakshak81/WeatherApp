let weather = {
    "apikey": "6c06887f3d3fc09b70eb5b9797c77203",
    fetchWeather: function () {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=6c06887f3d3fc09b70eb5b9797c77203"
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
};