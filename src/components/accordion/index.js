import React, { useState, createContext, useContext } from "react"

import { Container, Item, Header, Body, Wrapper, Text, Image } from "./styles/accordion"

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

const ActiveItemContext = createContext()

Accordion.Item = function AccordionItem({ children, ...restProps }) {

    const [isActive, setIsActive] = useState(false)

    return (
        <ActiveItemContext.Provider value={{ isActive, setIsActive }}>
            <Item {...restProps}>{children}</Item>
        </ActiveItemContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {

    const { setIsActive } = useContext(ActiveItemContext)
    
    return (
        <Header
            {...restProps}
            onClick={() => setIsActive(prev => !prev)}
        >
            {children}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {

    const { isActive } = useContext(ActiveItemContext)

    return (
        isActive ? <Body {...restProps}>{children}</Body> : null
    )
}

Accordion.Wrapper = function AccordionWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Accordion.Text = function AccordionText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Accordion.Image = function AccordionImage({ alt, src, ...restProps }) {
    console.log(alt, src)
    return (
        <Image {...restProps} src={src} alt={alt} />
    )
}