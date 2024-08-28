import React from "react";

export default function Result(props){
    if(props.result){
        return (
            <div className="Result">
                <h2>{props.result.word}</h2>
                {props.result.map((meaning, index) => {
                    return meaning.definition;
                })}
            </div>
        )
    } else{
        return null;
    }
}