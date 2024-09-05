import React from "react";

export default function Synonyms(props){
    if(props.synonyms){
        return (
            <p><strong>Synonyms: </strong>
                {props.synonyms.map((synonyms, index) => {
                    <span key={index}>
                        {synonyms}
                    </span>
                })}
            </p>
        )
    } else{
        return null;
    }
    
}