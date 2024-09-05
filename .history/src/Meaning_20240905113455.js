import React from "react";

export default function Meaning(props){
    return (
        <div className="m-2">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definition}</p>
        </div>
    )
}