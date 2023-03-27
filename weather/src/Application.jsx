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
            console.log(data);
        }
    }

    return (
        <div className="search">
            <div className="container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for a city"
                        className="search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={search}
                    />
                </div>
            </div>

        </div>
    );
}

export default Application;
