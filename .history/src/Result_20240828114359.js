import React from "react";
import Meaning from "./Meaning";

export default function Result(props){
    if(props.result){
        return (
            <div className="Result">
                <h1>{props.resultword}</h1>
                {props.result.map((meaning, index) => {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        )
    } else{
        return null;
    }
}