import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Results from "./Results"
import "./Dictionary.css";

export default function Search(){
    let [word, setWord] = useState('');
    let [results, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        console.log(response.data[0]);
        setResult(response.data[0])
    }
    
    function handleSubmit(event){
        event.preventDefault();
        Search();
    }

    function Search(){
        //API
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function updateWord(event){
        setWord(event.target.value);
        Search();
    }
 
    if (loaded) {
        return (
            <div className="Search">
            <h1 className="my-4">What do you want to look up?</h1>
            <div className="row d-flex">
                <div className="col-7">
                    <form onSubmit={handleSubmit} className="d-flex">
                        <input type="search" className="form-control form-control-lg m-2" value={word} onChange={updateWord} placeholder="Search a word..."/>
                        <input type="submit" value="Search" className="btn btn m-2"/>
                    </form>
                    <section className="meaning">
                        <Results results={results}/>
                    </section>
                </div>
                <div className="col-5">
                    
                </div>
            </div>
        </div>
        );
    } else {
        Loaded();
        return "Loading"
    }
}