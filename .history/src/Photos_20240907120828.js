import React from "react";
import "./Dictionary.css";

export default function Photos(props){
    console.log(props.photos)
    if(props.photos){
        return (
            <div className="Photos">
                <div className="row">
                    <h1>Images</h1>
                {props.photos.map((photo, index) => {
                    return (
                        <div className="col-3 mb-1" key={index}>
                            <a href={photo.src.original} target="_blank" rel="noreferrer" >
                                <img src={photo.src.landscape} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    } else{
        return null;
    }
}