import React from "react";

export default function Synonyms(props){
    if(props.synonyms){
        return (
            <div>
                {props.synonyms.map(function (synonym, index) {
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