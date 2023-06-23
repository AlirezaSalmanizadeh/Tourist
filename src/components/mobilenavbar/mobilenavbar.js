import React ,{useState,useRef,useEffect} from "react";
import { NavLink } from "react-router-dom";
import image1 from "./../../asset/image/hamburger-md-svgrepo-com.svg"
import image2 from "./../../asset/image/close-mini-1522-svgrepo-com.svg"
import "./mobilenavbar.css"


export function Mobilenavbar(){

    const [navhamber, setnavhamber] = useState(false);
    const menuhumber = () => {
        setnavhamber(!navhamber);
    }


    const ref = useRef()
  
    useEffect(() => {
      const checkClickOutside = e => {
      
        if (ref.current && !ref.current.contains(e.target)) {
            setnavhamber(false)
        }
      }
  
      document.addEventListener("mousedown", checkClickOutside)
  
      return () => {
       
        document.removeEventListener("mousedown", checkClickOutside)
      }
    }, [])

    const closemeno=()=>{
        setnavhamber(false)
    }


    return(
        < div ref={ref} >
            <img src = { image1 }alt = "Not Load" onClick = { menuhumber } className = "humber" />
            <ul className = { navhamber ? 'mobileon' : 'mobileoff' }>
                <li><img src={image2} alt="Not Load" onClick={()=>closemeno()} /></li>
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
           

        </div>
    )
}