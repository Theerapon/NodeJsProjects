const request = require('postman-request');

// // Geocoding
// // Address -> Lat/Long -> Weather

// const geocoderURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGhlZXJhcG9ubmFub2kxODUiLCJhIjoiY2tzdmp3cHIwMDZ0MjJ1cnd6OTR4YWh1aiJ9.cvM36CjtVK_X1sM800wInA&limit=1'

// request({ url: geocoderURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try again')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log('latitude: ' + latitude + ' longitude: ' + longitude)
//     }
// })

const geocode = (address, callback) => {

    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidGhlZXJhcG9ubmFub2kxODUiLCJhIjoiY2tzdmp3cHIwMDZ0MjJ1cnd6OTR4YWh1aiJ9.cvM36CjtVK_X1sM800wInA&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            const errorMessage = 'Unable to connect to location service'
            callback(errorMessage, undefined)
        } else if (response.body.features.length === 0) {
            const errorMessage = 'Unable to find location. Try again'
            callback(errorMessage, undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode