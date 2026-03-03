import React from 'react';
import Card from '../ui/card'
import './prompts.css';

const Prompts = () => {
    return(
        <section className="prompts">
            <img src={`${process.env.PUBLIC_URL}/images/third_screen/leaves_lt.png`} alt="декор листья" className="leaves_lt" />
            <img src={`${process.env.PUBLIC_URL}/images/third_screen/leaves_lb.png`} alt="декор листья" className="leaves_lb" />
            <img src={`${process.env.PUBLIC_URL}/images/third_screen/leaves_rt.png`} alt="декор листья" className="leaves_rt" />
            <img src={`${process.env.PUBLIC_URL}/images/third_screen/leaves_rb.png`} alt="декор листья" className="leaves_rb" />
        
                 <div className="card-photos">
                    <img src={`${process.env.PUBLIC_URL}/images/third_screen/prompt1.png`} alt="1_prompt prompt1-img" className=" prompt1-img" />
                    <img src={`${process.env.PUBLIC_URL}/images/third_screen/prompt2.png`} alt="2_prompt prompt2-img" className="card-prompt-img prompt2-img" />
                    <img src={`${process.env.PUBLIC_URL}/images/third_screen/prompt3.png`} alt="3_prompt prompt3-img" className="card-prompt-img prompt3-img" />
                </div>
                <div className="container">
                    <img src={`${process.env.PUBLIC_URL}/images/third_screen/h2_title.png`} alt="Готовые идеи промптов" className="h2_title" />
                    <div className="card-content">
                        <Card 
                            title1="Первое свидание"
                            subtitle1="Нужен лёгкий букет для девушки на первое свидание. 
                                    Чтобы было красиво, но без намёка на излишнюю серьёзность."
                            title2="Цвета"
                            subtitle2="Нежные пастельные"

                            title3="Повод"
                            subtitle3="Просто так/без повода"

                            title4="Для кого"
                            subtitle4="Для девушки"

                            title5="Возраст"
                            subtitle5="Молодой (20-35 лет)"

                            cardcolor="pink"
                        />
                        <Card 
                            title1="Юбилей"
                            subtitle1="Тёплый и элегантный букет для мамы на 55-летие. 
                                        Чтобы выразить благодарность и любовь."
                            title2="Цвета"
                            subtitle2="Яркие и сочные"

                            title3="Повод"
                            subtitle3="Юбилей"

                            title4="Для кого"
                            subtitle4="Для мамы"

                            title5="Возраст"
                            subtitle5="Взрослый (40-55 лет)"

                            cardcolor="orange"
                        />
                        <Card 
                            title1="Поднять настроение"
                            subtitle1="Необычный букет для подруги после тяжёлой недели. Чтобы зарядил энергией и вызвал улыбку."
                            title2="Цвета"
                            subtitle2="Синие/фиолетовые"

                            title3="Повод"
                            subtitle3="Просто так/без повода"

                            title4="Для кого"
                            subtitle4="Для подруги/друга"

                            title5="Возраст"
                            subtitle5="Подросток (13-19 лет)"

                            cardcolor="purple"
                        />
                    </div>
                </div>
         
        </section>
    );
};

export default Prompts