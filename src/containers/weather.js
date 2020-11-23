import React from "react"

import Accordion from "../components/accordion"

export function WeatherContainer({ weather }) {
    return (
        <Accordion>
                {weather.map(day => (
                    <Accordion.Item key={day.header}>
                        <Accordion.Header>{day.header}</Accordion.Header>
                        <Accordion.Body>{day.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
        </Accordion>
    )
}