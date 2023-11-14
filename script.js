document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'bb800a7d39daddf35ecc12391f6a03b6'; // Substitua com sua chave da OpenWeatherMap

    async function fetchWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        return data;
    }

    function updateWeatherInfo(data) {
        const cityElement = document.getElementById('city');
        const temperatureElement = document.getElementById('temperature');
       

        cityElement.textContent = data.name;
        temperatureElement.textContent = `${data.main.temp}°C`;
       
    }

    // Remova o atributo 'onclick' do botão no HTML
    const button = document.getElementById('weatherButton');
    button.addEventListener('click', function () {
        getWeather();
    });

    // Defina a função getWeather
    function getWeather() {
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value;
        
        fetchWeather(city)
            .then(data => updateWeatherInfo(data))
            .catch(error => console.error('Erro ao obter a previsão do tempo:', error));
    }
});