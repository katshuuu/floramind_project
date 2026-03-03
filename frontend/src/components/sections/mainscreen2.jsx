import React from "react"
import Container from '../ui/container'
import Button from '../ui/button-mainscreen'
import './mainscreen2.css'


const Mainscreen2 = () =>{
    return (
        <section className="mainscreen">
            <img src={`${process.env.PUBLIC_URL}/images/first_screen/leaves_lt.png`} alt="декор_листья_left-top" className="leaves_lt" />
            <img src={`${process.env.PUBLIC_URL}/images/first_screen/leaves_lb.png`} alt="декор_листья_left-bottom" className="leaves_lb" />
            <img src={`${process.env.PUBLIC_URL}/images/first_screen/leaves_rt.png`} alt="декор_листья_right-top" className="leaves_rt" />
            <img src={`${process.env.PUBLIC_URL}/images/first_screen/leaves_rb.png`} alt="декор_листья_right-bottom" className="leaves_rb" />
           <Container>
            <div className="main-content">
                <div className="text-block">
                    <img src={`${process.env.PUBLIC_URL}/images/first_screen/h1_title.png`} alt="Flora Mind" className="orange-title-img"></img>
                    <div className="mini-text-block">
                        <h3 className="sub-title">Персонализированные цветочные композиции,
                        которые идеально подходят для вашего случая, настроения и получателя
                        </h3>
                        <Button text="Создать букет" className="btn-mainscreen2" to="/chat" type="button"></Button>
                    </div>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/first_screen/oranges.png`} alt="букет 14 февраля" className="roses-mainscreen" />
            </div>
           </Container>
        </section>
    );
};

export default Mainscreen2
