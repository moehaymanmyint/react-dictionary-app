import React from "react";

export default function Photos(props){
    console.log(props.photos)
    if(props.photos){
        props.photots.map((photos, index) => {
            return (
                <img src={photos.url} alt="" />
            )
        })
    } else{
        return null;
    }
}