import React from "react";

export default function Synonyms(props){
    if(props.synonyms){
        return (
            <div><strong>Synonyms: </strong>
                {props.synonyms.map((synonyms, index) => {
                    <span key={index}>
                        {synonym}
                    </span>
                })}
            </div>
        )
    } else{
        return null;
    }
    
}