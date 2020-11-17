import React from "react"

import {
    Container,
    City,
    DayOfWeek,
    Date,
    Wind,
    Humidity,
    TempMin,
    TempMax,
    Icon,
    Description,
    TempCurrent
} from "./styles/card"

export default function Card({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Card.City = function CardCity({ children, ...restProps }) {
    return <City {...restProps}>{children}</City>
}

Card.DayOfWeek = function CardDayOfWeek({ children, ...restProps }) {
    return <DayOfWeek {...restProps}>{children}</DayOfWeek>
}

Card.Date = function CardDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}

Card.Wind = function CardWind({ children, ...restProps }) {
    return <Wind {...restProps}>{children}</Wind>
}

Card.Humidity = function CardHumidity({ children, ...restProps }) {
    return <Humidity {...restProps}>{children}</Humidity>
}

Card.TempMin = function CardTempMin({ children, ...restProps }) {
    return <TempMin {...restProps}>{children}</TempMin>
}

Card.TempMax = function CardTempMax({ children, ...restProps }) {
    return <TempMax {...restProps}>{children}</TempMax>
}

Card.Icon = function CardIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}

Card.Description = function CardDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}

Card.TempCurrent = function CardTempCurrent({ children, ...restProps }) {
    return <TempCurrent {...restProps}>{children}</TempCurrent>
}
