export const initialState = {
  darkMode: typeof window !== "undefined" ? window.__theme === "dark" : false,
  weather: [],
  // Controllers: location, darkMode, settings
  controller: "darkMode",
}

export const initializer = (initialValue = initialState) =>
  (typeof window !== undefined &&
    JSON.parse(localStorage.getItem("weather"))) ||
  initialValue

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      window.__setPreferredTheme(action.payload ? "dark" : "light")
      if (!action.payload && state.controller === "darkMode") {
        return {
          ...state,
          darkMode: action.payload,
          weather: state.weather.includes("Clouds")
            ? state.weather
            : [...state.weather, "Clouds"],
        }
      }
      if (action.payload && state.controller === "darkMode") {
        return {
          ...state,
          darkMode: action.payload,
          weather: state.weather.includes("Clouds")
            ? state.weather.filter((w) => w !== "Clouds")
            : state.weather,
        }
      }
      return { ...state, darkMode: action.payload }
    case "SET_CONTROLLER":
      return { ...state, controller: action.payload }
    case "SET_WEATHER":
      return { ...state, weather: action.payload }
    case "TOGGLE_WEATHER":
      return {
        ...state,
        weather: state.weather.includes(action.payload)
          ? state.weather.filter((w) => w !== action.payload)
          : [...state.weather, action.payload],
      }
    default:
      return state
  }
}
