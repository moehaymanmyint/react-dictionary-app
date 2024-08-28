import React from "react";

export default function Result(props){
    if(props.results){
        return (
            <h2>{props.results.word</h2>
        )
    } else{
        return null;
    }
}