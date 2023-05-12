import React from "react";
import image1 from './../asset/image/couple-travelers-pointing-directions.jpg'
import image2 from './../asset/image/arrow-right-svgrepo-com.svg'
import './about.css'
import { Tourist } from "../components/tourist/tourist";


export function About() {
    return ( 
    <div className = "About" >

        <div className = "CardAbout" >
            <div className = "ImgAbout" >
                <img src = { image1 }alt = "Not Load" />
            </div> 
        <div className = "TitleAbout" >
            <h6 className = "H6About" > ABOUT US </h6> 
            <h1 className = "H1About" > Welcome To < Tourist /> </h1> 
            <p className = "TextOne" > Tempor erat elitr rebum at clita.Diam dolor diam ipsum sit.Aliqu diam amet diam et eos.Clita erat ipsum et lorem et sit. </p> 
            <p className = "Texttwo" > Tempor erat elitr rebum at clita.Diam dolor diam ipsum sit.Aliqu diam amet diam et eos.Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. </p> 
            <div className = "BoxAbout" >
                <div className = "ColOne" >
                    <p className = "SelectAbout" > < img src = { image2 }alt = "Not Load" /> First Class Flights </p> 
                    <p className = "SelectAbout" > < img src = { image2 }alt = "Not Load" /> 5 Star Accommodations </p> 
                    <p className = "SelectAbout" > < img src = { image2 }alt = "Not Load" /> 150 Premium City Tours </p> 
                </div> 
                <div className = "ColTwo" >
                    <p className = "SelectAbout" > < img src = { image2 }alt = "Not Load" /> Handpicked Hotels </p> 
                    <p className = "SelectAbout" > < img src = { image2 }alt = "Not Load" /> Latest Model Vehicles </p> 
                    <p className = "SelectAbout" > < img src = { image2 }alt = "Not Load" /> 24 / 7 Service </p> 
                </div> 
            </div> 
                <button className = "BtnAbout"type = "button" > Read More </button> 
            </div> 
        </div>

    </div>
    )
}