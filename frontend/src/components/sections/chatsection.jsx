import React from 'react'
import './chatsection.css'
import Container from '../ui/container';
import Button from '../ui/button-mainscreen';

const Chatsection=()=>{
    return(
        <section className="chatsection">
            <Container>
                <img src={`${process.env.PUBLIC_URL}/images/fifth_screen/leaves_1.png`} alt="" className="leaves_1" />
                <img src={`${process.env.PUBLIC_URL}/images/fifth_screen/leaves_2.png`} alt="" className="leaves_2" />
                <img src={`${process.env.PUBLIC_URL}/images/fifth_screen/leaves_3.png`} alt="" className="leaves_3" />
                <img src={`${process.env.PUBLIC_URL}/images/fifth_screen/leaves_4.png`} alt="" className="leaves_4" />
                <img src={`${process.env.PUBLIC_URL}/images/fifth_screen/leaves_5.png`} alt="" className="leaves_5" />
                <div className="chat-wrap">
                    <div className="logo-container">
                        <img src={`${process.env.PUBLIC_URL}/images/fifth_screen/logo.png`} alt="logo" className="chat-logo" />
                        <div className="ai-circle">
                            <p className="logo-ai">Ai</p>
                        </div>
                    </div>
                    <div className="chat-text-wrap">
                        <h3 className="chat-title">FloraAI ждёт вашу историю</h3>
                        <p className="chat-subtitle"> Ответьте на 5 коротких вопросов, и наш искусственный 
                                                    интеллект создаст для вас уникальную цветочную композицию.</p>
                        <Button
                        text="Создать букет"
                        className="btn-mainscreen3"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Chatsection