import React, {useState} from 'react'
import './comments.css'
import Container from '../ui/container';
import Comment from '../ui/comment'

const Comments = () =>{
     const slides = [
        {id:1,
        image:"/images/fourth_screen/favicon.png",
        name:"Сергей программист",
        subinfo:"4 января, 18:36",
        rating:5,
        comment:"На вопрос «кому» я честно написал «себе, потому что тяжелый день Указал зеленый цвет, без сладкого, возраст 35.Бот прислал вариант с эвкалиптом,амарантусом и суккулентами. Привезли — стоял на столе и «успокаивал». Отличная терапия."
        },
        {id:2,
        image:"/images/fourth_screen/favicon.png",
        name:"Михаил, 27лет",
        subinfo:"14 февраля, 22:54",
        rating:5,
        comment:"Запрос был такой: для девушки на первое свидание, 25 лет, нежно-розовый, с милой запиской и макарунами. Сгенерировал воздушный букет из пионов и ранункулюсов. Она была в восторге — сказала, что это самый продуманный жест. Свидание прошло идеально!"
            },
        {id:3,
        image:"/images/fourth_screen/favicon.png",
        name:"Мария, внучка",
        subinfo:"9 марта 2025, 15:15",
        rating:5,
        comment:"Просто ответила на 5 вопросов в чате (для бабушки, 80 лет, на 8 марта, сиреневый, с запиской). Получила трогательный букет с гиацинтами и альстромериями. Бабушка не верила, что «компьютер» так умеет."}
    ];
    const dotArray=()=>{
        const dots =[];
        for (let i=0;i<slides.length;i++){
            dots.push(<span key={i} className={`dot ${currentIndex===i ? "active":''} }`}></span>);
        }
        return dots;
    }
    const [currentIndex, setCurrentIndex]=useState(0);
    const nextSlide=()=>{
        if (currentIndex<(slides.length-1)){
            setCurrentIndex((currentIndex)=>(currentIndex+1));
        }
    };
    const prevSlide=()=>{
        if (currentIndex>0){
            setCurrentIndex((currentIndex)=>(currentIndex-1));
        }
    }
    return(
        <section className="comments">
            <img src={`${process.env.PUBLIC_URL}/images/fourth_screen/leaves_lb.png`} alt="" className="com-leaves-lb" />
            <img src={`${process.env.PUBLIC_URL}/images/fourth_screen/leaves_rb.png`} alt="" className="com-leaves-rb" />
            <img src={`${process.env.PUBLIC_URL}/images/fourth_screen/flowers_com.png`} alt="" className="com-background-flows" />
            <Container>
                <div className="line-animation">
                    <h3 className="live-animation-text">
                        FloraMind · FloraAi · FloraMind · FloraAi · FloraMind · FloraAi · FloraMind · FloraAi · FloraMind · FloraAi ·  FloraMind · FloraAi · FloraMind · FloraAi · FloraMind · FloraAi · FloraMind · FloraAi · FloraMind · FloraAi · 
                    </h3>
                </div>
                <div className="com-wrap">
                    <h3 className="comment-title">Отзывы</h3>
                    <div className="one-comment">
                        <button className={`button_left ${currentIndex===0 ? 'disabled':''}`} onClick={prevSlide} disabled={currentIndex === 0}>
                            <img src={`${process.env.PUBLIC_URL}/images/fourth_screen/button_left.png`} alt="" className="button-left-img" />
                        </button>
                        <div className="carousel-slide">
                            <Comment
                            image={slides[currentIndex].image}
                            name={slides[currentIndex].name}
                            subinfo={slides[currentIndex].subinfo}
                            rating={slides[currentIndex].rating}
                            comment={slides[currentIndex].comment}
                            />
                        </div>
                        <button className={`button_right ${currentIndex===slides.length-1 ? 'disabled':''}`}  onClick={nextSlide} disabled={currentIndex === slides.length - 1}>
                            <img src={`${process.env.PUBLIC_URL}/images/fourth_screen/button_right.png`} alt="" className="button-right-img" />
                        </button>
                    </div>
                    <div className="carousel-dots">
                        {dotArray()}
                    </div>
                </div>
            </Container>
        </section>
    );
};


export default Comments