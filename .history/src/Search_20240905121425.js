import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Results from "./Results"

export default function Search(){
    let [word, setWord] = useState('');
    let [results, setResult] = useState();

    function handleResponse(response){
        console.log(response.data[0]);
        setResult(response.data[0])
    }
    
    function handleSubmit(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function updateWord(event){
        setWord(event.target.value);
    }

    return (
        <div className="Content">
            <h3>What do you want to look up?</h3>
            <div className="row d-flex">
                <div className="col-7">
                    <form onSubmit={handleSubmit} className="d-flex">
                        <input type="search" className="form form-control m-2" value={word} onChange={updateWord}/>
                        <input type="submit" value="Search" className="btn btn-danger m-2"/>
                    </form>
                    <div className="meaning">
                        <Results results={results}/>
                    </div>
                </div>
                <div className="col-5">
                    
                </div>
            </div>
        </div>
    );
}