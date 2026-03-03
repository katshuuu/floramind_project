import React from "react"
import Container from '../ui/container'
import Button from '../ui/button-mainscreen'
import './mainscreen1.css'


const Mainscreen = () =>{
    return (
        <section className="main-mainscreen">
            <img src={`${process.env.PUBLIC_URL}/images/first_screen/leaves_lt.png`} alt="декор_листья_left-top" className="main-leaves_lt" />
            <img src={`${process.env.PUBLIC_URL}/images/first_screen/leaves_lb.png`} alt="декор_листья_left-bottom" className="main-leaves_lb" />
            <img src={`${process.env.PUBLIC_URL}/images/first_screen/leaves_rt.png`} alt="декор_листья_right-top" className="main-leaves_rt" />
            <img src={`${process.env.PUBLIC_URL}/images/first_screen/leaves_rb.png`} alt="декор_листья_right-bottom" className="main-leaves_rb" />
           <Container>
            <div className="main-main-content">
                <div className="main-text-block">
                    <img src={`${process.env.PUBLIC_URL}/images/first_screen/h1_title_pink.png`} alt="Flora Mind" className="main-title-img"></img>
                    <div className="main-mini-text-block">
                        <h3 className="main-sub-title">Персонализированные цветочные композиции,
                        которые идеально подходят для вашего случая, настроения и получателя
                        </h3>
                        <Button text="Создать букет" className="main-btn-mainscreen" to="http://localhost:3001" type="button"></Button>
                    </div>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/first_screen/roses.png`} alt="букет 14 февраля" className="main-roses-mainscreen" />
            </div>
           </Container>
        </section>
    );
};

export default Mainscreen
