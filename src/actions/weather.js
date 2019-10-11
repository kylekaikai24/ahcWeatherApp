import { GET_WEATHER_SUCCESS, GET_CURRENT_WEATHER_SUCCESS, GET_WEATHER_ERROR } from "./types";

//Get weather forecast
export const getWeather = (city, countryCode) => async dispatch => {
  try {
    let url = `http://api.openweathermap.org/data/2.5/forecast`;
    url += `?q=${city},${countryCode}&APPID=e173e55cc51c23b6cad7721ce2e16956`;
    let res = await fetch(url);
    let data = await res.json();
    
    dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: data
    })
  } catch (err) {
      dispatch({
          type: GET_WEATHER_ERROR
      })
  }
};

//get weather current
export const getCurrentWeather = (city, countryCode) => async dispatch => {
  try {
    let url = `http://api.openweathermap.org/data/2.5/weather`;
    url += `?q=${city},${countryCode}&APPID=e173e55cc51c23b6cad7721ce2e16956`;
    let res = await fetch(url);
    let data = await res.json();
    res = await fetch(
      `https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/slim-2/slim-2.json`
    );
    let countryData = await res.json();
    let country = countryData.find(item => item["alpha-2"] === data.sys.country);
    data.sys.countryName = country.name;

    dispatch({
        type: GET_CURRENT_WEATHER_SUCCESS,
        payload: data
    })
  } catch (err) {
      dispatch({
          type: GET_WEATHER_ERROR
      })
  }
};
