var citySearchEl = $('#citysearch');
var searchHistoryEl = $('#searchhistory');
var cityInputEl = $('#cityinput');
var currentWeatherEl = $('#currentweather');
var cityRenderEl = $('#cityrender');
var dateRenderEl = $('#daterender');
var forecastRenderEl = $('#forecastrender');


function startWeatherSearch(event) {
    event.preventDefault();
    getCoordinatesApi(cityInputEl.val());
    $('input[type="text"]').val('');
};

function getCoordinatesApi(city) {
    var apiKey = 'f792e5dc60b51965b173fc62383ec644';
    var requestUrl = ('https://api.openweathermap.org/geo/1.0/direct?q=' +
        city + '&appid=' + apiKey);

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('Geo Data:');
            console.log(data);

            getWeatherApi(data[0].name, data[0].lat.toString(), data[0].lon.toString(), apiKey);
        });
};


function getWeatherApi(name, lat, lon, key) {

    var requestUrl = ('https://api.openweathermap.org/data/2.5/forecast?' +
        'lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + key);

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('Weather Information:');
            console.log(data);
            cityRenderEl.text('You searched: ' + name + '. Your weather data is available in the development console.');
        })
    };


citySearchEl.on('submit', startWeatherSearch); 