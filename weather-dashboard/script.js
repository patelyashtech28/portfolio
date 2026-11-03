const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const dashboard = document.getElementById('dashboard');
const errorMessage = document.getElementById('error-message');

const cityName = document.getElementById('city-name');
const currentDate = document.getElementById('current-date');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weather-condition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const forecastContainer = document.getElementById('forecast-container');

// Map weather codes to readable text
function getWeatherDescription(code) {
    const weatherMap = {
        0: 'Clear Sky ☀️',
        1: 'Mainly Clear 🌤️',
        2: 'Partly Cloudy ⛅',
        3: 'Overcast ☁️',
        45: 'Foggy 🌫️',
        51: 'Light Drizzle 🌦️',
        61: 'Rain Showers 🌧️',
        71: 'Snowfall ❄️',
        95: 'Thunderstorm ⚡'
    };
    return weatherMap[code] || 'Fair 🌤️';
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) fetchWeather(city);
    }
});

async function fetchWeather(city) {
    try {
        errorMessage.classList.add('error-hidden');
        
        // 1. Get latitude and longitude using Open-Meteo Geocoding API
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            dashboard.classList.add('hidden');
            errorMessage.classList.remove('error-hidden');
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2. Fetch current weather and 5-day forecast
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);
        const weatherData = await weatherRes.json();

        updateUI(name, country, weatherData);

    } catch (error) {
        console.error('Error fetching weather data:', error);
        errorMessage.classList.remove('error-hidden');
    }
}

function updateUI(name, country, data) {
    dashboard.classList.remove('hidden');

    // Current Weather
    cityName.textContent = `${name}, ${country}`;
    currentDate.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    temperature.textContent = Math.round(data.current.temperature_2m);
    weatherCondition.textContent = getWeatherDescription(data.current.weather_code);
    humidity.textContent = data.current.relative_humidity_2m;
    windSpeed.textContent = data.current.wind_speed_10m || '10'; // Fallback if missing

    // 5-Day Forecast
    forecastContainer.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const dateStr = data.daily.time[i];
        const dayName = new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short' });
        const maxTemp = Math.round(data.daily.temperature_2m_max[i]);
        const minTemp = Math.round(data.daily.temperature_2m_min[i]);
        const code = data.daily.weather_code[i];

        const card = document.createElement('div');
        card.classList.add('forecast-card');
        card.innerHTML = `
            <p><strong>${dayName}</strong></p>
            <p>${getWeatherDescription(code).split(' ')[1] || '🌤️'}</p>
            <p>${maxTemp}° / ${minTemp}°</p>
        `;
        forecastContainer.appendChild(card);
    }
}