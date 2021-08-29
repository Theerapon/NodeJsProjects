const express = require('express')
const path = require('path')
const hbs = require('hbs')

const geocode = require('../../Weather-App/utils/geocode')
const forecast = require('../../Weather-App/utils/forecast')

const app = express()

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Fakie Home'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Fakie About'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Theerapon Help'
    })
})

// app.com/weather
app.get('/weather', (request, response) => {
    geocode('Boston', (error, {latitude, longitude, location}) => {
        if (error) {
            return response.send('Error: ' + error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return response.send('Error: ' + error)
            }
            
            response.send({
                location: location,
                forecastData: forecastData,
            })
        })
    })
    
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 not found',
        name: 'Theerapon nanoi',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 not found',
        name: 'Theerapon nanoi',
        errorMessage: 'Page not found, Try again later'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
