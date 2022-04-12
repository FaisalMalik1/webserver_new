const request = require('request')

const get_weather = (city, callback) => {
    const weather_key = '075c50d3ffaba4d626185d22fe8b821e'
    const url = 'http://api.weatherstack.com/current?access_key=' + weather_key + '&query=' + city + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect with Server!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log("in api()", body)
            callback(undefined, body)
        }
    })
}

module.exports = { get_weather: get_weather }