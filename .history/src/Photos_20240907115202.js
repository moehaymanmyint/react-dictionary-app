import React from "react";

export default function Photos(props){
    console.log(props.photos)
    if(props.photos){
        return (
            {props.photos.map((photo, index) => {
                return <img src={photo.src.landscape} alt="" />
            })}
        )
    } else{
        return null;
    }
}