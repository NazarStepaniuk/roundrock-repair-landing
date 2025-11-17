import "./AboutSection.scss";

import workshopSrc from "@/assets/images/workshop.jpg";

const AboutSection = () =>{
    return(
        <section className="about">
            <div className="container">
                <h2 className="about__title">About Us</h2>
                <p className="about__subtitle">We are a big family</p>
                <div className="about__wrapper">
                    <img src={workshopSrc} alt="workshop" />
                    <div className="about__info">
                        <p className="about__name">Round Rock</p>
                        <div className="about__divider"></div>
                        <p className="about__text">Started as a small garage project, Round Rock Bicycle Repair has become a trusted workshop serving cyclists across the city. We combine technical skill with a deep passion for bikes — from everyday commuters to high-end racing models. Our mission is simple: to keep every bike in perfect shape and every rider safe on the road. From tune-ups and brake adjustments to full restorations, we treat each repair with care and precision. We believe every bike deserves a second life — and every rider deserves a smooth, effortless ride.</p>
                        <a href="#contact" className="btn">Get discount 10%</a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutSection;