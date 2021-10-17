import "./main-section.css"
import TalentCard from "../card/talent-card/talent-card";

const MainSection = (props) => {
    return(
        <div className="main-section">
            <div className="container">
                <div className="main-section__inner">
                    <div className="get-access">
                        <p className="get-access-title">Get access to an array of verified and trusted talent</p>
                        <div className="list-of-talents">
                            {
                                props.cardDetails.map(cardDetail => {
                                    return(
                                        <TalentCard key={cardDetail.voiceOverAvatar} cardDetail={cardDetail} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="looking-for-talent">
                        <div className="looking-for-talent-image">
                            <img src="images/looking-for-talent.png" alt="looking for talent"/>
                        </div>
                        <div className="looking-for-talent-text">
                            <p className="looking-for-talent-text__title">
                                Looking for the right talent? Let’s help you with that
                            </p>
                            <p className="looking-for-talent-text__subtitle">
                                No need for endless guessing and interviews to find the right talent.
                                We match you with top professionals in whatever
                                field you require to help you scale your business and increase revenue for you.
                            </p>
                            {/* <button className="looking-for-talent-button">
                                <span>Get started</span>
                                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2931 1.70711C13.9026 1.31658 13.9026 0.683417 14.2931 0.292893C14.6837 -0.0976311 15.3168 -0.0976311 15.7074 0.292893L21.7073 6.29289C22.0979 6.68342 22.0979 7.31658 21.7073 7.70711L15.7074 13.7071C15.3168 14.0976 14.6837 14.0976 14.2931 13.7071C13.9026 13.3166 13.9026 12.6834 14.2931 12.2929L18.586 7.99998H1.01103C0.452653 7.99998 0 7.55227 0 6.99998C0 6.4477 0.452653 5.99998 1.01103 5.99998H18.586L14.2931 1.70711Z" fill="#45B618"/>
                                </svg>

                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection