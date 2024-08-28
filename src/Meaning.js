import React from "react";

export default function Meaning(props){
    console.log(props.meaning.example)
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3> 
            <p>{props.meaning.definition}</p>
        </div>
    )
}