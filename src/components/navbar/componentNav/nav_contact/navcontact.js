import React from "react";
import "./navcontact.css"
import image1 from "../../../../asset/image/facebook-svgrepo-com.svg"
import image2 from "../../../../asset/image/instagram-svgrepo-com.svg"
import image3 from "../../../../asset/image/linkedin-svgrepo-com.svg"
import image4 from "../../../../asset/image/twitter-svgrepo-com.svg"
import image5 from "../../../../asset/image/youtube-svgrepo-com.svg"
import image6 from "../../../../asset/image/location-pin-svgrepo-com.svg"
import image7 from "../../../../asset/image/phone-svgrepo-com.svg"
import image8 from "../../../../asset/image/email-open-svgrepo-com.svg"

export function NavContact() {
    return ( 
    <div className = "NavContact" >

        <ul className = "AddresUl" >
            <li > < img src = { image6 }alt = "Location" /> 123 Street, NewYork, USA </li> 
            <li > < img src = { image7 }alt = "Phone"className = "Phone" /> +012 345 6789 </li> 
            <li > < img src = { image8 }alt = "Email"className = "Email" /> mail @domain.com </li>

        </ul>


        <ul className = "RelationUl" >
            <li > < img src = { image1 }alt = "Facebook" /> </li> 
            <li > < img src = { image2 }alt = "Instagram" /> </li> 
            <li > < img src = { image3 }alt = "Telegram" /> </li>
            <li > < img src = { image4 }alt = "Twitter" /> </li> 
            <li > < img src = { image5 }alt = "Youtube" /> </li> 
        </ul>

        </div>
    )
}