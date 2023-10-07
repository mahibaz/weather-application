import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Weather.css'

const api = {
  key: '6e39ea2cc5bcfafe2fea2661f3e4819a',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function Weather1() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4 text-white">WEATHER APP</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a city..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-success" onClick={searchPressed}>
              Search
            </button>
          </div>
          {weather.name && (
            <div className="card mt-4">
              <div className="card-body text-black">
                <h2 className="card-title">{weather.name}</h2>
                <p className="card-text mt-3">
                  Temperature: {weather.main?.temp}°C
                </p>
                <p className='card-text'>
                  Humitidy: {weather.main?.humidity}%
                </p>
                <p className="card-text">
                  Weather: {weather.weather && weather.weather.length > 0 ? weather.weather[0].description : ''}
                </p>
                <p className="card-text">
                  Wind Speed: {weather.wind?.speed} m/s
                </p>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather1;