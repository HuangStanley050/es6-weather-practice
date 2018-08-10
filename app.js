import * as ELEMENTS from "./elements.js";

const searchWeather = () => {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        return alert("Please enter city name");
    }

};

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);
