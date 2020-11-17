import React from "react"

import Search from "../components/search"

export function SearchContainer({ city, setCity, handleSubmit }) {

    const isInputInValid = city === ""

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