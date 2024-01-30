var citySearchEl = $('#citysearch');
var searchHistoryEl = $('#searchhistory');
var cityInputEl = $('#cityinput');
var currentWeatherEl= $('#currentweather');
var cityRenderEl = $('#cityrender');
var dateRenderEl = $('#daterender');
var forecastRenderEl = $('#forecastrender');


var apiKey = 'f792e5dc60b51965b173fc62383ec644';

function startWeatherSearch(event) {
    event.preventDefault();
    console.log(cityInputEl.val());
    $('input[type="text"]').val('');
};


citySearchEl.on('submit', startWeatherSearch); 