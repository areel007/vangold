import { useState } from "react";
import Image1 from "../../../assets/images/manage-talents/Rectangle920500.png";
import Image2 from "../../../assets/images/manage-talents/Rectangle92063.png";
import Image3 from "../../../assets/images/manage-talents/Rectangle9206.png";
import MobileCallChatModal from "../MobileCallChatModal/MobileCallChatModal"
import './MobileCall.css'

const MobileCall = (props) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="mobile__call">
            <div className="container">
                <div className="inner__mobile--call">
                    <div className="inner__mobile--call-top">
                        <div className="inner__mobile--call-top-bottom">
                            <span>Brian Lukas</span>
                            <div className="inner__mobile--call-top-bottom-SVG">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="24" fill="#E22020"/>
                                    <path d="M24 21C22.4 21 20.85 21.25 19.4 21.72V24.82C19.4 25.21 19.17 25.56 18.84 25.72C17.86 26.21 16.97 26.84 16.18 27.57C16 27.75 15.75 27.85 15.48 27.85C15.2 27.85 14.95 27.74 14.77 27.56L12.29 25.08C12.11 24.91 12 24.66 12 24.38C12 24.1 12.11 23.85 12.29 23.67C15.34 20.78 19.46 19 24 19C28.54 19 32.66 20.78 35.71 23.67C35.89 23.85 36 24.1 36 24.38C36 24.66 35.89 24.91 35.71 25.09L33.23 27.57C33.05 27.75 32.8 27.86 32.52 27.86C32.25 27.86 32 27.75 31.82 27.58C31.03 26.84 30.13 26.22 29.15 25.73C28.82 25.57 28.59 25.23 28.59 24.83V21.73C27.15 21.25 25.6 21 24 21Z" fill="white"/>
                                </svg>
                                <svg onClick={() => setModalShow(true)} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#333333" fill-opacity="0.3"/>
                                    <path d="M26 8H10C8.9 8 8.01 8.9 8.01 10L8 28L12 24H26C27.1 24 28 23.1 28 22V10C28 8.9 27.1 8 26 8ZM24 20H12V18H24V20ZM24 17H12V15H24V17ZM24 14H12V12H24V14Z" fill="white"/>
                                </svg>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#45B618"/>
                                    <path d="M18 20C19.66 20 20.99 18.66 20.99 17L21 11C21 9.34 19.66 8 18 8C16.34 8 15 9.34 15 11V17C15 18.66 16.34 20 18 20ZM23.3 17C23.3 20 20.76 22.1 18 22.1C15.24 22.1 12.7 20 12.7 17H11C11 20.41 13.72 23.23 17 23.72V27H19V23.72C22.28 23.24 25 20.42 25 17H23.3Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <img src={Image1} alt="cal" />
                    </div>
                    <div className="inner__mobile--call-bottom">
                        <div className="inner__inner__mobile--call-bottom">
                            <div className="inner__mobile--call-bottom-bottom">
                                <span>Brian Lukas</span>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#333333" fill-opacity="0.3"/>
                                    <path d="M25 17H23.3C23.3 17.74 23.14 18.43 22.87 19.05L24.1 20.28C24.66 19.3 25 18.19 25 17ZM20.98 17.17C20.98 17.11 21 17.06 21 17V11C21 9.34 19.66 8 18 8C16.34 8 15 9.34 15 11V11.18L20.98 17.17ZM10.27 9L9 10.27L15.01 16.28V17C15.01 18.66 16.34 20 18 20C18.22 20 18.44 19.97 18.65 19.92L20.31 21.58C19.6 21.91 18.81 22.1 18 22.1C15.24 22.1 12.7 20 12.7 17H11C11 20.41 13.72 23.23 17 23.72V27H19V23.72C19.91 23.59 20.77 23.27 21.54 22.82L25.73 27L27 25.73L10.27 9Z" fill="white"/>
                                </svg>

                            </div>
                            <img src={Image2} alt="cal" />
                        </div>
                        <div className="inner__inner__mobile--call-bottom">
                            <div className="inner__mobile--call-bottom-bottom">
                                <span>Brian Lukas</span>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="8" fill="#333333" fill-opacity="0.3"/>
                                    <path d="M25 17H23.3C23.3 17.74 23.14 18.43 22.87 19.05L24.1 20.28C24.66 19.3 25 18.19 25 17ZM20.98 17.17C20.98 17.11 21 17.06 21 17V11C21 9.34 19.66 8 18 8C16.34 8 15 9.34 15 11V11.18L20.98 17.17ZM10.27 9L9 10.27L15.01 16.28V17C15.01 18.66 16.34 20 18 20C18.22 20 18.44 19.97 18.65 19.92L20.31 21.58C19.6 21.91 18.81 22.1 18 22.1C15.24 22.1 12.7 20 12.7 17H11C11 20.41 13.72 23.23 17 23.72V27H19V23.72C19.91 23.59 20.77 23.27 21.54 22.82L25.73 27L27 25.73L10.27 9Z" fill="white"/>
                                </svg>
                            </div>
                            <img src={Image3} alt="cal" />
                        </div>
                    </div>
                </div>
            </div>
            <MobileCallChatModal
                show={modalShow}
                onHide={() => setModalShow(false)}/>
        </div>
    );
}

export default MobileCall;