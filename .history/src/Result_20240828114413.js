import React from "react";
import Meaning from "./Meaning";

export default function Result(props){
    if(props.result){
        return (
            <div className="Result">
                <h1>{props.result.word}</h1>
                {props.result.meanings.map((meaning, index) => {
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