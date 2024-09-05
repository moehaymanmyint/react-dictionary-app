import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Result from "./Result"

export default function Search(){
    let [searchInput, setSearchInput] = useState('');
    let [word, setWord] = useState(''); 
    let [result, setResult] = useState(null);
    
    function handleResponse(response) {
        console.log(response.data);  
        if (response.data && response.data.word) {
            setResult(response.data);
        } else {
            setResult(null);
        }
    }
    
    function updateSearchInput(event) {
        setSearchInput(event.target.value); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        setWord(searchInput); 
        searchWord(searchInput); 
    }

    function searchWord(word) {
        if (word) {
            let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=03aa5321feb0a48eoca7a4tede1f2bb1`;
            axios.get(apiUrl).then(handleResponse).catch(error => {
                console.error("There was an error with the request:", error);
                alert("There was an error fetching the data. Please try again later.");
            });
        }
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
                        <input type="search" className="form form-control m-2" value={word} onChange={updateSearchInput}/>
                        <input type="submit" value="Search" className="btn btn-danger m-2"/>
                    </form>
                    <div className="meaning">
                        <Result result={result}/>
                    </div>
                </div>
                <div className="col-5">
                    
                </div>
            </div>
        </div>
    );
}