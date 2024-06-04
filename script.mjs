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

const weatherForm = document.querySelector(`.weatherForm`);
const cityInput = document.querySelector(`.cityInput`);
const card = document.querySelector(`.card`);
const apiKey = `ac02961644ed16590131f023dcb8e82b`;

weatherForm.addEventListener(`submit`, event => {

});

async function getWeatherData(city) {

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {

}