import React from "react";

export default function Meaning(props){
    return (
        <div className="">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>Definitions: {props.meaning.definition}</p>
            <p>Examples: {props.meaning.example}</p>
            <Synonyms synonyms={synonyms} />
        </div>
    )
}