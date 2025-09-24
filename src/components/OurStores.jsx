import React, {useState} from "react"; 
// useState - храним выбранный населеный пункт, если бы данные были из бд бралось бы useEffect

const cities =[
    {key: 'shelyaur', label:'п.Щельяюр', lat: 65.325, lon: 54.907},
    {key: 'vertep', label:'д.Вертер', lat: 65.145, lon: 55.907},
    { key: 'krasnobor', label:'с.Краснобор',lat:65.030, lon: 54.670},
    {key: 'diyur', label: 'д.Дюир', lat: 65.210, lon: 54.820},
];
const OurStores = () =>{
    const [selected,setSelected]=useState(cities[0]);
    //selected - начальная точка в данном случае первый элемент массива
    //setSelected - переключение на следущий элемент при клике/Функция для обновления
    //useState(cities[0]) вызывает хук со стартовым значением cities[0] возвращает два элемента текущий и создающийся при клике меняя массив
    const mapSrc = `https://maps.google.com/maps?q=${selected.lat},${selected.lon}&z=13&output=embed`;
    //URL для карты в данном случае гугл. а также в ссылку вшиты координаты берущиеся из массива
    return(
        <div className="location">
            <div className="button-location">
                {cities.map((c) =>(
                    <button
                    key={c.key} //"id" для обновления DOM
                    className='city-location' 
                    onClick={() => setSelected(c)} //функция при клике вызывающая следущий элемень
                    aria-pressed={selected.key===c.key} //показывает что кнопка активна
                    >
                        {c.label}
                    </button>
                ))}
            </div>
            <div className="map-container">
                <iframe 
                src={mapSrc} //передает константу с координатами и гугл картой выше
                width="100%"
                height="354px"
                loading="lazy"//загрузка меняющихся карт не осуществляется до нажатия кнопки которой соответствует карта
                referrerPolicy="no-referrer-when-downgrade"//правило отправление данных при обеспечении безопастности в целом не обязательная штука проверка чтобы ссылке можно было доверять
                title={`map-${selected.label}`} //текстовый заголовок для карты, почему-то не отображается
                ></iframe>
            </div>
        </div>
    );
};
export default OurStores