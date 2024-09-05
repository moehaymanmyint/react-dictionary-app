import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return (
        <div className="">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p><strong>Definitions:</strong> {props.meaning.definition}</p>
            <p><strong>Examples:</strong> {props.meaning.example}</p>
            {/* {props.meanings.synonyms} */}
            <Synonyms synonyms={props.meaning.synonyms}/>
        </div>
    )
}