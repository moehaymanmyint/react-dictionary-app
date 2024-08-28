import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Result from "./Result"

export default function Search(props){
    let [word, setWord] = useState('fountain');
    let [result, setResult] = useState(null);

    let apiUrl =  `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=03aa5321feb0a48eoca7a4tede1f2bb1`;
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
        <div className="Content">
            <h3>What do you want to look up?</h3>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="d-flex">
                    <input type="search" className="form form-control m-2" value={word} onChange={updateWord}/>
                    <input type="submit" value="Search" className="btn btn-danger m-2"/>
                </form>
            <div className="meaning">
                <Result results={result} />
            </div>
            </div>
        </div>
    );
}