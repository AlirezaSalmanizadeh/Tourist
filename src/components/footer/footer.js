import React from "react";
import "./footer.css"
import image1 from "./../../asset/image/package-1.jpg"
import image2 from "./../../asset/image/package-2.jpg"
import image3 from "./../../asset/image/package-3.jpg"
import image4 from "./../../asset/image/arrow-left-bold-svgrepo-com.svg"
import image5 from "./../../asset/image/email-open-svgrepo-com.svg"
import image6 from "./../../asset/image/location-pin-svgrepo-com.svg"
import image7 from "./../../asset/image/phone-svgrepo-com.svg"
import image8 from "./../../asset/image/facebook-svgrepo-com.svg"
import image9 from "./../../asset/image/instagram-svgrepo-com.svg"
import image10 from "./../../asset/image/linkedin-svgrepo-com.svg"
import image11 from "./../../asset/image/twitter-svgrepo-com.svg"
import image12 from "./../../asset/image/youtube-svgrepo-com.svg"


export function Footer(){

    return(
        <div className="Footer">
            <div className="Foot1">
                <div className="FootCompany">
                    <h4 className="TitleH4">Company</h4>
                    <a className="LinkCompany"><img src={image4}/>About Us</a>
                    <a className="LinkCompany"><img src={image4}/>Contact Us</a>
                    <a className="LinkCompany"><img src={image4}/>Privacy Policy</a>
                    <a className="LinkCompany"><img src={image4}/>Terms & Condition</a>
                    <a className="LinkCompany"><img src={image4}/>FAQs & Help</a>
                </div>
                <div className="FootContact">
                    <h4 className="TitleH4">Contact</h4>
                    <p><img src={image7} alt="Not Load"/>123 Street, New York, USA</p>
                    <p><img src={image6} alt="Not Load"/>+012 345 67890</p>
                    <p><img src={image5} alt="Not Load"/>mail@domain.com</p>
                    <ul className = "RelationUl" >
                        <li > < img src = { image8 }alt = "Facebook" /> </li> 
                        <li > < img src = { image9 }alt = "Instagram" /> </li> 
                        <li > < img src = { image10 }alt = "Telegram" /> </li>
                        <li > < img src = { image11 }alt = "Twitter" /> </li> 
                        <li > < img src = { image12 }alt = "Youtube" /> </li> 
                    </ul>

                </div>
                <div className="FootGallery">
                    <h4 className="TitleH4">Gallery</h4>
                    <div className="Galary">
                        <div className="G1">
                            <img  className="ImgG1" src={ image1 } alt="Not Load"/>
                        </div>
                        <div className="G2">
                            <img  className="ImgG2" src={ image2  } alt="Not Load"/>
                        </div>
                        <div className="G3">
                            <img  className="ImgG3" src={  image3 } alt="Not Load"/>
                        </div>
                        <div className="G4">
                            <img  className="ImgG4" src={  image1 } alt="Not Load"/>
                        </div>
                        <div className="G5">
                            <img  className="ImgG5" src={  image2 } alt="Not Load"/>
                        </div>
                        <div className="G6">
                            <img  className="ImgG6" src={  image3 } alt="Not Load"/>
                        </div>
                        
                       
                    </div>

                </div>

            </div>
            <div className="Foot2">
                <div className="Boot">
                    <p>© Your Site Name, All Rights Reserved. Designed By HTML Codex</p>
                </div>
            </div>
        </div>

    )


}