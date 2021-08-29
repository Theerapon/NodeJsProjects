const express = require('express')
const app = express()

// app.com/
app.get('', (request, response) => {
    response.send('Hellfo express!')
})

// app.com/help
app.get('/help', (request, response) => {
    response.send('Help page')
})

// app.com/about
app.get('/about', (request, response) => {
    response.send('About page')
})

// app.com/weather
app.get('/weather', (request, response) => {
    response.send('Weather page')
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
