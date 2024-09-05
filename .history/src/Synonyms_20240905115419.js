import React from "react";

export default function Synonyms(props){
    if(props.synonyms){
        return (
            <h1>{props.synonyms}</h1>
        )
    }
    
}