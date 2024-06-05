// import apiKey from open weather map website
const apiKey = 'ac02961644ed16590131f023dcb8e82b';

// async function to fetch weather data for an inputted city
async function getWeatherData(city) {

    // api url with provided city name and api key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&q=${city}`;

    // GET request to the API
    const response = await fetch(apiUrl);

    // check if response is not okay
    if (!response.ok) {
        // throwing error if response is not okay
        throw new Error('Could not fetch weather data');
    }
    // analyze the response JSON and return it
    return await response.json();
}

export { getWeatherData };