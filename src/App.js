import React, { useState } from "react"

import { SearchContainer } from "./containers/search"
import { CardContainer } from "./containers/card"


function App() {

    const [city, setCity] = useState("")

    const handleSubmit = (event, searchInput) => {
        event.preventDefault()
        setCity(searchInput)
    }

    
    return (
        <div>
            <SearchContainer handleSubmit={handleSubmit}></SearchContainer>
            <CardContainer city={city}></CardContainer>
        </div>
)
}

export default App
