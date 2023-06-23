import React from "react";
import image1 from './../asset/image/couple-travelers-pointing-directions.jpg'
import image2 from './../asset/image/arrow-right-svgrepo-com.svg'
import './about.css'
import { Tourist } from "../components/tourist/tourist";
import { CardGuid } from "../components/cardguide/cardguid";
import image3 from "./../asset/image/team-1.jpg"
import image4 from "./../asset/image/team-2.jpg"
import image5 from "./../asset/image/team-3.jpg"
import image6 from "./../asset/image/team-4.jpg"


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

        <div className="MeetGuid">
            <div className="MeetCont">
                <div className="TitleMeetGuid">
                    <h6>TRAVEL Guide</h6>
                    <h1>Meet Our Guide</h1>
                </div>
                <div className="Guides">
                    <CardGuid  Add={image3}/>
                    <CardGuid  Add={image4}/>
                    <CardGuid  Add={image5}/>
                    <CardGuid  Add={image6}/>
                </div>  
            </div>
        </div>

    </div>
    )
}