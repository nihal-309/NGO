import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IMG1 from "../images/art.jpg"
import IMG2 from "../images/incl.jpg"
import IMG3 from "../images/volunteer.jpg"
import IMG4 from "../images/bridge.jpg"
import IMG5 from "../images/chil.jpg"
import IMG6 from "../images/steps.jpg"
import { Link } from "react-router-dom";
 
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 300 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const Slider = () => {
    return (
        <div id="Blog" className="Slider">
            <h1>Trending Posts</h1>
            <Carousel
            containerClass="cards"
            arrows={true}
            // centerMode={true}
            focusOnSelect={true}
            renderButtonGroupOutside={true}
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={true}
            dotListClass="custom-dot-list-style"
            >
            <div class="card" >
                <div className="image-wrapper">
                    <img src={IMG2} class="card-img-top" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Inclusive Education Unveiled: Stories of Triumph</h5>
                    <p class="card-text">Delving into the transformative power of inclusive education initiatives, breaking down barriers and celebrating the triumphs of diversity in the classroom</p>
                    <Link className="button" to="/post2">Read More</Link>
                </div>
            </div>
            <div class="card" >
                <div className="image-wrapper">
                    <img src={IMG1} class="card-img-top" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Navigating Educational Challenges: Insights from the Field</h5>
                    <p class="card-text">"Embark on an immersive journey into the heart of educational challenges as Shiksha navigates complex landscapes, offering raw and insightful reflections from the frontlines.</p>
                    <Link className="button" to="/post1">Read  More</Link>
                </div>
            </div>
            <div class="card" >
                <div className="image-wrapper">
                    <img src={IMG3} class="card-img-top" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">The Heart of Volunteerism: Behind the Scenes with Shiksha</h5>
                    <p class="card-text">Embark on a captivating exploration behind the scenes, where the spirit of volunteerism intertwines with the core of Shiksha’s mission. Through the lens of personal stories and shared experiences, witness the initiatives</p>
                    <Link className="button" to="/post3">Read More</Link>
                </div>
            </div>
            <div class="card" >
                <div className="image-wrapper">
                    <img src={IMG4} class="card-img-top" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">"Digital Divide: Bridging Gaps in a Connected World</h5>
                    <p class="card-text">Join us in an in-depth exploration of how Shiksha is shaping the educational landscape, focusing on cultivating academic excellence also the critical thinking, adaptability,</p>
                    <Link className="button" to="/post4">Read More</Link>
                </div>
            </div>
            <div class="card" >
                <div className="image-wrapper">
                    <img src={IMG6} class="card-img-top" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Small Steps, Big Changes: Micro-Projects Making a Macro Impact</h5>
                    <p class="card-text">"Dive into the heartwarming narratives of Shiksha's micro-projects, where seemingly small initiatives are weaving a tapestry of lasting change, creating ripples of impact worldwide</p>
                    <Link className="button" to="/post6">Read More</Link>
                </div>
            </div>
            <div class="card" >
                <div className="image-wrapper">
                    <img src={IMG5} class="card-img-top" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Future-Ready Skills: Nurturing the Changemakers</h5>
                    <p class="card-text">Join us in an in-depth exploration of how Shiksha is shaping the educational landscape, focusing on cultivating adaptability, and resilience that empower students to become the visionary leaders</p>
                    <Link className="button" to="/post5">Read More</Link>
                </div>
            </div>
            </Carousel>
        </div>
    )}

    export default Slider;