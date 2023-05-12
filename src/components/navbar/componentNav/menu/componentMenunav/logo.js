import React from "react";
import image1 from './../../../../../asset/image/location-pin-svgrepo-com (1).svg'
import './logo.css'

export function Logo() {

    return ( 
        <div className = "Logo" >

            <img src = { image1 }alt = "Not Load"className = "ImgLogo"/>
            <h1 className = "TitleLogo" > Tourist </h1>

        </div>
    )
}