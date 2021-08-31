import React from "react";

export default function Synonyms(props){
    if (props.synonym){
        return(<div>
            <ul className="Synonyms">
                {props.synonym.map(function(synonyms, index){
                return (
                    <li key={index}> 
                        {synonyms}
                    </li>)
                })}
            </ul> </div>);
    } else{
        return null;
    }
}