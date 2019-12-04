import React from "react";

import SearchBar from "../../components/Searchbar/";
import WeatherList from "../../components/WeatherList/";
import cities from "../../cities.js";
import { useWeatherValue } from "../../store.js";

export default function Dashboard() {
  const [{ list }, dispatch] = useWeatherValue();
  return (
    <>
      <SearchBar cities={cities} />
      <div className={"grid-layout" + (!list.length ? " no-records" : "")}>
        {list.length
          ? list
              .sort((list1, list2) => list2.temp_max - list1.temp_max)
              .map((weather, index) => (
                <div
                  key={`${weather.name}${index}`}
                  onClick={e =>
                    dispatch({
                      type: "REMOVE_WEATHER_FROM_LIST",
                      value: index
                    })
                  }
                >
                  <WeatherList {...weather} />
                </div>
              ))
          : "Search and select city from dropdown to see weather."}
      </div>
    </>
  );
}
