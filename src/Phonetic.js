import React from "react";

export default function Phonetic (props){
        let audio = new Audio(props.phonetic.audio)
      
        const start = () => {
          audio.play()
        }
    return (<div className="Phonetic">
        <button className="border-0" onClick={start}>🔊</button>
        <span> <strong className="opacity-50 fs-5">({props.phonetic.text})</strong> </span>
    </div>); 
}