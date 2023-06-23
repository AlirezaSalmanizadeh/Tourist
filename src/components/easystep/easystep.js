import React from "react";
import "./easystep.css"
import { Cardeasy } from "../cardeasy/cardeasy";
import image1 from "./../../asset/image/airplane-square-svgrepo-com.svg"
import image2 from  "./../../asset/image/world-round-svgrepo-com.svg"
import image3 from "./../../asset/image/dollar-circle-svgrepo-com.svg"


export function Easystep(){
    return(
        <div className="Easy">
            <div className="EasyTitle">
                <h6>PROCESS</h6>
                <h1>3 Easy Steps</h1>
            </div>
            <div className="CardEasy">
                <Cardeasy Add={image2} Title={"Choose A Destination"} Text={"Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit"}/>
                <Cardeasy Add={image3} Title={"Pay Online"} Text={"Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit"}/>
                <Cardeasy Add={image1} Title={"Fly Today"} Text={"Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit"}/>
            </div>
        </div>
    )
}