import React from "react";

export default function Meaning(props){
    console.log(props.meanings)
    return (
        <div className="Meaning">
            <h3>{props.meanings.partOfSpeech}</h3>
            <p>{props.meanings.definition}</p>
        </div>
    )
}