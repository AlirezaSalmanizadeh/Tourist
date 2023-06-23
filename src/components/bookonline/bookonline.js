import React,{useState} from "react";
import "./bookonline.css"


export function BookOnline(){ 
    const [labl ,setlabl]=useState("");
    const [labl1 ,setlabl1]=useState("");
    const [labl2 ,setlabl2]=useState("");
    const handel=(e)=>{
        setlabl(e.target.value)
    }
    const handel1=(e)=>{
        setlabl1(e.target.value)
    }
    const handel2=(e)=>{
        setlabl2(e.target.value)
    }
    return(
        <div className="BgOnline">
                    <div className="TextBook">
                        <h6>Booking</h6>
                        <h1>Online Booking</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <a className="BtnBook">Read More</a>
                    </div>
                    <div className="FormBook">
                        <h1>Book A Tour</h1>
                        <form action="#" method="post">
                            <div className="Name">
                                <input type="text" id="name" placeholder="Your Name" autoComplete="off"  required onChange={(e)=>handel(e)}/>
                                <label className={labl.length>0 ?"BaseColor" :""} for="name">Your Name</label>
                            </div>
                            <div className="EmailBook">
                                <input type="email" id="email" placeholder="Your Email" autoComplete="off" required onChange={(e)=>handel1(e)}/>
                                <label className={labl1.length>0 ?"BaseColor" :""} for="email">Your Email</label>
                            </div>
                            <div className="Data">
                                <input type="datetime-local" id="Data" required />
                                <label for="Data">Data & Time</label>
                            </div>
                            <div className="Slection">
                                <select className="Select" id="Select1" required>
                                    <option disabled selected value>select one </option>
                                    <option value="1">Destination1</option>
                                    <option value="2">Destination2</option>
                                    <option value="3">Destination3</option>
                                    <option value="4">Destination4</option>
                                </select>
                                <label for="Select1">Destination</label>
                            </div>
                            <div className="Textarea">
                                <textarea id="Message" placeholder="Special Request" autoComplete="off" required onChange={(e)=>handel2(e)}></textarea>
                                <label className={labl2.length>0 ?"BaseColor" :""} for="Message">Special Request</label>
                            </div>
                            <div className="Btn">
                                <button className="BtnBook2">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
    )
}