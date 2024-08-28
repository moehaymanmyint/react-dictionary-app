import React from "react";

export default function Result(props){
    if(props.results){
        return (<div className="Results">This is Results</div>)
    } else{
        return null;
    }
}