import React from "react";
import "./Meaning.css";
import 'bootstrap/dist/css/bootstrap.css';
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h4> {props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index){
            return (
               <div key={index}>
                   
                        <strong>Definition: </strong>{definition.definition}
                        <br />
                        <strong className="opacity-50">Example: </strong><em className="opacity-50"> {definition.example}</em>
                        <Synonyms synonym={definition.synonyms}/>
                    
               </div>
            );
            })}
               
        </div>
    );
}