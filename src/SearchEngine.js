import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import 'bootstrap/dist/css/bootstrap.css';

export default function SearchEngine(){
    let [keyword, setKeyword] = useState(null);
    let [result, setResult] = useState(null);

    function handleResponse(response){
        setResult(response.data[0]);
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
            <input className="search mb-3" placeholder="Insert a word..." autoFocus={true} onChange={handleKeywordChange}/>
            <button className="btn-light">Search</button>
        </form> 
        <Results result={result}/>
    </div>);
}