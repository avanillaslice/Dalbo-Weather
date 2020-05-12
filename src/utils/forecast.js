const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=56bf8c7ebd51c809e2c3c006c1a33a18&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Could not access Forecast Service', undefined)
        } else if (body.error) {
            callback('Invalid Coordinates', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain. It feels like ' + body.current.feelslike + ' degrees.')
            console.log(body)
        }
    })
}

module.exports = forecast