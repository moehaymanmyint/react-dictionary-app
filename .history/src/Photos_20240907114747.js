import React from "react";

export default function Photos(props){
    console.log(props.photos)
    if(props.photos){
        props.photos.map((photos, index) => {
            return (
                <img src={photos.src.landscape} alt="" />
            )
        })
    } else{
        return null;
    }
}