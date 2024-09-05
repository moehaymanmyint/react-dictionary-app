import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props){
    console.log(props.phonetics)
    return (
        <div className="Phonetic me-1">
            <ReactAudioPlayer
                src={props.phonetics.audio}
                controls
            />
            {props.phonetics.text}
        </div>
    )
}