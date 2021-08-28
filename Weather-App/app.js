const request = require('postman-request');

const weatherURL = 'http://api.weatherstack.com/current?access_key=f63922f5b5705a7d492d868b4a4e5713&query=37.8267,-122.4233&units=f'

request({ url: weatherURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.feelslike + '% chance of rain')
    }
})

// Geocoding
// Address -> Lat/Long -> Weather

const geocoderURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGhlZXJhcG9ubmFub2kxODUiLCJhIjoiY2tzdmp3cHIwMDZ0MjJ1cnd6OTR4YWh1aiJ9.cvM36CjtVK_X1sM800wInA&limit=1'

request({ url: geocoderURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try again')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log('latitude: ' + latitude + ' longitude: ' + longitude)
    }
})
