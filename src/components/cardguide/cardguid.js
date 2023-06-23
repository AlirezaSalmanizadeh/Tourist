import React from "react";
import './cardguid.css'
import image1 from "./../../asset/image/facebook-svgrepo-com (3).svg"
import image2 from "./../../asset/image/instagram-svgrepo-com (1).svg"
import image3 from "./../../asset/image/twitter-1-svgrepo-com.svg"


export function CardGuid(props){

    return(
        <div className="Guide">

            <div className="PictureGuid"> <img src={props.Add} alt="Not Load"/> </div>
            <div className="SocialMedia">
                <ul className = "Social" >
                    <li>< img src = { image1 }alt = "Facebook" /> </li> 
                    <li>< img src = { image3 }alt = "Twitter" /> </li> 
                    <li>< img src = { image2 }alt = "Instagram" /> </li> 
           
                </ul>
            </div>
            <div className="GuidSpecs">
                <h5 className="FullName">Full Name</h5>
                <small className="Destination1">Destination</small>
            </div>

        </div>
    )

}