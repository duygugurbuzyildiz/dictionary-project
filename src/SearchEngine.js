import React, {useState} from "react";

export default function SearchEngine(){
    let [keyword, setKeyword] = useState(null);
    function submit(event){
        event.preventDefault();
        alert (`Searching for ${keyword} definition`);
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