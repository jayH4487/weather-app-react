import React from "react"

import { Container, Form, Input, Button } from "./styles/search"

export default function Search({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Search.Form = function SearchForm({ children, ...restProps }) {
    return (
        <Form {...restProps}>{children}</Form>
    )
}

Search.Input = function SearchInput(props) {
    return (
        <Input {...props} />
    )
}

Search.Button = function SearchButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>{children}</Button>
    )
}