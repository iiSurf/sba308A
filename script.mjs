const weatherForm = document.querySelector(`.weatherForm`);
const cityInput = document.querySelector(`.cityInput`);
const card = document.querySelector(`.card`);
const apiKey = `ac02961644ed16590131f023dcb8e82b`;

weatherForm.addEventListener(`submit`, async event => {
    event.preventDefault();
    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError(`Please enter a city`);
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    // console.log(response);

    if (!response.ok) {
        throw new Error(`Could not fetch weather data`);
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    // console.log(data);
    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }] } = data;

    card.textContent = ``;
    card.style.display = `flex`;

    const cityDisplay = document.createElement(`h1`);
    const tempDisplay = document.createElement(`p`);
    const humidityDisplay = document.createElement(`p`);
    const descriptionDisplay = document.createElement(`p`);
    const weatherEmoji = document.createElement(`p`);

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * 9 / 5 + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add(`cityDisplay`);
    tempDisplay.classList.add(`tempDisplay`);
    humidityDisplay.classList.add(`humidityDisplay`);
    descriptionDisplay.classList.add(`descriptionDisplay`);
    weatherEmoji.classList.add(`weatherEmoji`);

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(weatherEmoji);

}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return `🌩`;
        case (weatherId >= 300 && weatherId < 400):
            return `🌧`;
        case (weatherId >= 500 && weatherId < 600):
            return `🌧`;
        case (weatherId >= 600 && weatherId < 700):
            return `🌨`;
        case (weatherId >= 700 && weatherId < 800):
            return `🌫`;
        case (weatherId === 800):
            return `🌞`;
        case (weatherId >= 801 && weatherId < 810):
            return `☁️`;
        default:
            return `❓`;
    }
}

function displayError(message) {
    const errorDisplay = document.createElement(`p`);
    errorDisplay.textContent = message;
    errorDisplay.classList.add(`errorDisplay`);
    card.textContent = ``;
    card.style.display = `flex`;
    card.appendChild(errorDisplay);
}

// async function fetchData() {
//    try {
//     // Two lines. Fetches data. All we need in most cases
//     const result = await fetch("https://pokeapi.co/api/v2/pokemon");
//     const data = await result.json();

//     // using pokePokeContainer div from html
//     const pokemonContainer = document.getElementById(`pokePokeContainer`);
//     // Loops through the list of pokemon fetched from the api
//     for (let i = 0; i < data.results.length; i++) {
//       // create a new h1 element
//       const nameDisplay = document.createElement("h1");

//       // sets the text of the element to pokemons name
//       nameDisplay.innerText = data.results[i].name;

//       // Append to container
//       pokemonContainer.appendChild(nameDisplay);

//       // displays the element by appending it to the body
//       document.querySelector("body").appendChild(nameDisplay);
//     }
//     // If out of bound or error were to happen then throw this error message.
//   } catch (error) {
//         console.error(`Error fetching the data`, error);
//   }
// }
// // calling function to get pokemon names
//   fetchData();