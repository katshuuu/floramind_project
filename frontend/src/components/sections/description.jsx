import React from 'react'
import './description.css'
const Description =()=>{
    return(
        <section className="ddescription">
            <img src={`${process.env.PUBLIC_URL}/images/second_screen/leaves_left.png`} alt="декор листья" className="dleaves_left" />
            <img src={`${process.env.PUBLIC_URL}/images/second_screen/leaves_right.png`} alt="декор листья" className="dleaves_right" />
            <div className="dtext-block">
                <h3 className="dtitle">FloraMind</h3>
                <p className="dsub-title">
                    — это цветочная гармония, созданная искусственным интеллектом. Наш ИИ-флорист 
                    FloraAI превращает ваши эмоции, повод и пожелания в единственный в своём роде букет 
                    — такой же уникальный, как чувства, которые вы хотите выразить.
                </p>
            </div>
        </section>
    );
};

export default Description