import React from 'react'
import Logo from '../assets/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineReceiptLong, MdShoppingCart } from "react-icons/md";
import Avatar from "../assets/avatar.png"
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className='container'>
        <div className="logo">
            <img src={Logo} alt="логотип" />
            <p className="logo">СЕВЕРЯНОЧКА</p>
        </div>
        <a href="#" className="catalog">
        <RxHamburgerMenu />
        <p>Каталог</p>
        </a>
    
        <form className="search">
        <input type="text" 
        placeholder='Найти товар'
        className='search-input'
        />
        <IoIosSearch size={20}/>
        </form>
       <div className="menu">
       <a href="#" className='private'>
        <MdFavoriteBorder size={28}/>
        <p>Избранное</p>
        </a>
        <a href="#">
        <MdOutlineReceiptLong size={28}/>
        <p>Заказы</p>
        </a>
        <a href="#">
            <MdShoppingCart size={28}/>
            <p>Корзина</p>
        </a>
       </div>
        <a href="#" className="profile">
            <div className="user-profile">
                <div className="profile-info">
                <img src={Avatar} alt="user_avatar" />
                <p>Алексей</p>
                </div>
                <IoIosArrowDown />
            </div>
        </a>
    </div>
  );
};

export default Header;