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

                const modForecast = data.daily.map((day, i) => {
                    const date = new Date(day.dt * 1000)
                    const dayOfWeek = date.toLocaleDateString("en-GB", {weekday: "long"})
                    const dayOfMonth = date.getDate()
                    const month = date.toLocaleDateString("en-GB", {month: "short"})

                    return {
                        dt: day.dt,
                        dateString: i === 0 ? "Today" : `${dayOfWeek}, ${dayOfMonth} ${month}`,
                        description: (description => description[0].toUpperCase() + description.slice(1))(day.weather[0].description),
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
                {dailyWeather.map(({
                    dt,
                    dateString,
                    description,
                    icon,
                    maxTemp,
                    minTemp
                }) => (
                    <Accordion.Item key={dt}>
                        <Accordion.Header>
                            <Accordion.Wrapper>
                                <Accordion.Text>{dateString}</Accordion.Text>
                                <Accordion.Text>{description}</Accordion.Text>
                            </Accordion.Wrapper>
                            <Accordion.Image src={`https://openweathermap.org/img/w/${icon}.png`} alt={description} />
                            <Accordion.Wrapper>
                                <Accordion.Text>{maxTemp}{"\xB0"}</Accordion.Text>
                                <Accordion.Text>{minTemp}{"\xB0"}</Accordion.Text>
                            </Accordion.Wrapper>
                        </Accordion.Header>
                        <Accordion.Body>This is the weather body</Accordion.Body>
                        <hr></hr>
                    </Accordion.Item>
                ))}
        </Accordion>
    )
}