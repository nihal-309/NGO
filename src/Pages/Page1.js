import Header from "../components/Headerr"
import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Effort from "../images/effort.png";
import Cred from "../images/insignia.png";
import Emp from "../images/empower.png";
import Inn from "../images/innovation.png";
import About from "../components/About";
import Card1 from "../components/Card1"
import IMG1 from "../images/inno.png"
import IMG2 from "../images/women.jpg"
import IMG3 from "../images/virtual.jpg"
import IMG4 from "../images/environment.jpg"
import Event from "../components/Event"
import Blog from "../components/Blog"
import Footer from "../components/Footer";
import 'react-multi-carousel/lib/styles.css';

function Page1(){
    return(
        <div className="Page1">
            <Header />
            <Hero />
            <div className="Card-container">
                <Card heading="Perseverance" desc="Make progress towards the vision despite difficulties and numerous hurdles." routeee={Effort} />
                <Card heading="Credibility" desc="Fulfil responsibilities promptly and thoroughly with integrity." routeee={Cred} />
                <Card heading="Empower" desc=" Fostering a sense of self-efficacy and confidence in children through education." routeee={Emp} />
                <Card heading="Innovation" desc="Embracing cutting-edge educational approaches to adapt and respond to evolving needs" routeee={Inn} />
            </div>
            <div className="About-container"><About /></div>
            <div id="Proj" className="Projectt">
                <h1 className="headd">Our Projects</h1>
                <div id="Project" className="Project">
                    <Card1 className="but" route={IMG1}
                        head="Tech4Tomorrow Innovation Labs"
                        desc="Shiksha equipped underserved communities with Tech4Tomorrow labs, empowering students and teachers with technology access, coding skills for a proficient future."
                        linkk="/project"
                    />  
                    <Card1 className="but" route={IMG2}
                        head="EducateHer Girls Empowerment Project"
                        desc="Shiksha championed gender equality by providing scholarships, mentorship, and awareness programs, empowering girls to overcome socio-cultural barriers and pursue education."
                        linkk="/project"
                    />
                    <Card1 className="but" route={IMG3}
                        head="Virtual Classroom Program"
                        desc="Shiksha revolutionized education with a virtual classroom initiative, transcending physical boundaries and fostering global collaboration for enriched learning experiences."
                        linkk="/project"
                    />
                    <Card1 className="but" route={IMG4}
                        head="Bright Futures Environmental Education"
                        desc="Shiksha integrated environmental awareness into the curriculum, educating students in eco-friendly initiatives, instilling a sense of responsibility for a sustainable future."
                        linkk="/project"
                    />   
                </div> 
            </div>
            <Event />
            <Blog />
            <Footer />
        </div>
    )
}

export default Page1;