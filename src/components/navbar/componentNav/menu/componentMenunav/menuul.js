import React ,{useEffect, useState} from "react";
import './menuul.css'
import { NavLink } from "react-router-dom";
import { Mobilenavbar } from "../../../../mobilenavbar/mobilenavbar";

export function MenuUl() {

  const [resize,setresize]=useState()
    useEffect(() => {
        setresize(window.screen.width)
    });
   

    
    return (
        <>
            {
                window.screen.width< 1000 ? < Mobilenavbar />
                :(
                    <ul className = "UlMenu" >
                    <li > < NavLink to = '/' > Home </NavLink>   </li >
                    <li> < NavLink to = '/pages/about' > About </NavLink> </li >
                    <li> < NavLink to = '/pages/services' > Services </NavLink>  </li >
                    <li > <NavLink to = '/pages/packages' > Packages </NavLink>  </li>
                    <li> 
                        < NavLink to = '/pages/login'className = 'Btn' > 
                            <button type = "button"className = "BtnRgister" > Register </button> 
                        </NavLink > 
                    </li>  
                </ul>
                )
            }
        </>
       
    )
}