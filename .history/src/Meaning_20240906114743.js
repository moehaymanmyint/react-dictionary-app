import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props){
    return (
        <div className="Meaning my-5 p-4 rounded">
          <h2>{props.meaning.partOfSpeech}</h2>
          {props.meaning.definitions.map((definition, index) => {
            return (
              <div key={index}>
                <p>
                  <strong>Definition:</strong> {definition.definition}
                  <br />
                  <strong>Example:</strong>
                  <em>{definition.example}</em>
                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </div>
            );
          })}
        </div>
    );
}