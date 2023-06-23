import React, { useEffect,useState } from "react";
import './searchbox.css'

export function SearchBox() {
    const [search , setsearch]=useState();
    useEffect(()=>{
        setsearch(window.screen.width)
    })

    

    return ( 
        <>
            <h2 className = "Title" > Enjoy Your Vacation With Us </h2>  
            <p className = "Text" > Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit </p>  
            <div className = { search <900 ?"DivForm1" :"DivForm"}  >
                <form className = "FormSearch"action = "#" method = "post" >
                    <button type = "submit"className = "BtnSearch" > Search </button> 
                    <input type = "search"className = "InputSearch" />
                </form> 
            </div>

        </>

    )
}