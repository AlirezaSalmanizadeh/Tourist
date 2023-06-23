import React from "react";
import "./cardeasy.css"

export function Cardeasy(props){
    return (
        <div className="CardE">
            <div className="ImgDiv"><img src={props.Add} alt="Not Load" className="CardEImg" /></div>
            
            <h5>{props.Title}</h5>
            <hr/>
            <hr className="Hr1"/>
            <p>{props.Text}</p>
        </div>
    )
}