import logo from "../../assets/icons/logo.svg";
import title from "../../assets/images/round_rock_header.svg";
import subtitle from "../../assets/images/bicycle_repair_subheader.svg";

import "./Header.scss";


const Header = () =>{
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <div className="header__wrapper">
                <img src={title} alt="title" className="header__title" />
                <img src={subtitle} alt="subtitle" className="header__subtitle" />
            </div>
        </div>
    )
}

export default Header;