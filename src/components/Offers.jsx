import React from "react";
import Offer1 from '../assets/cardLoyal.png'
import Offer2 from '../assets/basket.png'
const OffersCard = () =>{
    return(
        <>
        <div className="card-offer">
            <div className="offer-text">
                <h2>Оформите карточку <br /> "Северяночка"</h2>
                <p>И получайте бонусы при покупке <br />в магазинах и на сайте</p>
            </div>
            <img src={Offer1} alt="card offer" className="offer-img" />
        </div>
        <div className="card-offer2">
            <div className="offer-text">
                <h2>Покупайте <br />акционные товары</h2>
                <p>И получайте вдвое больше <br />бонусов</p>
            </div>
            <img src={Offer2} alt="sale offer" className="offer-img" />
        </div>
        </>
    );
};

export default OffersCard