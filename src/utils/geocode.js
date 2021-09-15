const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZWl6em80NCIsImEiOiJja3RpcXJicDMwN3JmMzFxejNzZjZpODhrIn0.HxoppqNkhF7d3oGE2U-RDA'

    request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location sercvices')
        } else if (body.features.length ===0) {
            callback('Unable to locate the address. Try another search.')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode