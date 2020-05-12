const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=852f24ff0f88bb9de21b4e0c7d6032ca&query=37.8267,-122.4233&units=f";

const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY29yZWRlbGxlIiwiYSI6ImNrYTM1a3l5ajA3Zzkzbmp2ZzBzeGZhaTYifQ.yNxlyWa95Kh-426bE0GMrA&limit=1"

request({url, json: true}, (err, resp) => {
    // console.log(resp.body.current);
    const degrees = resp.body.current.temperature;
    const rain = resp.body.current.precip;
    const forecast = resp.body.current.weather_descriptions[0].toLowerCase();
    console.log(`It's ${forecast} and is currently ${degrees} degrees out. There is ${rain}% chance of rain!`)
});

request({url: geocodeUrl, json: true}, (err, resp) => {
    // console.log(resp.body);
    const lat = resp.body.features[0].center[1];
    const long = resp.body.features[0].center[0];
    console.log(`lat ${lat} long ${long}`)
});
