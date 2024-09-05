import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props){
    console.log(props.phonetics)
    return (
        <div className="Phonetic">
            <ReactAudioPlayer
                src={props.phonetics.audio}
                autoPlay
                controls
            />
            <p ms-1>{props.phonetics.text}</p>
        </div>
    )
}