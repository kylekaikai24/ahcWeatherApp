import {
    GET_WEATHER_SUCCESS,
    GET_CURRENT_WEATHER_SUCCESS
  } from "../actions/types";
  
  const initialState = {
    city: null,
    countryCode: null,
    forecast: null,
    current: null,
    loading: true,
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_WEATHER_SUCCESS:
        return {
            ...state,
            city: payload.city.name,
            countryCode: payload.city.country,
            forecast: payload.list,
            loading: false
        }
      case GET_CURRENT_WEATHER_SUCCESS:
        return {
          ...state,
          current: payload,
          loading: false
        }
      default:
        return state;
    }
  }
  