const weatherDiv = document.querySelector('[data-weather]');
console.log(weatherDiv);
// Append location name to the weather div
function addLocationName(object) {
const location = object.name;
return `Location: ${location}`;
}
// Add temperature to weather div
function addTemp(object) {
const temp = object.main.temp;
const kToFTemp = (temp - 273.15) * (9/5) + 32;
return `Temperature: ${Math.round(kToFTemp)}`;
}
// Add wind speed to weather div
function addWind(object) {
const wind = object.wind.speed;
const mphWind = wind * 2.237;
return `Wind speed(mph): ${Math.round(mphWind)}`;
}
// Add icon to weather div
function addIcon(object) {
// get icon code from object
const iconCode = object.weather[0].icon;
const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
const newIcon = document.createElement('img');
newIcon.setAttribute('src', iconUrl);
newIcon.classList.add('conditions');
const conditionsText = document.createElement('h2');
conditionsText.classList.add('conditions');
conditionsText.textContent = 'Current conditions: '
weatherDiv.append(conditionsText);
weatherDiv.append(newIcon);
}
// adds whatever data is passed to the weather div
function addToWeather(data) {
const newData = document.createElement('h2');
newData.textContent = data;
weatherDiv.append(newData);
}
// creates map showing lat long of weather info
function addMap(object) {
// get lat and long coordinates
const lat = object.coord.lat;
const lon = object.coord.lon;
const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
// create iframe and set attributes
const iframe = document.createElement('iframe');
iframe.setAttribute('src', mapUrl);
iframe.setAttribute('width', '360');
iframe.setAttribute('height', '270');
iframe.setAttribute('frameborder', '0');
weatherDiv.append(iframe);
}
function sunInfo(object, timeOfDay) {
// get sunrise and sunset info
const timeData = object.sys[timeOfDay];
// convert to standard date format
const sunriseTime = new Date(timeData * 1000);
return sunriseTime;
}
// add correctly formatted dates to the page
function formatDate(date) {
const day = date.getDate();
// month starts at 0
const month = date.getMonth() + 1;
console.log(month);
const hours = date.getHours();
let minutes = date.getMinutes();
// if statement to reformat minutes
if (minutes < 10) {
minutes = '0' + minutes;
}
const seconds = date.getSeconds();
const formatted = `${hours}:${minutes}:${seconds}`;
const monthDayYear = `${month}/${day}/2019`;
return monthDayYear + ' ' + formatted;
}
// let theWeather;
const URL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1";
fetch(URL)
.then( function (response) {
return response.json()
}).then(function (weatherData) {
console.log(weatherData);
// theWeather = weatherData;
return weatherData;
}).then(function (noReallyTheWeatherData) {
addIcon(noReallyTheWeatherData);
addToWeather(addLocationName(noReallyTheWeatherData));
addToWeather(addTemp(noReallyTheWeatherData));
addToWeather(addWind(noReallyTheWeatherData));
addMap(noReallyTheWeatherData);
addToWeather('Sunrise time: ' +
(formatDate(sunInfo(noReallyTheWeatherData, 'sunrise'))));
addToWeather('Sunset time: ' +
(formatDate(sunInfo(noReallyTheWeatherData, 'sunset'))));
})