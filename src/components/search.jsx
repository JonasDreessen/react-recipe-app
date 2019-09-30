import React from "react" 
import ApiCall from "./ApiCall"
import {useState} from "react"

const Search = () => {

const [search, setSearch] = useState({
    typedText: ""
});

   const handleChange = (e) => {
        setSearch({typedText: e.target.value})
    }

    return (
        <div>
            <input type="text"
                placeholder="what would you like to eat?" 
                onChange={handleChange} 
                value={search.typedText}>
            </input>
            <ApiCall searchTerm={search.typedText}/>
         </div>

    )
}

export default Search