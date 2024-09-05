import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

export default function Phonetics(props){
    console.log(props.phonetics)
    return (
        <div className="Phonetic me-1">
            <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faVolumeHigh} />
            </a>
            {props.phonetics.text}
        </div>
    )
}