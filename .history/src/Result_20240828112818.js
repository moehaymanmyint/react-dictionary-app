import React from "react";
import Meaning from "./Meaning";

export default function Result(props){
   
    if(props.result){
        console.log(props.result)
        return (
            <div className="Result">
                <h2>{props.result.word}</h2>
                {props.result.meaning.map((meanings, index) => {
                    return (
                        <div key={index}>
                            <Meaning meanings={meanings} />
                        </div>
                    );
                })}
            </div>
        )
    } else{
        return null;
    }
}