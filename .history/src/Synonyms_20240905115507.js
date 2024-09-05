import React from "react";

export default function Synonyms(props){
    if(props.synonyms){
        return (
            <p><strong>Synonyms: </strong>{props.synonyms}</p>
        )
    } else{
        return null';
    }
    
}