import React from "react";
import { About } from "./about";
import { Services } from "./services";
import {Packages} from "./packages"

export function Home() {
    return ( 
    <>
        <About/>
        <Services/>
        <Packages/>

    </>
    )
}