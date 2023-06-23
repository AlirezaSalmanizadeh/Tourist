import React from "react";
import "./cardawesome.css"
import image1 from "./../../asset/image/location-pin-svgrepo-com (1).svg";
import image2 from "./../../asset/image/user-svgrepo-com (1).svg";
import image3 from "./../../asset/image/event-calender-date-note-svgrepo-com.svg";

export function CardAwesome(props){
    return(
        <div className="Card">
            <div className="ImgCard">
                <img src={props.Add} alt="Not Load"/>
            </div>
            <div className="Destination">
                <small><img className="Pic" src={image1} alt="Not Load"/>Thailand</small>
                <small><img className="Pic" src={image3} alt="Not Load"/>3 days</small>
                <small><img className="Pic" src={image2} alt="Not Load"/>2 Person</small>
            </div>
            <div className="TextCard">
                <h3 className="Payment" >$149.00</h3>
                <p className="Descrip">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                <div className="AllBtn" >
                    <a className="BtnCard1">Read More</a>
                    <a className="BtnCard2">Book Now</a>
                </div>
               
            </div>
        </div>
    )

}

