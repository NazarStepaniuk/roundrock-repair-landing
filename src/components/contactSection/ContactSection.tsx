import "./ContactSection.scss";


import emailSrc from "@/assets/icons/mail.svg";
import phoneSrc from "@/assets/icons/phone.svg";
import mapsSrc from "@/assets/icons/maps.svg";


const ContactSection = () =>{
    return(
        <section className="contact">
            <div className="container">
                <div className="contact__wrapper">
                    <h2 className="contact__title">Contact Us</h2>
                    <p className="contact__subtitle">Leave a request</p>
                    <div className="contact__content">
                        <form action="#" className="contact__form">
                            <input 
                                className="contact__input"
                                type="text"
                                name="name"
                                required
                                placeholder="Enter your name"
                                autoComplete="name"
                            />
                            <input 
                                className="contact__input"
                                type="tel"
                                name="phone" 
                                required
                                placeholder="Enter your phone number"
                                autoComplete="tel"
                            />
                            <input 
                                className="contact__input"
                                type="email"
                                name="email" 
                                required
                                placeholder="Enter your email"
                                autoComplete="email"
                            />
                            <button type="submit" className="contact__btn">Submit</button>
                        </form>
                        <div className="contact__info">
                            <a href="mailto:test@gmail.com" className="contact__info-item">
                                <img src={emailSrc} alt="email" />
                                <span>test@gmail.com</span>
                            </a>
                            <a href="tel:(303) 555-0105" className="contact__info-item">
                                <img src={phoneSrc} alt="phone" />
                                <span>(303) 555-0105</span>
                            </a>
                            <a href="https://maps.google.com/?q=2715+Ash+Dr,+San+Jose,+South+Dakota+83475" className="contact__info-item" target="_blank" rel="noopener noreferrer">
                                <img src={mapsSrc} alt="maps" />
                                <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ContactSection;