import React from "react" 
import {useState} from "react"

const Search = () => {

const [search, setSearch] = useState({
    typedText: ""
});

   const handleChange = (e) => {
        setSearch({typedText: e.target.value})
        console.log(e.target.value)
    }

    return (
        <input type="text" placeholder="what would you like to eat?" onChange={handleChange} value={search.typedText}></input>
    )
}

export default Search