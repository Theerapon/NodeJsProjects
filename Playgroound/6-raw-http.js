const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=f63922f5b5705a7d492d868b4a4e5713&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (err) => {
    console.log('An error occurred', err)
})

request.end()