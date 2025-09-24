import React from "react";
import FotoNews1 from '../assets/news1.png'
import FotoNews2 from '../assets/news2.png'
import FotoNews3 from '../assets/news3.png'

const news =[
    {image: FotoNews1, date: '05.03.2021', title: 'Режим использования масок и перчаток на территории магазинов',text:'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.' ,  link: '#',},
    {image: FotoNews2, date: '05.03.2021', title: 'Весеннее настроение для каждой',text:'8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.' ,  link: '#',},
    {image: FotoNews3, date: '05.03.2021', title: 'ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!',text:'Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!' ,  link: '#',}
];

const News =() =>{
return(
    <div className="newses">
        <div className="news-card">
            {news.map((n)=>(
                <>
                <div className="news">
                    <img src={n.image} alt="news image"/>
                    <div className="news-text">
                        <p className="date">{n.date}</p>
                        <h3>{n.title}</h3>
                        <p>{n.text}</p>
                        <button className="btn-news" onClick={()=> window.location.href = n.link }>Подробнее</button>
                    </div>
                </div>
                </>
            ))}
        </div>
    </div>
);
};
export default News