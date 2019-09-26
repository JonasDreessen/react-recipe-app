import React from "react"

const ApiCall = (props) => {
    
    
    fetch("")
    .then(response => response.json())
    .then(data => console.log(data))

    return(
        <h3> This is the api call</h3>
    )
}

export default ApiCall