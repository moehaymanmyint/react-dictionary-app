import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default function Search(){
    let [word, setWord] = useState('fountain');

    let apiUrl =  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response){
        console.log(response);
    }

    function handleSubmit(event){
        event.preventDefault();
        alert("searching for " + word);
    }

    function updateWord(event){
        setWord(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex">
            <input type="search" className="form form-control m-2" value={word} onChange={updateWord}/>
            <input type="submit" value="Search" className="btn btn-danger m-2"/>
        </form>
    );
}