import React, { useState, useEffect } from "react"

import Accordion from "../components/accordion"

function useFetchDailyWeather(lat, lon) {
    
    const [dailyWeather, setDailyWeather] = useState([])
    const [dailyForecast, setDailyForecast] = useState(null)

    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(0)

    useEffect(() => {
        
        (async () => {
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
            try {
                const response = await fetch(url)
                const data = await response.json()
                setDailyForecast(data.daily)

                const modForecast = data.daily.map(day => {
                    const date = new Date(day.dt * 1000)
                    const dayOfWeek = date
                    const dayOfMonth = date
                    const month = date
                    const description = day.weather.description
                    const icon = day.weather.icon
                    const maxTemp = day.temp.max
                    const minTemp = day.temp.min

                    return {
                        dt: day.dt,
                        dayOfWeek: date.toLocaleDateString("en-GB", {weekday: "long"}),
                        dayOfMonth: date.getDate(),
                        month: date.toLocaleDateString("en-GB", {month: "short"}),
                        description: day.weather[0].description,
                        icon: day.weather[0].icon,
                        maxTemp: kelvinToCelsius(day.temp.max),
                        minTemp: kelvinToCelsius(day.temp.min)

                    }
                })

                setDailyWeather(modForecast)


            } catch (error) {
                console.error(error)
            }
        })()
        
    }, [])

    return dailyWeather

}


export function WeatherContainer({ lat, lon }) {

    const dailyWeather = useFetchDailyWeather(lat, lon)

    return (
        <Accordion>
                {dailyWeather.map(day => (
                    <Accordion.Item key={day.dt}>
                        <Accordion.Header>
                            <p>
                                {day.dayOfWeek}, {day.dayOfMonth} {day.month}
                            </p>
                            <p>
                                {day.description}
                            </p>
                            <p>
                                {day.icon}
                            </p>
                            <p>
                                {day.maxTemp}{"\xB0"}
                            </p>
                            <p>
                                {day.minTemp}{"\xB0"}
                            </p>
                        </Accordion.Header>
                        <Accordion.Body>This is the weather body</Accordion.Body>
                    </Accordion.Item>
                ))}
        </Accordion>
    )
}