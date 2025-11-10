import "./ServiceCard.scss";

interface ServiceCardProps {
    image: string;
    alt: string;
    title: string;
    text: string;
}

const ServiceCard = ({image, alt, title, text}: ServiceCardProps) =>{
    return(
        <div className="services-card">
            <div className="services-card__image">
                <img src={image} alt={alt} />
            </div>
            <h3 className="services-card__title">{title}</h3>
            <p className="services-card__text">{text}</p>
        </div>
        
    )
}


export default ServiceCard;