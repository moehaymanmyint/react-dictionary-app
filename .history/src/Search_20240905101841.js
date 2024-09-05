import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Search(){
    let [word, setWord] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
    }

    function updateWord(event){
        setWord(event.target.value);
        console.log(word)
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
                        
                    </div>
                </div>
                <div className="col-5">
                    
                </div>
            </div>
        </div>
    );
}