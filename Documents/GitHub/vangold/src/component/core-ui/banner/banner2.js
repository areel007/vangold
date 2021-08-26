import React from 'react';
import "./banner.css"
import bannerImage from "../../../assets/images/vangold-banner-img2.png"

const AbBanner = () => {

    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="banner__inner">
                        <div className="bannerTwo__text">
                            <h1 className="banner__text__title banner2__text__title">Find Best Solution for Top  Business</h1>
                            <p className="banner__text__subtitle">Hire top-notch professionals to get your project done. Worry not about their competence, we did our due diligence. 
                            </p>
                            <div className="banner__button">
                                <button className="banner__text__button">Hire a Freelancer</button>
                                <button className="banner__text__button findwork__btn">Find Work</button>
                            </div>
                        </div>
                        <div className="bannerTwo__image">
                            <img src={bannerImage} alt="banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbBanner