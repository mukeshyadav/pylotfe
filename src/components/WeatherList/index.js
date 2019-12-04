import React from "react";

export default function WeatherList({ name, temp_min, temp_max }) {
  return (
    <>
      <div className="card">
        <h3>{name}</h3>
        <p>Min: {temp_min}&deg;C</p>
        <p>Max: {temp_max}&deg;C</p>
      </div>
    </>
  );
}
