import React, { useState, useEffect } from "react";
import "../../core-ui/auth/authstyle.css"
import 'react-pure-modal/dist/react-pure-modal.min.css';
import CrossfadeImage from "react-crossfade-image";
import HomeFormModalOne from "../FormsModal/HomeFormModalOne";
import HomeFormModalTwo from "../FormsModal/HomeFormModalTwo";
import { useHistory } from "react-router-dom";

const fadeImages = [
    "https://i.ibb.co/hsGMCHF/Rectangle8892491.png",
    "https://i.ibb.co/ssZ5G3P/Rectangle999249.png",
    "https://i.ibb.co/f4Z2GH2/vangold-homepae-baner-img.png",
  ];


const AbBanner = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowTwo, setModalShowTwo] = useState(false);
    const history = useHistory();

    const [curImg, setCurImg] = useState(0);

    useEffect(() => {
        let interval = null;
    
        interval = setInterval(() => {
          if (curImg < 2) {
            setCurImg(img => img + 1);
          } else {
            setCurImg(0);
          }
        }, 5000);
    
        return () => clearInterval(interval);
      }, [curImg]);

    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="banner__inner">
                        <div className="bannerTwo__text">
                            <h1 className="banner__text__title banner2__text__title">Find Best Solution for Top  Business</h1>
                            <p className="banner__text__subtitle">Hire top-notch professionals to get your project done. Worry not about their competence, we did our due diligence. 
                            </p>
                            <div className="banner__button home__banner__button">
                                <button className="home__banner__text__button" onClick={() => setModalShow(true)}>Hire a Freelancer</button>
                                <button className="home__banner__text__button findwork__btn" onClick={() => setModalShowTwo(true)}>Find Work</button>
                            </div>
                            <div className="hhh mt-3">
                                <button onClick={() => {
                                    history.push('/freelancer-registration')
                                }}>freelancer registration</button>
                                <button onClick={() => {
                                    history.push('/brand-registration')
                                }}>brand-registration</button>
                                <button onClick={() => {
                                    history.push('/reset-password')
                                }}>reset-password</button>
                                  <button onClick={() => {
                                    history.push('/passwordresetsuccessful')
                                }}>reset-successful</button>
                                <button onClick={() => {
                                    history.push('/VerifyEmail')
                                }}>Verify-Email</button>
                                <button onClick={() => {
                                    history.push('/accountverifysuccessful')
                                }}>verify-successful</button>
                            </div> 
                        </div>
                        <div className="bannerTwo__image">
                                <CrossfadeImage
                                        src={fadeImages[curImg]}
                                        duration={1000}
                                        timingFunction={"ease-out"}
                                    />
                            
                        </div>
                    </div>
                </div>
            </div>
            <HomeFormModalOne 
                show={modalShow}
                onHide={() => setModalShow(false)}
                head="Find our top talents" />
            <HomeFormModalTwo 
                show={modalShowTwo}
                onHide={() => setModalShowTwo(false)}
                head="Build a successful career with us" />
        </div>
    )
}

export default AbBanner;