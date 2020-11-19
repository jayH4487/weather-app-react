import React, { useState, useEffect } from "react"

import Card from "../components/card"

export function CardContainer({ city }) {

    const [date, setDate] = useState(null)
    const [weather, setWeather] = useState(null)
    const [forecast, setForecast] = useState(null)

    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(0)

    useEffect(() => {
        setDate(new Date());
        city !== "" && 
        (async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
            try {
                const response = await fetch(url)
                const data = await response.json()
                setWeather(data)
            } catch (error) {
                console.error(error)
            }
        })();

        city !== "" &&
        (async () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
            try {
                const response = await fetch(url)
                const data = await response.json()
                setForecast(data)
            } catch (error) {
                console.error(error)
            }
        })()
        
    }, [city])


    console.log({weather})
    console.log({forecast})
    return (
        <>
            {(weather || {}).name ? 
                <Card>
                    <Card.City>{weather.name}, {weather.sys.country}</Card.City>
                    <Card.DayOfWeek>{date.toLocaleDateString("en-GB", {weekday: "long"})}</Card.DayOfWeek>
                    <Card.Date>{date.toLocaleDateString("en-GB")}</Card.Date>
                    <Card.Wind>Wind: {weather.wind.speed}m/s</Card.Wind>
                    <Card.Humidity>Humidity: {weather.main.humidity}%</Card.Humidity>
                    <Card.TempMax>Max: {kelvinToCelsius(weather.main.temp_max)}</Card.TempMax>
                    <Card.TempMin>Min: {kelvinToCelsius(weather.main.temp_min)}</Card.TempMin>
                    <Card.Icon></Card.Icon>
                    <Card.Description>{weather.weather[0].description}</Card.Description>
                    <Card.TempCurrent>{kelvinToCelsius(weather.main.temp)}</Card.TempCurrent>
                </Card> :
                null}

            {(forecast || {}).city ?
                <Card>
                    {forecast.list.map(weather => (
                        <Card.Date>{new Date(weather.dt *10**3).toLocaleDateString("en-GB")} {new Date(weather.dt *10**3).toLocaleTimeString("en-GB")}</Card.Date>
                    ))}
                </Card> :
                null}

        </>
    )
}