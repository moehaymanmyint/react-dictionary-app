import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Phonetics(props){
    console.log(props.phonetics)
    return (
        <div className="Phonetic me-1">
            <a href={props.phonetics.audio} target="_blank">Listen</a>
            {props.phonetics.text}
        </div>
    )
}