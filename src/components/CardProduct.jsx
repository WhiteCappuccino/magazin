import React from "react";
import Product1 from '../assets/product1.png';
import Product2 from '../assets/product2.png';
import Product3 from '../assets/product3.png';
import Product4 from '../assets/product4.png';
import { CiHeart } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const CardProduct = ({ showSale = false }) =>{   
    const productcard = [
        {id:1, image: Product1, like: 0, sale: '50', cardPrice: '44,50', usualPrice: '50,50', name:'Г/Ц Блинчики с мясом вес, Россия', rating:2,},
        {id:2, image: Product2, like: 0, sale: '50', cardPrice: '44,50', usualPrice: '50,50', name:'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...', rating:3,},
        {id:3, image: Product3, like: 0, sale: '50', cardPrice: '44,50', usualPrice: '50,50', name:'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...', rating:5,},
        {id:4, image: Product4, like: 0, sale: '50', cardPrice: '44,50', usualPrice: '50,50', name:'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...', rating:4,}
    ];
    return(
        <div className="card"> 
       
            
            <div className="productcards">
            { productcard.map(p=>(
                <div className="productcard" key={p.id}>
                <div className="image-card" >
                    <div className="like">
                    <CiHeart className="like-icon"/> 
                    </div>
                    <img src={p.image} alt={p.name} className="top-image"/>
                    {showSale && p.sale && (
                    <div className="sale">
                        <p>-{p.sale}%</p>
                    </div>
                    )}
                </div>
                    <div className="card-text">
                      <div className="price-full">
                        <div className="price">
                                    <h2>{p.cardPrice}₽</h2>
                                    <h3>{p.usualPrice}₽</h3>
                            </div>
                        </div>
                            <div className="price-text">
                                <p>С картой</p>
                                <p>Обычная</p>
                            </div>
                      
                        <h4>{p.name}</h4>
                        <div className="star">
                        {'★'.repeat(Math.round(p.rating))}{'☆'.repeat(5 - Math.round(p.rating))}
                        </div>
                        <button className="card-button">В корзину</button>
                    </div>
               
                </div> 
            ))}
            </div>
        </div>
    );
};

export default CardProduct