import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Search(){
    function handleSubmit(event){
        event.preventDefault();
    }

    function updateWord(){

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" className="form form-control" onChange={updateWord}/>
        </form>
    );
}