// import { useEffect, useReducer, useState } from "react"

// const initialState = {
//   darkMode: typeof window !== "undefined" ? window.__theme === "dark" : false,
//   weather: null,
//   // Controllers: location, darkMode, settings
//   controller: "darkMode",
// }

// function reducer(state, action) {
//   switch(action.type) {
//     case ""
//   }
// }

// let weatherCache = null
// function getWeather(userLocation) {
//   if (weatherCache) {
//     return Promise.resolve(weatherCache)
//   }
//   return fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=9c41d9e7901b6a542535bb8b793cf038&units=metric`
//   )
//     .then((res) => res.json())
//     .then(({ weather }) => weather.map((w) => w.main))
//     .then((weather) => {
//       weatherCache = weather
//       return weather
//     })
// }

// function useWeather() {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   function activateLocation() {
//     if (!!weather || !navigator.geolocation) {
//       localStorage.removeItem("user-location")
//       return _setUserLocation(false)
//     }
//     return navigator.geolocation.getCurrentPosition((position) => {
//       const coords = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//       }
//       localStorage.setItem("user-location", JSON.stringify(coords))
//       _setDarkMode(null)
//       _setUserLocation(coords)
//     })
//   }

//   useEffect(() => {
//     try {
//       const userLocation = JSON.parse(localStorage.getItem("user-location"))
//       if (userLocation) {
//         dispatch({ userLocation })
//       }
//     } catch (e) {}
//   }, [])

//   // useEffect(() => {
//   //   if (!userLocation) {
//   //     return dispatch({ weather: null })
//   //   }
//   //   getWeather(userLocation).then((weather) => {
//   //     const h = new Date().getHours()
//   //     dispatch({
//   //       weather,
//   //       darkMode: h > 16 || h < 8,
//   //     })
//   //   })
//   // }, [userLocation])

//   window.__setPreferredTheme(darkMode ? "dark" : "light")
//   return [state, dispatch]
// }
// export default useWeather
