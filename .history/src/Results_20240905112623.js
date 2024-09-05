import React from "react";

export default function Results(props){
    if(props.results){
        return (
            <div className="Results m-2">
                <h2>{props.results.word}</h2>
                <h4>{props.results.phonetic}</h4>

                {props.results.meaning.map(function(meaning, index) {
                    return meaning.definition;
                })}
            </div>
        )
    } else {
        return null;
    } 
}