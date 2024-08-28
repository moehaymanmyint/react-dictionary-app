import React from "react";

export default function Meaning(props){
    console.log(props)
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.map((definition, index) => {
                return(
                    <div key={index}>
                        <p>
                            {definition}
                            <br />
                            <em></em>
                        </p>
                    </div>
                )
            })}
            <p>{props.meaning.definition}</p>
        </div>
    )
}