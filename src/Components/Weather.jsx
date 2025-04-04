import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

const Weather = () => {
  //useState
  const [city, setCity] = useState("");
  const [weather, setWheather] = useState(); // use for har whaether change hota rhega
  const [error, setError] = useState(); // for error msg show

  //copy  api  form website

  const API_KEY = "b738e9abf0f5c98dafb67a46f7a5bba6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city} &units=metric&appid=${API_KEY}`; // backtick ka use isliye kiya gya gya h jisse har bar city name change hota h sb user ke liye

  // get data
  function handleOnchange(event) {
    setCity(event.target.value);
    //console.log(event.target.value)
  }

  //dataFetch

  async function FetchData() {
    //try cathc use for error handle and it is optional
    try {
      let response = await fetch(url);
      let output = await response.json(); //.data fetch hoker aayega then json format me convert hoga

      // mean agr input sahi kiya gya h to output show kr do

      if (response.ok) {
        setWheather(output);
        console.log(output);
        setError("");
      } else {
        setError("No data found .please enter a valid city name..");
      }
    } catch (error) {}
  }

  return (
    <>
      <div className="container">

        <div className="city">
          <input
            type="text"
            value={city}
            onChange={handleOnchange}
            placeholder="City name.."
          />
          <button onClick={() => FetchData()}>
            <CiSearch />
          </button>
        </div>

        {/* agr error message ho ye mseege show hogs this use  */}
        {error && <p className="error-message">{error}</p>}

        {/* // sahi data show krne ke liye */}
        {weather && weather.weather && (
          <div className="content">
            {/* weather condtion pr image fetch kiya gya h  */}
            <div className="weather-image">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
              <h3 className="desc">{weather.weather[0].description}</h3>
            </div>

            {/* tempreture data show krne ke liye */}

            <div className="weather-temp">
              <h2>
                {weather.main.temp} <span>&deg:c</span>
              </h2>
            </div>

            <div className="weather-city">
              <div className="location mb-4 text-info">
                <MdLocationOn />
              </div>
              <p>
                {weather.name},<span>{weather.sys.country}</span>
              </p>
            </div>

            <div className="weather-state">
              <div className="wind">
                <div className="wind-icon">
                  <FaWind />
                </div>
                <h3 className="wind-speed">
                  {weather.wind.speed} <span>km/h</span>
                </h3>
                <h3 className="text-light pt-3">Wind Speed</h3>
              </div>

              <div className="humidity">
                <div className="humidity-icon">
                  <WiHumidity />
                </div>
                <h3 className="humidity-percent">
                  {weather.main.humidity} <span>%</span>
                  <h3 className="humidity-speed">Humidity</h3>
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>

      <marquee behavior="scroll" direction="alternate" style={{ backgroundColor: "#f8f9fa", padding: "10px", border: "1px solid #ddd", margin: "20px 0" }}>
       <strong>Developed by <span className="text-danger">Shiv</span></strong> 
      </marquee>
    </>
  );
};

export default Weather;
