import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./SearchEngine.css";
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
        <section>
            <form onSubmit={submit}> 
                <input className="search mb-3 mt-3 rounded-pill border border-1" placeholder="  Insert a word..." onChange={handleKeywordChange}/>
                <button className="rounded-pill border border-1 searchButton" autoFocus={true}>Search</button>
            </form>
        </section>
        <Results result={result}/>
        
    </div>);
}