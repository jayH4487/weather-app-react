import React, { useState, useEffect } from "react"

import { SearchContainer } from "./containers/search"
import { WeatherContainer } from "./containers/weather"


function App() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState([
        {header: "Header 1", body: "body 1"},
        {header: "Header 2", body: "body 2"}
    ])
    const [dailyForecast, setDailyForecast] = useState(null)

    const handleSubmit = (event, searchInput) => {
        event.preventDefault()
        setCity(searchInput)
    }

    // useEffect(() => {
        
    //     city !== "" &&
    //     (async () => {
    //         const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.51&lon=-0.13&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
    //         try {
    //             const response = await fetch(url)
    //             const data = await response.json()
    //             setDailyForecast(data.daily)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     })()
        
    // }, [city])

    console.log(dailyForecast)
    return (
        <div>
            <SearchContainer handleSubmit={handleSubmit}></SearchContainer>
            <WeatherContainer lat={51.51} lon={0.00}></WeatherContainer>
        </div>
    )
}

export default App
