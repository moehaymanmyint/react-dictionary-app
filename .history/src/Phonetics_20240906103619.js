import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

export default function Phonetics(props){
    return (
        <div className="Phonetic my-2">
            <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer" className="me-3 text-dark fs-4">
                <FontAwesomeIcon icon={faVolumeHigh} className="fs-4"/>
            </a>
            <span className="">{props.phonetics.text}</span>
        </div>
    )
}