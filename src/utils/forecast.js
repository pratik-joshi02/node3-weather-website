const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=8e1de044744420f833ebbd671770b38a&query='+ encodeURIComponent(latitude) +','+ encodeURIComponent(longitude)

    request({url, json: true}, (error, {body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }else if (body.error) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It fells like " + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast