import React from "react";

export default function Meaning(props){
    return (
        <div className="">
            <h3>{props.meaning.partOfSpeech}</h3>

            {props.meaning.definition.map((definition, index) => {
                return (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <p>{definition.example}</p>
                    </div>
                )
            }}
        </div>
    )
}