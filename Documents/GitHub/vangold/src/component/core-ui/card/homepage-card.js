import {useState} from "react";
import TalentCard from "./talent-card/talent-card";
import "./talent-card/talent-card.css";

const HomePageCards = () => {
    const [cardDetails] = useState([
        { cardImage: "voice-over.png", voiceOverAvatar: "voice-over-avatar.png", position: "Voice Over Artist" },
        { cardImage: "frontend-dev.png", voiceOverAvatar: "frontend-avatar.png", position: "Frontend Developer" },
        { cardImage: "product-designer.png", voiceOverAvatar: "product-designer-avatar.png", position: "Product Designer" },
        { cardImage: "graphic-designer.png", voiceOverAvatar: "graphic-designer-avatar.png", position: "Graphic Designer" },
    ])
    return (
        <div>
            <div className="container">
                <div className="main-section__inner">
                    <div className="get-access">
                        <div className="list-of-talents">
                            {
                                cardDetails.map(cardDetail => {
                                    return(
                                        <TalentCard key={cardDetail.voiceOverAvatar} cardDetail={cardDetail} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageCards