import React,{useEffect,useState} from "react";
import { Logo } from './componentMenunav/logo'
import { MenuUl } from './componentMenunav/menuul'
import './menunav.css'
import { SearchBox } from './componentMenunav/searchbox'


export function MenuNav() {

    const [scrollposition,setscrollposition]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', stickNavbar);

        return()=>{
            window.removeEventListener('scroll', stickNavbar);
        };

    },[])
   
    const stickNavbar=()=>{
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            console.log(windowHeight);
            windowHeight >0 ? setscrollposition(true) : setscrollposition(false);
        }
    }

    return ( <
        div className = "MenuNav" >
            <div className = {`${scrollposition ?'StinkyHeader' :'Header'}`} >
                <Logo />
                <MenuUl />
            </div> 
            <div className = "Search" >
                <SearchBox />
            </div>


        </div>
    )
}