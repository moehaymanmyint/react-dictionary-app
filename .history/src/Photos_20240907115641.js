import React from "react";

export default function Photos(props){
    console.log(props.photos)
    if(props.photos){
        return (
            <div className="Photos">
                <div className="row">
                {props.photos.map((photo, index) => {
                    return (
                        <img src={photo.src.landscape} alt="" key={index} />
                    )
                })}
                </div>
            </div>
        )
    } else{
        return null;
    }
}