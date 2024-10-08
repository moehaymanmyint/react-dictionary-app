import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props){
    return (
        <div className="Meaning my-5 p-4">
          <h2>{props.meaning.partOfSpeech}</h2>
          {props.meaning.definitions.map((definition, index) => {
            return (
              <div key={index}>
                <p>
                  {definition.definition}
                  <br />
                  <em>{definition.example}</em>
                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </div>
            );
          })}
        </div>
    );
}