import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Search(){
    let [word, setWord] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        alert("searching for " + word);
    }

    function updateWord(event){
        setWord(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex">
            <input type="search" className="form form-control" onChange={updateWord}/>
            <input type="submit" value="Search" className="btn btn-danger"/>
        </form>
    );
}