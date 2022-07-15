const axios = require("axios")

const OPENWEATHERMAP_TOKEN = process.env.OPENWEATHERMAP_TOKEN
const LAT = `47.1662`
const LONG = `8.5155`

axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&appid=${OPENWEATHERMAP_TOKEN}`)
    .then(res => res.data)
    .then(console.log)
    .catch(console.log)