import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from './../../pages/home'
import { About } from './../../pages/about'
import { Services } from './../../pages/services'
import { Packages } from './../../pages/packages'
import { Login } from './../../pages/login'



export function Navroute() {
    return ( 
        <>
        
        <Routes>
            <Route path = "/"element = { < Home /> } > </Route>  
            <Route path = "/pages/about"element = { < About /> } > </Route>  
            <Route path = "/pages/services"element = { < Services /> } > </Route>  
            <Route path = "/pages/packages"element = { < Packages /> } > </Route>  
            <Route path = "/pages/login"element = { < Login /> } > </Route>  
          
        </Routes>

        </>
    )
}