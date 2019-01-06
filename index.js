let request = require('request');
const argv = require('yargs').argv;
var express = require('express')
var app = express()
const port = 3000

let apiKey = '45f91898cedfb21f03a494d65cdc1f71';
//let city = argv.c || 'sacramento';
//let url = `http://api.openweathermap.org/data/2.5/weather?q=${req.params}&units=imperial&appid=${apiKey}`

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/weather/:city', function (req, res) {
console.log(req.params.city)
let url = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    res.send(message)
  }
})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))