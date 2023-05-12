import React from "react";
import './services.css'
import {CardServices} from './../components/cardservices/cardservices'
import {TitleServices} from './../components/titleservices/titleservices'
import image1 from './../asset/image/worldwide-internet-svgrepo-com.svg'
import image2 from './../asset/image/worldwide-internet-svgrepo-com.svg'
import image3 from './../asset/image/worldwide-internet-svgrepo-com.svg'
import image4 from './../asset/image/worldwide-internet-svgrepo-com.svg'
import image5 from './../asset/image/worldwide-internet-svgrepo-com.svg'
import image6 from './../asset/image/worldwide-internet-svgrepo-com.svg'
import image7 from './../asset/image/worldwide-internet-svgrepo-com.svg'
import image8 from './../asset/image/worldwide-internet-svgrepo-com.svg'

export function Services() {
    return ( 
        <div className="Services">
            <TitleServices/>
            <div className="Cards">
                <CardServices Addres={image1}/>
                <CardServices Addres={image2}/>
                <CardServices Addres={image3}/>
                <CardServices Addres={image4}/>
                <CardServices Addres={image5}/>
                <CardServices Addres={image6}/>
                <CardServices Addres={image7}/>
                <CardServices Addres={image8}/>
            </div>
        </div>
    )
}