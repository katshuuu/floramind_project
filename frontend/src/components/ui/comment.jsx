import React from 'react'
import './comment.css';

const Comment=({image, name, subinfo, rating, comment})=>{
    const Rating = () => {
        const stars = [];
        let validRating=rating;
        if (validRating<0){
            validRating=0;
        }
        else if (validRating>5){
            validRating=5;
        }
        for (let i = 0; i < validRating; i++) {
            stars.push(<img key={i} src={`${process.env.PUBLIC_URL}/images/fourth_screen/star.png`} alt="star" className="star" />);
        }
        return stars;
    };
    return(
        <section className="comment-container">
            <div className="com-content">
                <div className="profile-info-main">
                    <div className="profile-left">
                        <img src={image} alt="favicon" className="profile-photo" />
                        <div className="profile-text">
                            <h3 className="profile-title">
                                {name}
                            </h3>
                            <p className="profile-subtitle">
                                {subinfo}
                            </p>
                        </div>
                    </div>
                    <div className="rating">
                        {Rating()}
                    </div>
                </div>
                <div className="main-comment">
                    <p className="comment-text">
                        {comment}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Comment
