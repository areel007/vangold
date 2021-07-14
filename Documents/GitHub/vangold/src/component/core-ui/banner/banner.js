import "./banner.css"
import bannerImage from "../../../assets/images/vangold-banner-img.png"

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner__inner">
                    <div className="banner__text">
                        <h1 className="banner__text__title">Secure the talent you need to grow your business</h1>
                        <p className="banner__text__subtitle">Place your business on the path of success by with
                            the help of freelance talent that you can rely on
                        </p>
                        <button className="banner__text__button">Get Started</button>
                    </div>
                    <div className="banner__image">
                        <img src={bannerImage} alt="banner"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner