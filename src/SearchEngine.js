import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./SearchEngine.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function SearchEngine(){
    let [keyword, setKeyword] = useState(null);
    let [result, setResult] = useState(null);
    let [photos, setPhotos] = useState (null);

    function handleResponse(response){
        setResult(response.data[0]);
    }

    function handleImage(response){
        setPhotos(response.data.photos);
    }

    function submit(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f917000010000012781662f9bed46bd98879a0ba89b2619";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        
        axios.get(pexelsApiUrl, {headers: {Authorization: `Bearer ${pexelsApiKey}`}}).then(handleImage);
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
        <Photos photos={photos}/>
        
    </div>);
}