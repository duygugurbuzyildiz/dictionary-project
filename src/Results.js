import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import 'bootstrap/dist/css/bootstrap.css';


export default function Results(props){
    if (props.result){
return (
    <div className="mb-5 mt-5 Results">
        <section className="mb-5 word">
            <h2 className="mt-1"> {props.result.word}</h2> 
            {props.result.phonetics.map(function phonetics(phonetic, index){
                return (<div key={index}> <Phonetic phonetic={phonetic} /></div>);
            })}
        </section>
        {props.result.meanings.map(function(meaning, index){
            return (
                <section className="definition mb-5" key={index}> 
                    <Meaning meaning={meaning}/>
                </section>);
            })}
        
    </div>);
} else {return null;}
}