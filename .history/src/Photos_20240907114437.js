import React from "react";

export default function Photos(props){
    console.log(props.photos)
    if(props.photos){
        return (
            <h1>This is Photo</h1>
        );
    } else{
        return null;
    }
}