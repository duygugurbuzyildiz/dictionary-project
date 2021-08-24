import React from "react";
import Meaning from "./Meaning";
import 'bootstrap/dist/css/bootstrap.css';


export default function Results(props){
    if (props.result){
return (
    <div className="Results">
        <h2> {props.result.word} <small className="opacity-50">(<em>{props.result.phonetic}</em>)</small></h2>
        {props.result.meanings.map(function(meaning, index){
            return (
                <div key={index}> 
                    <Meaning meaning={meaning}/>
                </div>);
        })}
    </div>);
} else {return null;}
}