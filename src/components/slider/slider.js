import React from "react";
import "./slider.css"


export function Slider(props){

    return(

        <div className="Slider">
            <div className={`CardSlider ${props.coler==1 ?"CardColer" :""} `}>
                <img src={props.Add} alt="Not Load" className={`ImgSlider ${props.coler==1 ?"ImgColer" :""} `}/>
                <h5 className="FullName">Alireza Mani</h5>
                <p className="Address">New York, USA</p>
                <p className="Customer">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
        </div>

    )

} 