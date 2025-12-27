import React from 'react'
import searchIcon from '../assets/search.png'
import cloudIcon from '../assets/cloud.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

const weather = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">

            {/* Weather Card */}
            <div className="bg-blue-500 w-80 p-6 rounded-xl text-white">

                {/* Search Bar */}
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-blue-200 text-black rounded-full px-4 py-2 pr-10 focus:outline-none"
                    />
                    <img
                        src={searchIcon}
                        alt="search"
                        className="w-5 h-5 absolute right-3 cursor-pointer"
                    />
                </div>

                {/* Weather Info */}
                <div className="flex flex-col items-center mt-6">
                    <img src={cloudIcon} alt="cloud" className="w-24 h-24 mb-2" />

                    <h1 className="text-6xl font-semibold">21°C</h1>
                    <p className="text-2xl mt-1">New York</p>

                    {/* Humidity & Wind */}
                    <div className="flex justify-between w-full mt-6 px-2">

                        {/* Humidity */}
                        <div className="flex items-center gap-3">
                            <img src={humidity} className="w-5 h-5" />
                            <div>
                                <p className="font-semibold">67%</p>
                                <span className="text-sm">Humidity</span>
                            </div>
                        </div>

                        {/* Wind */}
                        <div className="flex items-center gap-3">
                            <img src={wind} className="w-5 h-5" />
                            <div>
                                <p className="font-semibold">2.06 Km/h</p>
                                <span className="text-sm">Wind Speed</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default weather