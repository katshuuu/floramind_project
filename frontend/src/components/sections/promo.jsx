import React from 'react'
import './promo.css';

const Promo=()=>{
    return(
        <section className="promo">
            <div className="promo-content">
                <div className="promo-code">
                    <img src={`${process.env.PUBLIC_URL}/images/six_screen/leaves_left.png`} alt="" className="promo-leaves-l" />
                    <img src={`${process.env.PUBLIC_URL}/images/six_screen/leaves_right.png`} alt="" className="promo-leaves-r" />
                    <div className="inner-promo-code">
                        <img src={`${process.env.PUBLIC_URL}/images/six_screen/promo20.png`} alt="" className="promo20" />
                        <p className="text-promo-code">
                            получай скидку 20% на первую генерацию с FloraMind <br></br>по промокоду: <b>PROMO20</b>
                        </p>
                    </div>
                </div>
                <div className="right-container">
                    <div className="promo-links">
                        <div className="promo-column">
                            <p className="column-word">О нас</p>
                            <p className="column-word">Галерея</p>
                            <p className="column-word">Отзывы</p>
                            <p className="column-word">FloraAi</p>
                        </div>
                        <div className="promo-column">
                            <p className="column-word">FAQ</p>
                            <p className="column-word">Доставка</p>
                            <p className="column-word">Контакты</p>
                            <p className="column-word">Помощь</p>
                        </div>
                    </div>
                     <div className="icons">
                        <img src={`${process.env.PUBLIC_URL}/images/six_screen/vk.png`} alt="" className="vk" />
                        <img src={`${process.env.PUBLIC_URL}/images/six_screen/тг.png`} alt="" className="tg" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Promo