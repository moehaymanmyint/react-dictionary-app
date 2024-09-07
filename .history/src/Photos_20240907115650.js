import React from "react";

export default function Photos(props){
    console.log(props.photos)
    if(props.photos){
        return (
            <div className="Photos">
                <div className="row">
                {props.photos.map((photo, index) => {
                    return (
                        <div className="col-3">
                            <img src={photo.src.landscape} alt="" key={index} />
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