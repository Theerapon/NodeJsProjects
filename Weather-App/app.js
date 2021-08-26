const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=f63922f5b5705a7d492d868b4a4e5713&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.feelslike + '% chance of rain')
})