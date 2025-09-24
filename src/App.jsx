import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Products from './assets/products.png'
import { IoIosArrowForward } from "react-icons/io";
import './App.css'
import CardProduct from './components/CardProduct';
import Cart from './components/Cart';
import OffersCard from './components/Offers';
import OurStores from './components/OurStores';
import News from './components/News'
import Footer from './components/Footer';
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: product.id, name: product.name, price: product.cardPrice, image: product.image, qty: 1 }];
    });
  };

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);
  const handleChangeQty = (id, delta) => {
    setCartItems(prev => prev
      .map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );
  };
  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
    const removed = cartItems.find(i => i.id === id)?.qty || 0;
    if (removed) setCartCount(prev => Math.max(0, prev - removed));
  };
  return (
    <>
     <Header cartCount={cartCount} onOpenCart={handleOpenCart} onGoHome={handleCloseCart}/>
     {isCartOpen ? (
      <Cart items={cartItems} onClose={handleCloseCart} onInc={(id)=>handleChangeQty(id,1)} onDec={(id)=>handleChangeQty(id,-1)} onRemove={handleRemove} />
     ) : (
     <>
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
      <CardProduct showSale onAddToCart={handleAddToCart}/>
     </div>
     <div className="new-product">
     <div className="sale-head">
        <h1>Новинки</h1>
        <a href="#">Все новинки<IoIosArrowForward /> </a>
        </div>
      <CardProduct onAddToCart={handleAddToCart}/>
     </div>
     <div className="last-product">
     <div className="sale-head">
        <h1>Покупали раньше</h1>
        <a href="#">Все покупки<IoIosArrowForward /> </a>
        </div>
      <CardProduct onAddToCart={handleAddToCart}/>
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
     )}
    </>
  )
}

export default App
