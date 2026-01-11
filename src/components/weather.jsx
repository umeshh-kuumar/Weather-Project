import React, { useState, useEffect } from 'react'
import searchIcon from '../assets/search.png'
import cloudIcon from '../assets/cloud.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

const Weather = () => {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState('')
    const [loading, setLoading] = useState(false)

    const search = async (cityName) => {
        if (!cityName) return
        setLoading(true);
        try {
            const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`)

            const geoData = await geoResponse.json();


            if (geoData.results && geoData.results.length > 0) {
                const { latitude, longitude, name } = geoData.results[0];

                const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`)

                const weather = await weatherResponse.json();


                setWeatherData({
                    name: name,
                    temp: weather.current.temperature_2m,
                    humidity: weather.current.relative_humidity_2m,
                    windSpeed: weather.current.wind_speed_10m
                })
            }
        }
        catch (error) {
            console.log("Error fetching weather data:", error);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        search('delhi')
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">

            {/* Weather Card */}
            <div className="bg-blue-500 w-80 p-6 rounded-xl text-white">

                {/* Search Bar */}
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-blue-200 text-black rounded-full px-4 py-2 pr-10 focus:outline-none"
                    />
                    <button onClick={()=> search(city)}
                     className='absolute right-3 cursor-pointer'>
                        <img
                            src={searchIcon}
                            alt="search"
                            className="w-5 h-5 "
                        />
                    </button>
                </div>

                {/* Weather Info */}
                <div className="flex flex-col items-center mt-6">
                    <img src={cloudIcon} alt="cloud" className="w-24 h-24 mb-2" />

                    <h1 className="text-6xl font-semibold">{weatherData.temp}°c</h1>
                    <p className="text-2xl mt-1">{weatherData.name}</p>

                    {/* Humidity & Wind */}
                    <div className="flex justify-between w-full mt-6 px-2">

                        {/* Humidity */}
                        <div className="flex items-center gap-3">
                            <img src={humidity} className="w-5 h-5" />
                            <div>
                                <p className="font-semibold">{weatherData.humidity}%</p>
                                <span className="text-sm">Humidity</span>
                            </div>
                        </div>

                        {/* Wind */}
                        <div className="flex items-center gap-3">
                            <img src={wind} className="w-5 h-5" />
                            <div>
                                <p className="font-semibold">{weatherData.windSpeed} Km/h</p>
                                <span className="text-sm">Wind Speed</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather