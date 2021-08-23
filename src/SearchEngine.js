import React, {useState} from "react";
import axios from "axios";

export default function SearchEngine(){
    let [keyword, setKeyword] = useState(null);

    function handleResponse(response){
        console.log(response.data[0]);
    }

    function submit(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return (
    <div className="SearchEngine">
        <form onSubmit={submit}> 
            <input className="search" placeholder="Insert a word..." autoFocus={true} onChange={handleKeywordChange}/>
            <button>Submit</button>
        </form> 
    </div>);
}