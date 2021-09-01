import React from "react";

export default function Synonyms(props){
    if (props.synonym){
        return(<div>
            <h6 className="mt-1">Synonyms</h6>
            <ul className="Synonyms mt-3">
                {props.synonym.map(function(synonyms, index){
                return (
                    <li className="d-inline-block pe-3"key={index}> 
                        {synonyms}
                    </li>)

                })}
            </ul> </div>);
    } else{
        return null;
    }
}