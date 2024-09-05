import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"

export default function Results(props){
    if(props.results){
        return (
            <div className="Results m-2">
                <h2>{props.results.word}</h2>
                {props.result.phonetics.map((phonetics, index) => {
                    return (
                        <div key={index}>
                            <Phonetics phonetics={phonetics} />
                        </div>
                    )
                })}
                {props.results.meanings.map(function (meaning, index) {
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