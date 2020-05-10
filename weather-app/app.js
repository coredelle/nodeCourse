const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=852f24ff0f88bb9de21b4e0c7d6032ca&query=37.8267,-122.4233&units=f";

request({url, json: true}, (err, resp) => {
    // console.log(resp.body.current);
    const degrees = resp.body.current.temperature;
    const rain = resp.body.current.precip;
    console.log(`It is currently ${degrees} degrees out. There is ${rain}% chance of rain!`)
});