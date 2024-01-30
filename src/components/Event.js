import React from "react";
import IMG1 from "../images/teaher.jpg";
import IMG2 from "../images/youth.jpeg";
import IMG3 from "../images/expo.jpeg";
import IMG4 from "../images/art.jpg";
import IMG5 from "../images/marathon.jpg";
import { Link } from "react-router-dom";

function Event(){
    return(
        <div id="Event" className="Event-cont">
            <h1 className="headd">Events</h1>
            <div className="first image">
                <div id="pehla" className="ek">
                    <img className="img1" src={IMG1} alt="" />
                    <div className="overlay d1">
                        <div className="desc1">
                        <Link className="link1" to="/event1"><h1>Teacher Appreciation Week</h1></Link>
                            <p>Honoring the Guiding Lights, Celebrating the Heart of Education</p>
                        </div>
                    </div>
                </div>
                <div className="do">
                    <img className="img2" src={IMG2} alt="" />
                    <div className="overlay d2">
                        <div className="desc1">
                        <Link className="link1" to="/event2"><h1>Global Youth Summit</h1></Link>
                            <p>Unleashing Potential, Inspiring Change Empowering Tomorrow's Leaders Today.</p>
                        </div>
                    </div>
                </div>
                <div className="tin">
                    <img className="img3" src={IMG3} alt="" />
                    <div className="overlay d3">
                        <div className="desc1">
                            <Link className="link1" to="/event3">
                                <h1>Tech Expo for Tomorrow</h1>
                            </Link>
                            <p>Igniting Minds, Powering Progress Where Education and Innovation Unite.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec image">
                <div className="char">
                    <img className="img4" src={IMG4} alt="" />
                    <div className="overlay d4">
                        <div className="desc1">
                        <Link className="link1" to="/event4"><h1>Art for Education Gala</h1></Link>
                            <p>Brushstrokes of Impact, Elevating Education through Creative Expression</p>
                        </div>
                    </div>
                </div>
                <div className="pach">
                    <img className="img5" src={IMG5} alt="" />
                    <div className="overlay d4">
                        <div className="desc1">
                        <Link className="link1" to="/event5"><h1>Run for Education Marathon</h1></Link>
                            <p>Every Step Counts, Every Stride Empowers—Fueling Dreams through Education</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Event;