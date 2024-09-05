import React from "react";
import Results from '../.history/src/Results_20240905103359';

export default function Results(props){
    if(props.results){
        return (
            <h1>Hi Results</h1>
        )
    } else {
        return null;
    }
    
}