import React from "react";

export default function Phonetic (props){
    console.log(props.phonetic);
    
    return (<div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">🔊</a>
        <br/>
        <strong className="opacity-50">({props.phonetic.text})</strong>
    </div>); 
}