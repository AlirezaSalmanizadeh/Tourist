import React from "react";
import './cardservicdes.css'

export function CardServices(props){

        
    return(
        <div className="CardServices">
            <img src={props.Addres} className="CardImg" alt="Not Load"/>
            <h5 className="CardTitle">WorldWides Tours</h5>
            <p className="CardText">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>
    )

}