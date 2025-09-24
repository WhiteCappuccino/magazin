import React from 'react'
import Logo from '../assets/logo-text.png'
import PhoneIc from '../assets/icon_phone.png'
import LogoD from '../assets/logo_dizign.png'
import SocialI from '../assets/social_icon.png'
const Footer = () =>{
    return(
    <div className="footer">
        <img src={Logo} alt="logo and text" className="logo" />
        <div className="footer-menu">          
            <a href="#">О компании</a>
            <a href="#">Контакты</a>
            <a href="#">Вакансии</a>
            <a href="#">Статьи</a>
            <a href="#">Политика обработки персональных данных</a>
        </div>
        <img src={SocialI} alt="sotseti" className='sotseti' />
        <div className="contacts">
        <div className="phone-info">
            <img src={PhoneIc} alt="phone icon"/>
            <p>8 800 777 33 33</p>
        </div>
        <div className="dezign">
            <p>Дизайн</p>
            <img src={LogoD} alt="logo vasion"/>
        </div>
        </div>
    </div>
    );
};
export default Footer