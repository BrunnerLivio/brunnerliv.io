import { useEffect, useState } from "react"

let weatherCache = null
function getWeather(userLocation) {
  if (weatherCache) {
    return Promise.resolve(weatherCache)
  }
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=9c41d9e7901b6a542535bb8b793cf038&units=metric`
  )
    .then((res) => res.json())
    .then(({ weather }) => weather.map((w) => w.main))
    .then((weather) => {
      weatherCache = weather
      return weather
    })
}

function useWeather() {
  const [darkMode, _setDarkMode] = useState(
    typeof window !== "undefined" ? window.__theme === "dark" : false
  )
  const [userLocation, _setUserLocation] = useState(null)

  const [weather, setWeather] = useState(null)

  function setDarkMode(value) {
    _setDarkMode(value)
    _setUserLocation(null)
    localStorage.removeItem("user-location")
  }

  function activateLocation() {
    if (!!weather || !navigator.geolocation) {
      localStorage.removeItem("user-location")
      return _setUserLocation(false)
    }
    return navigator.geolocation.getCurrentPosition((position) => {
      const coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
      localStorage.setItem("user-location", JSON.stringify(coords))
      _setDarkMode(null)
      _setUserLocation(coords)
    })
  }

  useEffect(() => {
    try {
      const userLocation = JSON.parse(localStorage.getItem("user-location"))
      if (userLocation) _setUserLocation(userLocation)
    } catch (e) {}
  }, [])

  useEffect(() => {
    if (!userLocation) {
      return setWeather(null)
    }
    getWeather(userLocation).then((weather) => {
      setWeather(weather)
      const h = new Date().getHours()
      _setDarkMode(h > 16 || h < 8)
    })
  }, [userLocation])

  window.__setPreferredTheme(darkMode ? "dark" : "light")
  return [{ darkMode, weather }, setDarkMode, activateLocation]
}
export default useWeather
