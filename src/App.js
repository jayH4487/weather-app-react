import React, { useState, useEffect } from "react"

import { SearchContainer } from "./containers/search"
import { WeatherContainer } from "./containers/weather"


function App() {

    const [city, setCity] = useState("")
    const [coordinates, setCoordinates] = useState({})
    const [error, setError] = useState(true)

    const handleSubmit = (event, searchInput) => {
        event.preventDefault()
        setCity(searchInput)
    }

    useEffect(() => {
        
        city !== "" &&
        (async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
            try {
                const response = await fetch(url)
                if (response.status === 200) {
                    const data = await response.json()
                    setCoordinates(data.coord)
                    setError(false)
                } else {
                    setError(true)
                }
            } catch (error) {
                console.error(error)
                setError(true)
            }
        })()
        
    }, [city])

    // console.log(coordinates.lat)
    return (
        <div>
            <SearchContainer handleSubmit={handleSubmit}></SearchContainer>
            {!error
                ? <WeatherContainer lat={coordinates.lat} lon={coordinates.lon}></WeatherContainer>
                : null}
        </div>
    )
}

export default App
