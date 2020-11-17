import React, { useState } from "react"

import { SearchContainer } from "./containers/search"
import { CardContainer } from "./containers/card"

function App() {

    const [city, setCity] = useState("London")
    const [weather, setWeather] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();

        (async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
            try {
                const response = await fetch(url)
                const data = await response.json()
                setWeather(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }

    return (
        <div>
            <SearchContainer
                city={city}
                setCity={setCity}
                handleSubmit={handleSubmit}
            >
            </SearchContainer>
            <CardContainer weather={weather}></CardContainer>
        </div>
)
}

export default App
