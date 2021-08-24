import React from "react";
import "./Meaning.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Meaning(props){
    console.log(props.meaning);
    return (<div className="Meaning">
       <h4> {props.meaning.partOfSpeech}</h4>
       {props.meaning.definitions.map(function(definition, index){
           return (
               <div key={index}> 
               {definition.definition}
               <br />
               <em><p className="opacity-50">Example: {definition.example}</p></em>
               </div>
           )
       })}
       <h5>Synonyms</h5>
        {props.meaning.definitions[0].synonyms.map(function(synonyms, index){
                return (
                    <div key={index} className="synonyms"> 
                        {synonyms}
                    </div>)
                })}
    </div>);
}