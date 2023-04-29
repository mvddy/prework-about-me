var openWeatherApiKey = '925c70324dece63089d9784a7f037499';
var modal = document.getElementById('modal');
var searchList = document.getElementById('search-list');

function showModal() {
  modal.style.display = 'block';
  loadRecentSearches();
}

function closeModal() {
  modal.style.display = 'none';
}

function searchLocation(event) {
  event.preventDefault();
  
  var locationInput = document.getElementById('location');
  var location = locationInput.value;
  onclick='showModal()'
  getWeather(location);
  getHolidays();
  saveRecentSearch(location);
  closeModal();
  
  locationInput.value = '';
}

function loadRecentSearches() {
  var
   recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
  searchList.innerHTML = recentSearches.map(search => `<li>${search}</li>`).join('');
}

function saveRecentSearch(search) {
  var
   recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
  if (!recentSearches.includes(search)) {
    recentSearches.push(search);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    loadRecentSearches();
  }
}
function getWeather(location) {
  var
   today = new Date();
  var
   start = new Date(today);
  var
   end = new Date(today);
  end.setDate(end.getDate() + 4);
  

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${openWeatherApiKey}`)
    .then(response => response.json())
    .then(data => {
      var
       weatherDiv = document.querySelector('#weather');
      var
       forecasts = data.list.filter(forecast => {
        var
         date = new Date(forecast.dt * 1000);
        return date >= start && date <= end && date.getHours() === 12;
      });
      weatherDiv.innerHTML = `
        <h2>Weather Forecast for ${location}</h2>
        ${forecasts.map(forecast => `
          <div>
            <p>${new Date(forecast.dt * 1000).toLocaleDateString()}</p>
            <p>Temperature: ${(forecast.main.temp - 273.15).toFixed(1)} &deg;C</p>
            <p>Description: ${forecast.weather[0].description}</p>
            <img src="http://openweathermap.org/img/w/${forecast.weather[0].icon}.png">
                </div>
              `).join('')}
            `;
          })
          .catch(error => console.error(error));
      }
      function getHolidays() {
        var today = new Date();
        var start = new Date(today);
        var end = new Date(today);
        end.setDate(end.getDate() + 6);
        
        const fetch = require('fetch');

}