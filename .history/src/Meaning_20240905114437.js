import React from "react";

export default function Meaning(props){
    return (
        <div className="">
            <h3>{props.meaning.partOfSpeech}</h3>
{props.meaning.definition}</p>
            <p>Examples: {props.meaning.example}</p>
            {props.meaning.synonyms}
        </div>
    )
}