import * as ELEMENTS from "./elements.js";
import { Http } from "./http.js";
import { WeatherData, WEATHER_PROXY_HANDLER } from "./weather-data.js";

const KEY = "46a4a7c4361c7f91cdd384618953b341";
const searchWeather = () => {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        return alert("Please enter city name");
    }
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + CITY_NAME + '&units=metrics&appid=' + KEY;
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';

    Http.fetchData(URL)
        .then(responseData => {
            console.log(responseData);
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;
            updateWeather(WEATHER_PROXY);
        })
        .catch(err => alert(err));
};

const updateWeather = (weatherData) => {
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPEARATURE.textContent = weatherData.temperature;
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';

}

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);
