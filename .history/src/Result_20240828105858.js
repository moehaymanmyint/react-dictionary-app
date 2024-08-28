import React from "react";

export default function Result(props){
    if(props.result){
        return (
            <h2>{props.result.word}</h2>
        )
    } else{
        return null;
    }
}