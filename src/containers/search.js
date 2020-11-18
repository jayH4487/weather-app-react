import React, { useState } from "react"

import Search from "../components/search"

export function SearchContainer({ handleSubmit }) {

    const [searchInput, setSearchInput] = useState("")

    const isInputInValid = searchInput === ""

    return (
        <Search>
            <Search.Form onSubmit={(event) => handleSubmit(event, searchInput)} method="POST">
                <Search.Input
                    placeholder="Enter city"
                    type="text"
                    name="city"
                    value={searchInput}
                    onChange={({ target }) => setSearchInput(target.value)}
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