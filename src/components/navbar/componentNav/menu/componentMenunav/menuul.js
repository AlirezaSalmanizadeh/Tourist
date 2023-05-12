import React from "react";
import './menuul.css'
import { NavLink } from "react-router-dom";

export function MenuUl() {
    return (
        <ul className = "UlMenu" >
            <li > < NavLink to = '/pages/home' > Home </NavLink>   </li >
            <li> < NavLink to = '/pages/about' > About </NavLink> </li >
            <li> < NavLink to = '/pages/services' > Services </NavLink>  </li >
            <li > <NavLink to = '/pages/packages' > Packages </NavLink>  </li>
            <li > < NavLink to = '/pages/pages' > Pages </NavLink>  </li>
            <li > < NavLink to = '/pages/contact' > Contact </NavLink>  </li>
            <li> 
                < NavLink to = '/pages/login'className = 'Btn' > 
                    <button type = "button"className = "BtnRgister" > Register </button> 
                </NavLink > 
            </li>  
        </ul>
    )
}