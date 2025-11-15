import "./ServicesSection.scss";

import brakeAdjustment from "@/assets/images/services/brake_adjustment.png";
import fullInspection from "@/assets/images/services/full_inspection.png";
import gearTuning from "@/assets/images/services/gear_tuning.png";
import wheelTuning from "@/assets/images/services/wheel_tuning.png";


import ServiceCard from "./serviceCard/ServiceCard";

const Services = () =>{
    
    const services = [
        {
            image: fullInspection,
            alt: "full inspection",
            title: "Full bike inspection",
            text: "We’ll check every part of your bike — brakes, gears, tires — to make sure it’s ready for the road."
        },
        {
            image: wheelTuning,
            alt: "wheel tuning",
            title: "Wheel alignment and tire service",
            text: "Balancing, truing, and replacing worn tires to give you the best performance."
        },
        {
            image: brakeAdjustment,
            alt: "brake adjustment",
            title: "Brake and gear adjustment",
            text: "Smooth shifting and confident stopping. Professional calibration for your drivetrain and brakes."
        },
        {
            image: gearTuning,
            alt: "gear tuning",
            title: "Custom Upgrades",
            text: "Need a better saddle, pedals, or lights? We’ll help you choose and install what fits your style."
        }
    ];


    return (
        <section className="services">
            <div className="container">
                <div className="services__header">
                    <h2 className="services__title">Services for you</h2>
                    <p className="services__subtitle">Repair and maintenance</p>
                </div>
                <div className="services__list">
                    {
                        services.map((service, id) => <ServiceCard image={service.image} alt={service.alt} 
                                                             title={service.title} text={service.text} key={id}/>)
                    }
                </div>
                <div className="services__wrapper"><a href="#" className="btn services__btn">Get discount 10%</a></div>
            </div>
        </section>
    )
}


export default Services;