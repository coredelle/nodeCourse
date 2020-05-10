const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=852f24ff0f88bb9de21b4e0c7d6032ca&query=37.8267,-122.4233";

request({url}, (err, resp) => {
    const data = JSON.parse(resp.body);
    console.log(data.current);
});