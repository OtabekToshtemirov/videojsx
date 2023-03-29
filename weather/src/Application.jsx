import React, {useState} from 'react';
import {Api} from "./api/Api.jsx";

function Application() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) =>{
        if(e.key === 'Enter'){
            const data = await Api(query);
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="search">
            <div className="container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for a city and press enter..."
                        className="search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={search}
                    />
                </div>
                {weather.main && (
                    <div className="city">
                        <div className="info">
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"/>
                        </div>
                        <div className="details">
                            <h2 className="cityname">
                                <span>{weather.name}</span>
                                <sup>{weather.sys.country}</sup>
                            </h2>
                            <div className="city-temp">
                                {Math.round(weather.main.temp)}
                                <sup>&deg;C</sup>
                                <p>{weather.weather[0].description}</p>
                            </div>
                        </div>
                    </div>)}
            </div>

        </div>
    );
}

export default Application;
