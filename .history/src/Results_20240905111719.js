import React from "react";

export default function Results(props){
    if(props.results){
        return (
            <h1>Hi results</h1>
        )
    } else {
        return null;
    }
    
}