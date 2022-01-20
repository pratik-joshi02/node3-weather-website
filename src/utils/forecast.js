const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url= 'http://api.weatherstack.com/current?access_key=8e1de044744420f833ebbd671770b38a&query='+ encodeURIComponent(latitude) +','+ encodeURIComponent(longitude)
    const url= 'http://api.openweathermap.org/data/2.5/onecall?lat='+encodeURIComponent(latitude)+'&lon='+encodeURIComponent(longitude)+'&exlude=minutely,hourly&appid=72f67ab02ac5208ac07bd384db2051f2&units=metric'
    request({url, json: true}, (error, {body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }else if (body.error) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, {
                desc: body.current.weather[0].description ,
                icon_id: "https://openweathermap.org/img/wn/"+body.current.weather[0].icon+"@4x.png" ,
                curr_temp: Math.round(body.current.temp)+"\u00B0",  
                feels_temp: Math.round(body.current.feels_like)+"\u00B0",  
                max_temp: Math.round(body.daily[0].temp.max)+"\u00B0",  
                min_temp: Math.round(body.daily[0].temp.min)+"\u00B0",  
                wind: body.current.wind_speed+"km/h",
                cloud_cover: body.current.clouds + "\u0025",
                humidity: body.current.humidity + "\u0025",
                pressure: body.current.pressure + "hPa"
            })
        }
    })
}

module.exports = forecast