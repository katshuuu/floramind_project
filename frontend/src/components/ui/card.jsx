import React from 'react';
import './card.css'

const Card=({text, title1, subtitle1, title2, subtitle2,
     title3, subtitle3, title4, subtitle4, title5, subtitle5, cardcolor}) => {
    return(
         <div className={`card-main-block card-${cardcolor}`}>
            <div className="card-text-block">
                <div className="card-mini-text-block">
                    <h3 className="card-title">{title1}</h3>
                    <p className="card-subtitle">{subtitle1}</p>
                </div>
                    <div className="card-yach-row">
                        <div className="card-yach">
                            <span className="card-yach-title">{title2}</span>
                            <div className="card-yach-subtitle">{subtitle2}</div>
                        </div>
                        <div className="card-yach">
                            <span className="card-yach-title">{title3}</span>
                            <div className="card-yach-subtitle">{subtitle3}</div>
                        </div>
                    </div>
                    <div className="card-yach-row">
                        <div className="card-yach">
                            <span className="card-yach-title">{title4}</span>
                            <div className="card-yach-subtitle">{subtitle4}</div>
                        </div>
                        <div className="card-yach">
                            <span className="card-yach-title">{title5}</span>
                            <div className="card-yach-subtitle">{subtitle5}</div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Card;