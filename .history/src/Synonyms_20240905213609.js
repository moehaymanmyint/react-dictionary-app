import React from "react";

export default function Synonyms(props){
  console.log(props)
    if (props.synonyms) {
        return (
          <p className="Synonyms">
            <strong>Synonyms: </strong>
            {props.synonyms.map(function (synonym, index) {
              return <span key={index}>{synonym}</span>;
            })}
          </p>
        );
    } else {
        return null;
    }
}