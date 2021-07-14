import "./home.css"
import Banner from "../../core-ui/banner/banner";
import MainSection from "../../core-ui/main-section/main-section";

const Home = (props) => {
    return (
        <div className="home">
            <div className="page__title">
                <div className="container">
                    <h1 className="page__title__inner">Become a Business</h1>
                </div>
                <Banner />
                <MainSection cardDetails={props.cardDetails} />
                <div className="collaborate">
                    <div className="container">
                        <div className="collaborate__inner">
                            <div className="collaborate-text">
                                <p className="collaborate-text__title">
                                    Collaborate better on projects
                                </p>
                                <p className="collaborate-text__subtitle">
                                    With our team of disciplined professionals, to collaborate on your project just got easier.
                                    Collaboration brings increased creativity,
                                    perspective and innovation to your product, making your business scale very fast.
                                </p>
                                <button className="collaborate-button">
                                    <span>Get started</span>
                                    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2931 1.70711C13.9026 1.31658 13.9026 0.683417 14.2931 0.292893C14.6837 -0.0976311 15.3168 -0.0976311 15.7074 0.292893L21.7073 6.29289C22.0979 6.68342 22.0979 7.31658 21.7073 7.70711L15.7074 13.7071C15.3168 14.0976 14.6837 14.0976 14.2931 13.7071C13.9026 13.3166 13.9026 12.6834 14.2931 12.2929L18.586 7.99998H1.01103C0.452653 7.99998 0 7.55227 0 6.99998C0 6.4477 0.452653 5.99998 1.01103 5.99998H18.586L14.2931 1.70711Z" fill="#45B618"/>
                                    </svg>

                                </button>
                            </div>
                            <div className="collaborate-image">
                                <img src="images/collaborate.png" alt="collaborate"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="manage-your-team">
                    <div className="container">
                        <div className="manage-your-team__inner">
                            <div className="manage-your-team-text">
                                <p className="manage-your-team-title">
                                    Manage your team effectively
                                </p>
                                <p className="manage-your-team-subtitle">
                                    Manage your teams, issue tasks and track the progress of each member
                                    of your team and most imoprtantly, build a world class business.
                                </p>
                            </div>
                            <div className="manage-your-team-image">
                                <img src="images/manage-your-team.png" alt="manage your team"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="become-a-business-banner">
                    <p>Manage your teams and projects anytime and anywhere</p>
                    <button>Become a Business</button>
                </div>
            </div>
        </div>
    )
}

export default Home