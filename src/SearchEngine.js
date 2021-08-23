import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

export default function SearchEngine(){
    let [keyword, setKeyword] = useState(null);
    let [result, setResult] = useState(null);

    function handleResponse(response){
        setResult(response.data[0]);
        console.log(response.data[0]);
        console.log(response.data[0].meanings[0].definitions[0].definition)
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
        <Results result={result}/>
    </div>);
}