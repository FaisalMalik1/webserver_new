const path = require('path')
const chalk = require('chalk')
const hbs = require('hbs')
const express = require('express')
const weather = require('./utility/weather.js')

const app = express()
const port = process.env.PORT || 3000
    // Define paths for Express config
const public_dir_path = path.join(__dirname, '../public')
const view_dir_path = path.join(__dirname, '../templates/views')
const partial_dir_path = path.join(__dirname, '../templates/partials')

// Setting views and partials location to view engine using hbs 
app.set('view engine', 'hbs')
app.set('views', view_dir_path)
hbs.registerPartials(partial_dir_path)

// setting public path to serve
app.use(express.static(public_dir_path))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Welcome to My Weather ForeCast',
        name: 'Faisal Malik'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please enter valid city name'
        })
    }
    weather.get_weather(req.query.address, (error, report_data) => {
        console.log("in api = ", report_data)
        if (error) {
            return res.send({ error })
        }
        res.send(report_data)
            // res.send({
            //     report : report_data,
            // search : req.query.address
            // })
    })
})

app.listen(port, () => {
    console.log('Server is up on port ', port)
})