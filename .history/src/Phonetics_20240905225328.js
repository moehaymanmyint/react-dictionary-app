import React from "react";

export default function Phonetics(props){
    console.log(props.phonetics)
    return (
        <div className="Phonetic me-1">
            <a href={props.phonetics.audio} target="_blank"></a>
            {props.phonetics.text}
        </div>
    )
}