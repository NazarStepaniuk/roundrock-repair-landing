import "./MainSection.scss";
import wheel from "@/assets/images/wheel.webp";

import Header from "./header/Header";

const MainSection = () =>{
    return (
        <section className="main">
            <div className="container">
                <Header/>
                <p className="main__subtitle">Ride Better, Live Happier</p>
                <p className="main__title">What is Round Rock</p>
                <p className="main__descr">Round Rock is your local bike repair shop dedicated to keeping you rolling safely and smoothly. From quick tune-ups  to full restorations — we handle it all with care and precision.</p>
                <a href="#" className="btn">Help Me</a>
            </div>
            <div className="main__circle"></div>
            <img src={wheel} alt="wheel" className="main__wheel" />
        </section>
    )
}

export default MainSection;