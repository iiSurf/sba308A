import { getWeatherEmoji } from './utilities.mjs';

// to display weather info
function displayWeatherInfo(data, card) {

    // destructuring the data to extract certain weather information
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

    // clearing the card content
    card.textContent = '';
    card.style.display = 'flex';

    // creating DOM elements to display weather information
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');

    // setting text content
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * 9 / 5 + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    // adding css to the DOM elements
    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descriptionDisplay.classList.add('descriptionDisplay');
    weatherEmoji.classList.add('weatherEmoji');

    // appending DOM elements to card
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(weatherEmoji);
}

function displayError(message, card) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');
    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay);
}

// Exporting the displayWeatherInfo and displayError functions to make them available for import in other modules
export { displayWeatherInfo, displayError };