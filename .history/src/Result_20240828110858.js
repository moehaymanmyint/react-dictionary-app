import React from "react";

export default function Result(props){
    if(props.result){
        return (
            <div className="Result">
                <h2>{props.result.word}</h2>
            </div>
        )
    } else{
        return null;
    }
}