const weatherForm = document.querySelector('#check')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const wet_desc = document.querySelector('#wet-desc')
const wet_temp = document.querySelector('#wet-temp')
const wet_max_temp = document.querySelector('#wet-max-temp')
const wet_min_temp = document.querySelector('#wet-min-temp')
const wet_feels_temp = document.querySelector('#wet-feels-temp')
const wet_cloud = document.querySelector('#wet-cloud')
const wet_humidity = document.querySelector('#wet-humidity')
const wet_pressure = document.querySelector("#wet-pressure")
const wet_wind = document.querySelector("#wet-wind")
const wet_icon = document.querySelector("#wet-icon")

weatherForm.addEventListener('click', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent= 'Loading....'
    fetch('/weather?address='+ encodeURIComponent(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                wet_desc.textContent = data.forecast.desc
                wet_temp.textContent = data.forecast.curr_temp
                wet_max_temp.textContent = data.forecast.max_temp
                wet_min_temp.textContent = data.forecast.min_temp
                wet_feels_temp.textContent = data.forecast.feels_temp
                wet_cloud.textContent = data.forecast.cloud_cover
                wet_humidity.textContent = data.forecast.humidity
                wet_pressure.textContent = data.forecast.pressure
                wet_wind.textContent = data.forecast.wind
                messageOne.textContent = data.address
                const val_icon = data.forecast.icon_id
                wet_icon.innerHTML = `<img src="${val_icon}">`
                console.log(data)
            }
        })
    })
})