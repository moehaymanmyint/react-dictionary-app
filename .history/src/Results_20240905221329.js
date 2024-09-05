import React from "react";
import Meaning from "./Meaning";

export default function Results(props){
    console.log(props.result.phonetics[0].audio)
    if(props.results){
        return (
            <div className="Results m-2">
                <h2>{props.results.word}</h2>
                {/* {props.result.phonetics.map((phonetics, index) => {
                    return (
                        <div key={index}>
                            <Phonetics phonetics={phonetics} />
                        </div>
                    )
                })} */}
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