import "./talent-card.css"

const AboutUsCard = (props) => {
    return(
        <div>
            <div className="about-us-u-card">
                <div className="talent-card__inner">
                    <div className="card-image">
                        <img className="about-us-card-image" src={`imagestwo/${props.aboutUsCardDetail.cardImage}`} alt="about-us-img"/>
                        <p className="about-us-card-caption">{ props.aboutUsCardDetail.productServiceCaption }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsCard