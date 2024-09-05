import React from "react";

export default function Meaning(props){
    if (props.meaning) {
        return (
            <div className="Meaning">
                <h3>{props.meaning.partOfSpeech}</h3> 
                <p>{props.meaning.definition}</p>
            </div>
        );
    } else {
        return null;
    }
}