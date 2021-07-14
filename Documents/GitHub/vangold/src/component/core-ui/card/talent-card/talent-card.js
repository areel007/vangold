import "./talent-card.css"

const TalentCard = (props) => {
    return(
        <div className="talent-card">
            <div className="talent-card__inner">
                <div className="card-image">
                    <img src={`images/${props.cardDetail.cardImage}`}/>
                </div>
                <div className="card-client-details">
                    <div className="card-avatar">
                        <img src={`images/${props.cardDetail.voiceOverAvatar}`} alt="avatar"/>
                    </div>
                    <p className="position">{ props.cardDetail.position }</p>
                </div>
            </div>
        </div>
    )
}

export default TalentCard