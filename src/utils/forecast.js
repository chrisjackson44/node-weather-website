const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1983f8070cd5f83d5b947cecc16723fe&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather sercvices')
        } else if (body.error) {
            callback('Unable to locate the address. Try another search.')
        } else {
            callback(undefined, (body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees but it feels like ' + body.current.feelslike + ' degrees. Humidity: ' + body.current.humidity + '%'))
        }
    })
}

module.exports = forecast