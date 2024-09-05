import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

export default function Phonetics(props){
    console.log(props.phonetics)
    return (
        <div className="Phonetic">
            <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer" className="me-3 m-1">
                <FontAwesomeIcon icon={faVolumeHigh} />
            </a>
            <span className="m-1">{props.phonetics.text}</span>
        </div>
    )
}