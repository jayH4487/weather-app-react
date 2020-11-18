import React, { useState, useEffect } from "react"

import Card from "../components/card"

export function CardContainer({ city }) {

    const [date, setDate] = useState(null)
    const [weather, setWeather] = useState(null)

    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(0)

    useEffect(() => {
        setDate(new Date());

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
        
    }, [city])


    console.log(weather)
    console.log(date)
    return (
        (weather || {}).name ? 
            <Card>
                <Card.City>{weather.name}, {weather.sys.country}</Card.City>
                <Card.DayOfWeek>{date.toLocaleDateString("en-GB", {weekday: "long"})}</Card.DayOfWeek>
                <Card.Date>{date.toLocaleDateString("en-GB")}</Card.Date>
                <Card.Wind>Wind: {weather.wind.speed}m/s</Card.Wind>
                <Card.Humidity>Humidity: {weather.main.humidity}%</Card.Humidity>
                <Card.TempMin>🠓 {kelvinToCelsius(weather.main.temp_min)}</Card.TempMin>
                <Card.TempMax>🠑 {kelvinToCelsius(weather.main.temp_max)}</Card.TempMax>
                <Card.Icon></Card.Icon>
                <Card.Description>{weather.weather[0].description}</Card.Description>
                <Card.TempCurrent>{kelvinToCelsius(weather.main.temp)}</Card.TempCurrent>
            </Card> :
            null
    )
}