import React from "react";
import { useWeatherValue } from "../../store.js";
import { API_KEY, API_URL } from "../../config.js";

export default function SearchBar({ cities = [] }) {
  const [{ list, loader }, dispatch] = useWeatherValue();

  const onSelectCity = e => {
    const value = e.target.value;
    if (cities.some(city => city.value === value)) {
      dispatch({
        type: "SHOW_LOADER",
        value: true
      });

      fetch(`${API_URL}${value.toLowerCase()}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(resData => {
          const {
            name,
            main: { temp_max, temp_min }
          } = resData;
          dispatch({
            type: "ADD_WEATHER_TO_LIST",
            value: { name, temp_min, temp_max }
          });
          dispatch({
            type: "HIDE_LOADER",
            value: false
          });
        });
    }
  };
  return (
    <div className="searchbar">
      <input
        list="cities"
        name="cities"
        placeholder="Type the name of a city"
        onChange={e => onSelectCity(e)}
      />
      <datalist id="cities">
        {cities.map((city, index) => (
          <option key={`${city.value}${index}`} value={city.value}></option>
        ))}
      </datalist>
      {loader ? <div className="search-loader">Loading...</div> : null}
    </div>
  );
}
