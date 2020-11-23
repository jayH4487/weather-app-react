import React, { useState, useEffect } from "react"

import { SearchContainer } from "./containers/search"
import { WeatherContainer } from "./containers/weather"


function App() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState([
        {header: "Header 1", body: "body 1"},
        {header: "Header 2", body: "body 2"}
    ])

    const handleSubmit = (event, searchInput) => {
        event.preventDefault()
        setCity(searchInput)
    }

    // useEffect(() => {
        
    //     city !== "" &&
    //     (async () => {
    //         const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    //         try {
    //             const response = await fetch(url)
    //             const data = await response.json()
    //             setWeather(data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     })()
        
    // }, [city])

    console.log(weather)
    return (
        <div>
            <SearchContainer handleSubmit={handleSubmit}></SearchContainer>
            <WeatherContainer weather={weather}></WeatherContainer>
        </div>
    )
}

export default App
