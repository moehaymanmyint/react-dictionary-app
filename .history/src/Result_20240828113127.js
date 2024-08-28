import React from "react";
import Meaning from "./Meaning";

export default function Result(props){
   
    if(props.result){
        console.log(props.word)
        return (
            <div className="Result">
                <h2>{props.word}</h2>
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