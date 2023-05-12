import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from './../../pages/home'
import { About } from './../../pages/about'
import { Services } from './../../pages/services'
import { Pages } from './../../pages/pages'
import { Packages } from './../../pages/packages'
import { Login } from './../../pages/login'
import { Contact } from './../../pages/contact'


export function Navroute() {
    return ( 
        <>
        
        <Routes>
            <Route path = "/pages/home"element = { < Home /> } > </Route>  
            <Route path = "/pages/about"element = { < About /> } > </Route>  
            <Route path = "/pages/services"element = { < Services /> } > </Route>  
            <Route path = "/pages/pages"element = { < Pages /> } > </Route>  
            <Route path = "/pages/packages"element = { < Packages /> } > </Route>  
            <Route path = "/pages/login"element = { < Login /> } > </Route>  
            <Route path = "/pages/contact"element = { < Contact /> } > </Route>  
        </Routes>

        </>
    )
}