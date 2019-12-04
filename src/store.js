import React, { createContext, useContext, useReducer } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ reducer, initialState, children }) => (
  <WeatherContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </WeatherContext.Provider>
);

export const useWeatherValue = () => useContext(WeatherContext);
