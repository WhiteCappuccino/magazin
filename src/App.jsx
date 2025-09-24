import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Products from './assets/products.png'
import { IoIosArrowForward } from "react-icons/io";
import './App.css'
import CardProduct from './components/cardProduct';
import OffersCard from './components/Offers';
import OurStores from './components/OurStores';
import News from './components/News'
import Footer from './components/Footer';
function App() {

  return (
    <>
     <Header/>
     <div className="banner">
        <img src={Products} alt="products" />
        <h1>Доставка бесплатно от 1000 ₽</h1>
     </div>
     <div className="main">
    
     <div className="sale">
     <div className="sale-head">
        <h1>Акции</h1>
        <a href="#">Все акции <IoIosArrowForward /> </a>
      </div>
      <CardProduct showSale/>
     </div>
     <div className="new-product">
     <div className="sale-head">
        <h1>Новинки</h1>
        <a href="#">Все новинки<IoIosArrowForward /> </a>
        </div>
      <CardProduct/>
     </div>
     <div className="last-product">
     <div className="sale-head">
        <h1>Покупали раньше</h1>
        <a href="#">Все покупки<IoIosArrowForward /> </a>
        </div>
      <CardProduct/>
     </div>
     <div className="offers">
        <div className="sale-head">
          <h1>Специальные предложения</h1>
        </div>
        <div className="card-offers">
          <OffersCard/>
        </div>
     </div>
     <div className="our-stores">
        <div className="sale-head">
          <h1>Наши магазины</h1>
        </div>
        <OurStores/>
     </div>
     <div className="news-section">
     <div className="sale-head">
          <h1>Новости</h1>
        <a href="#">Все статьи<IoIosArrowForward /> </a>
        </div>
      <News/>
     </div>
     </div>  
     <div className="footer-section">
      <Footer/>
     </div>
    </>
  )
}

export default App
