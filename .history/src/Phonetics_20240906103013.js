import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

export default function Phonetics(props){
    console.log(props.phonetics)
    return (
        <div className="Phonetic my-2 d-flex flex-direction-row">
            <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
                <FontAwesomeIcon icon={faVolumeHigh} />
            </a>
            <span className="">{props.phonetics.text}</span>
        </div>
    )
}