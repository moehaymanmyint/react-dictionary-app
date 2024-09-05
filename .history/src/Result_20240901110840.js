import React from "react";
import Meaning from "./Meaning";

export default function Result(props){
    if (props.result && props.result.meanings) {
        return (
            <div className="Result">
                <h1 className="fw-bold">{props.result.word}</h1>
                <p className="fw-bold">{props.result.phonetic}</p>
                {props.result.meanings.map((meaning, index) => {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}