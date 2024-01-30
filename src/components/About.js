import React from "react";
import IMG1 from "../images/body1.webp";
import IMG2 from "../images/body2.jpeg";
import IMG3 from "../images/body3.jpeg";
import IMG4 from "../images/vision.png";
import IMG5 from "../images/target.png";

function About(){
    return(
        <div id="About-container" className="About-container">
            <div className="About">
                <img className="image1" src={IMG1} alt="" />
                <img className="image2" src={IMG2} alt="" />
                <img className="image3" src={IMG3} alt="" /> 
            </div>
            <div className="About-desc">
                <h4 className="Head1">About Shiksha</h4>
                <h2>Education Unleashed, Futures Transformed</h2>
                <h6>
                In 2005, a dedicated group of individuals founded the Global Education Initiative with a mission to provide education for all, focusing on underserved children. Facing early challenges, Shiksha persisted, establishing its first learning center in 2008.
                </h6>
                <br />
                <div className="Vision">
                    <h2>Vision</h2>
                    <div className="Vision-desc">
                        <img className="image4" src={IMG4} alt="" />
                        <h6>Shiksha envisions a world where every child, regardless of circumstance, has access to quality education. Our vision is to break barriers, ignite potential, and cultivate a global community of empowered learners</h6>
                     </div>
                </div>  
                <br />
                <div className="Mission">
                <h2>Mission</h2>
                    <div className="Mission-desc">
                        <img className="image5" src={IMG5} alt="" />
                        <h6>Shiksha's mission is to break down educational barriers, ensuring every child, regardless of background, has access to transformative learning experiences. We strive to pioneer innovative teaching methods and foster a global community committed to lifelong learning</h6>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default About;