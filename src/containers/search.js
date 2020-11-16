import React, { useState } from "react"

import Search from "../components/search"

export function SearchContainer() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)

    const isInputInValid = city === ""

    const handleSubmit = (event) => {
        event.preventDefault();

        (async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
            try {
                const response = await fetch(url)
                const data = await response.json()
                setWeather(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }

    return (
        <Search>
            <Search.Form onSubmit={handleSubmit} method="POST">
                <Search.Input
                    placeholder="Enter city"
                    type="text"
                    name="city"
                    value={city}
                    onChange={({ target }) => setCity(target.value)}
                />
                <Search.Button
                    disabled={isInputInValid}
                >
                    Search
                </Search.Button>
            </Search.Form>
        </Search>
    )
}