import React from "react";

export default function Synonyms(props){
    if(props.synonyms){
        return (
            <h1><strong>Synionyms: </strong>{props.synonyms}</h1>
        )
    }
    
}