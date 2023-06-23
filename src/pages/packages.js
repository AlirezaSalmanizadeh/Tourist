import React from "react";
import "./packages.css";
import image1 from "./../asset/image/package-1.jpg";
import image2 from "./../asset/image/package-2.jpg";
import image3 from "./../asset/image/package-3.jpg";
import {CardAwesome} from "./../components/cardawesome/cardawesome"
import { BookOnline } from "../components/bookonline/bookonline";
import { Easystep } from "../components/easystep/easystep";



export function Packages() {
    return ( 
        <div className="Packages">
            <div className="AwesomePackage">
                    <div className="TitleAwesome">
                        <h6>PACKAGES</h6>
                        <h1>Awesome Packages</h1>
                    </div>
                    <div className="CardAwesome">
                        <CardAwesome Add={image1}/>
                        <CardAwesome Add={image2}/>
                        <CardAwesome Add={image3}/>
                    </div>
            </div>

            <div className="OnlineBook">
                <BookOnline/>
            </div>

            <div className="EasyStep">
                <Easystep/>
            </div>

        </div>
    )
}