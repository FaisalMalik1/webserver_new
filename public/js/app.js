console.log('Client side javascript file is loaded!')
    // const fetch_data = "/weather"

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const cityname = document.querySelector('#cityname')
const country = document.querySelector('#country')
const temp = document.querySelector('#temp')
const img = document.querySelector("#img")
const description = document.querySelector("#description")
let path

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    cityname.textContent = 'Loading...'
        // messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                cityname.textContent = data.error
            } else {
                console.log(data)
                path = data.current.weather_icons[0]
                img.setAttribute('src', path)
                cityname.textContent = data.location.name
                country.textContent = data.location.country
                description.textContent = data.current.weather_description[0]
                temp.textContent = data.current.temperature + "°F"
            }
        })
    })
})