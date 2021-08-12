import "./talent-card.css"

const OurTopFreeLancerSection = (props) => {
    return(
        <div>
            <div className="about-us-u-card">
                <div className="talent-card__inner">
                    <div className="card-image">
                        <img className="about-us-card-image" src={`popular-service-img/${props.aboutUsCardDetail.cardImage}`}/>
                        <p className="about-us-card-caption">{ props.aboutUsCardDetail.productServiceCaption }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTopFreeLancerSection