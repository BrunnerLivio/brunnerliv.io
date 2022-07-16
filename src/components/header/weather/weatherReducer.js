export const initialState = {
  darkMode: typeof window !== "undefined" ? window.__theme === "dark" : false,
  weather: [],
  // Controllers: location, darkMode, settings
  controller: "darkMode",
  lights: typeof window !== "undefined" ? window.__theme === "dark" : false,
}

export const initializer = (initialValue = initialState) =>
  (typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("weather"))) ||
  initialValue

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      typeof window !== "undefined" &&
        window.__setPreferredTheme(action.payload ? "dark" : "light")
      if (!action.payload && state.controller === "darkMode") {
        return {
          ...state,
          darkMode: action.payload,
          weather: ["Clouds"],
          lights: false,
        }
      }
      if (action.payload && state.controller === "darkMode") {
        return {
          ...state,
          darkMode: action.payload,
          weather: [],
          lights: true,
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
    case "TURN_LIGHTS_ON":
      return { ...state, lights: true }
    case "TURN_LIGHTS_OFF":
      return { ...state, lights: false }
    case "TOGGLE_LIGHTS":
      return { ...state, lights: !state.lights }
    default:
      return state
  }
}
