let city = document.getElementById('location');
let btn = document.getElementById('btn');
let todaysWeather = document.getElementById('today_weather');
let tomorrowsWeather = document.getElementById('tomorrow_weather');
let futureWeather = document.getElementById('seven_day_weather')

const apiKey = '4f688c43d5ee4239aeb142743242301';
const getWeather = async () => {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}&days=7`);
    let data = await response.json();
    console.log(data);
    todaysWeather.innerHTML = 'Temperature= ' + data.current.temp_c + '<br>' + 'Humidity= ' + data.current.humidity + '<br>' + 'Feels Like= ' + data.current.feelslike_c + '<br>' + 'Pressure= ' + data.current.pressure_mb + '<br>';

}
const getForecast = async () => {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city.value}&days=7`);
    let data = await response.json();
    console.log(data);
    tomorrowsWeather.innerHTML = 'Temperature= ' + data.forecast.forecastday[1].day.avgtemp_c + '<br>' + 'Humidity= ' + data.forecast.forecastday[1].day.avghumidity + '<br>' + 'Feels Like= ' + data.forecast.forecastday[1].day.avgtemp_c + '<br>' + 'Pressure= ' + data.forecast.forecastday[1].day.avgtemp_c + '<br>';

}
const getSevenDayForecast = async () => {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city.value}&days=7`);
    let data = await response.json();
    console.log(data);

    let forecastDays = data.forecast.forecastday;

    let today = new Date();
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    futureWeather.innerHTML = '';

    for (let i = 0; i < forecastDays.length; i++) {
        let forecastDay = forecastDays[i].day;
        let dayOfWeek = daysOfWeek[(today.getDay() + i) % 7];

        futureWeather.innerHTML += `${dayOfWeek}: ${forecastDay.maxtemp_c}°C <br>`;
    }
}

btn.addEventListener('click', () => {
    getWeather();
    getForecast();
    getSevenDayForecast();
});