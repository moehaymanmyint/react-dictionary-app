import React from "react";

export default function Synonyms(props){
    if(props.synonyms){
        return (
            <div><strong>Synonyms: </strong>
                {props.synonyms.map((synonym, index) => {
                    <span key={index}>
                        {synonyms=}
                    </span>
                })}
            </div>
        )
    } else{
        return null;
    }
    
}