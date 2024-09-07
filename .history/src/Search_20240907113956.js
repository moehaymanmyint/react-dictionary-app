import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Results from "./Results"
import Photos from "./Photos";
import "./Dictionary.css";

export default function Search(){
    let [word, setWord] = useState('');
    let [results, setResult] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        console.log(response.data[0]);
        setResult(response.data[0])
    }

    function handleImageResponse(response){
        console.log(response.data.photos)
    }
    
    function handleSubmit(event){
        event.preventDefault();

        //Dictionary API
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        //Image APT
        let imgaeApiKey = "YjZHrFtqi0MmsvmCsjW9BM3SiR7Xv5HUozz9pPxEQ26WQPC6FFlQBqaO";
        let imgApiUrl = `https://api.pexels.com/v1/search?query=${word}`;
        let header = { Authorization: `${imgaeApiKey}` };
        axios.get(imgApiUrl, { headers: header }).then(handleImageResponse);
    }

    function updateWord(event){
        setWord(event.target.value);
    }

    return (
        <div className="Search">
            <h1 className="my-4">What do you want to look up?</h1>
            <div className="row d-flex">
                <div className="col-6">
                    <form onSubmit={handleSubmit} className="d-flex">
                        <input type="search" className="form-control form-control-lg m-2" value={word} onChange={updateWord} placeholder="Search a word..."/>
                        <input type="submit" value="Search" className="btn btn m-2"/>
                    </form>
                    <em className="mx-2">Suggested words: rain, sunset, night & etc...</em>
                    <section className="meaning">
                        <Results results={results}/>
                    </section>
                </div>
                <div className="col-6">
                    <Photos photos={photos} />
                </div>
            </div>
        </div>
    );
}