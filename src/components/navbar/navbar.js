import React,{useState} from "react";
import { NavContact } from './componentNav/nav_contact/navcontact'
import { MenuNav } from './componentNav/menu/menunav'

export function Navbar() {
   
    return ( 
    <>
        <NavContact/>
        <MenuNav/>
    </>  
    )
}