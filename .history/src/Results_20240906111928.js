import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"
import "./Dictionary.css";

export default function Results(props){
    if(props.results){
        return (
            <div className="Results m-2">
                <section className="box my-3 p-3 rounded">
                    <h2 className="mb-3">{props.results.word}</h2>
                    {props.results.phonetics.map((phonetics, index) => {
                        return (
                            <div key={index}>
                                <Phonetics phonetics={phonetics} />
                            </div>
                        )
                    })}
                </section>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section key={index}>
                            <Meaning meaning={meaning} />
                        </section>
                    );
                })}
            </div>
        );
    } else {
        return null;
    } 
}