console.log('Client side javascript file is loaded!')
// const fetch_data = "/weather"

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const cityname = document.querySelector('#cityname')
const country = document.querySelector('#country')
const temp = document.querySelector('#temp')


weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()

    const location = search.value

    cityname.textContent = 'Loading...'
    // messageTwo.textContent = ''

    fetch('http://localhost:8001/weather?address=' + location).then((response) =>{
        response.json().then((data) => {
            if (data.error){
                cityname.textContent = data.error
            } else {
                console.log(data)
                cityname.textContent = data.location.name
                country.textContent = data.location.country
                temp.textContent = data.current.temperature + "°F"
            }
        })
    })
})