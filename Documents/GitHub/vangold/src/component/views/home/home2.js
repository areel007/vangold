import "./home2.css"
import AbBanner from "../../core-ui/banner/banner2";
import MainSectionTwo from "../../core-ui/main-section/main-section2";

const HomeTwo = (props) => {
    return (
        <div className="home">
            <div className="page__title">
                <AbBanner />
                <MainSectionTwo aboutUsCardDetails={props.aboutUsCardDetails} />
                <div className="collaborate collaborate2">
                    <div className="container">
                        <div className="collaborate__inner2">
                            <div className="collaborate-text collaborate-text2">
                                <p className="collaborate-text__title2">
                                    Collaborate better <strong>on projects</strong>
                                </p>
                                <p className="collaborate-text__subtitle collaborate-text__subtitle2">
                                    With our team of disciplined professionals, to collaborate on your project just got easier.
                                    Collaboration brings increased creativity,
                                    perspective and innovation to your product, making your business scale very fast.
                                </p>
                                <button className="collaborate-button2">
                                    Get started
                                </button>
                            </div>
                            <div className="collaborate-image2">
                                <div className="inner-collaborate-image2">
                                <img className="Ellipse1477" src="imagestwo/Ellipse1477.png" alt="collaborate"/>
                                    <div className="pulse">
                                        <span className="one 1"></span>
                                        <span className="two 2"></span>
                                        <span className="three 3"></span>
                                        <span className="four 4"></span>
                                        <span className="five 5"></span>
                                            <div class="glowinglogo">
                                                <img src="imagestwo/glowinglogo.png" alt="" />
                                            </div>
                                    </div>
                                <img className="Ellipse1478" src="imagestwo/Ellipse1478.png" alt="collaborate"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="get-notify-banner">
                    <p className="getNotifyBannerPara1">Get Notified</p>
                    <p className="getNotifyBannerPara2">Your Every New Job</p>
                    <p className="getNotifyBannerPara3">Place your business on the path of success with the help of freelance talents that you can rely on.</p>
                    <div className="getNotifyInput">
                        <input type="text" placeholder="Email Address" />
                        <button>Join Waitlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTwo