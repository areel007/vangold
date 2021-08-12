import React from 'react';
import "./banner.css"
import bannerImage from "../../../assets/images/vangold-banner-img2.png"
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import "../modal/modal.css";
import BannerTwoModal from '../auth/banner2modal/banner2modal';

const AbBanner = () => {
    const [open, setOpen] = React.useState(false);

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
                                <button className="banner__text__button" onClick={() => setOpen(true)}>Hire a Freelancer</button>
                                <button className="banner__text__button findwork__btn" onClick={() => setOpen(true)}>Find Work</button>
                            </div>
                        </div>
                        <div className="bannerTwo__image">
                            <img src={bannerImage} alt="banner"/>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    center
                    classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                    closeButton: 'closeIcon',
                    }}
                >
                    <h2>Build a successful career with us</h2>
                    <div className="banner2__form">
                        <BannerTwoModal />
                    </div>
                </Modal>
            </>
        </div>
    )
}

export default AbBanner