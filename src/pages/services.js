import React from "react";
import './services.css'
import { Slider } from "../components/slider/slider";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {CardServices} from './../components/cardservices/cardservices'
import {TitleServices} from './../components/titleservices/titleservices'
import image1 from './../asset/image/worldwide-internet-svgrepo-com.svg'
import image2 from './../asset/image/hotel-building-svgrepo-com.svg'
import image3 from './../asset/image/user-svgrepo-com (1).svg'
import image4 from './../asset/image/setting-svgrepo-com.svg'
import image5 from "./../asset/image/testimonial-3.jpg"
import image6 from "./../asset/image/testimonial-2.jpg"
import image7 from "./../asset/image/testimonial-1.jpg"
import image8 from "./../asset/image/testimonial-4.jpg"
import image9 from "./../asset/image/team-1.jpg"
import image10 from "./../asset/image/team-2.jpg"
import image11 from "./../asset/image/team-3.jpg"
import image12 from "./../asset/image/team-4.jpg"



export function Services() {
    const responsive = {
        0: { items: 1 },
        780:{ items: 2 },
        1000: { items: 3 },
        1400: { items: 4 },
    };
    return ( 
        
            <div className="Services">
                <TitleServices/>
                <div className="Cards">
                    <CardServices Addres={image1}/>
                    <CardServices Addres={image2}/>
                    <CardServices Addres={image3}/>
                    <CardServices Addres={image4}/>
                    <CardServices Addres={image1}/>
                    <CardServices Addres={image2}/>
                    <CardServices Addres={image3}/>
                    <CardServices Addres={image4}/>
                </div>
                <div className="SliderPage">
                    <div className="SliderTitle">
                        <h6>TESTIMONIAL</h6>
                        <h1>Our Clients Say!!!</h1>
                    </div>
                    <div className="Sliderimg">
                        <AliceCarousel autoPlay   autoPlayInterval={3500}  autoPlayStrategy="none" animationDuration={1500}  disableButtonsControls responsive={responsive} infinite  touchTracking={false}>
                            <Slider Add={image5} coler={1}/>
                            <Slider Add={image6}/>
                            <Slider Add={image7} coler={1}/>
                            <Slider Add={image8} />
                            <Slider Add={image9} coler={1}/>
                            <Slider Add={image10} />
                            <Slider Add={image11} coler={1}/>
                            <Slider Add={image12} />
                        </AliceCarousel>
                    </div>
                </div>
            </div>
       
    )
}