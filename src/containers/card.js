import React, { useState, useEffect } from "react"

import Card from "../components/card"

export function CardContainer({ weather }) {

    const [date, setDate] = useState(null)

    useEffect(() => {
        setDate(new Date())
    }, [weather])


    console.log(weather)
    console.log(date)
    return (
        weather ? 
            <Card>
                <Card.City>{weather.name}, {weather.sys.country}</Card.City>
                <Card.DayOfWeek>{date.toLocaleDateString("en-GB", {weekday: "long"})}</Card.DayOfWeek>
                <Card.Date>{date.toLocaleDateString("en-GB")}</Card.Date>
                <Card.Wind>Wind: {weather.wind.speed}m/s</Card.Wind>
                <Card.Humidity>Humidity: {weather.main.humidity}%</Card.Humidity>
                <Card.TempMin>🠓 {weather.main.temp_min}</Card.TempMin>
                <Card.TempMax>🠑 {weather.main.temp_max}</Card.TempMax>
                <Card.Icon></Card.Icon>
                <Card.Description>{weather.weather[0].description}</Card.Description>
                <Card.TempCurrent>{weather.main.temp}</Card.TempCurrent>
            </Card> :
            null
    )
}