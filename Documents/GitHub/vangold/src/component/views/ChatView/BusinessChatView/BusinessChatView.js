import React, {useState} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import cross from "../../../../assets/images/profile/cross1.png";
import BusinessSideBarDropDown from "../../../core-ui/BusinessSideBarDropDown/BusinessSideBarDropDown1";
import ChatBoxFive from "../../../core-ui/AllMessagesBox/ChatBoxFive";
import "./BusinessChatView.css";

const BusinessChatView = ({ showSideMenu, setShowSideMenu }) => {
    const [seeMessage, setSeeMessage] = useState(false);
    const [showCheck, setShowCheck] = useState(false)

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                    <div className="mb-5 dashboard_mobile_searchBar__filter d-lg-none">
                            <div className="dashboard_mobile_searchBar">
                                <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none">
                                <path d="M11.2028 9.85162C11.1006 9.74942 11.0866 9.57302 11.165
                                9.45122C11.781 8.50342 12.1422 7.37502 12.1422 6.16262C12.1422
                                2.81382 9.4178 0.0908203 6.0718 0.0908203C2.723 0.0908203 0 2.81382
                                0 6.16262C0 9.51002 2.723 12.233 6.0718 12.233C7.3752 12.233 8.582
                                11.8144 9.5732 11.1116C9.6894 11.0276 9.8644 11.0388 9.9666 11.1396L12.1366
                                13.3096C12.1506 13.3236 12.166 13.3376 12.1814 13.3488C12.2066 13.3698
                                12.3116 13.4678 12.4124 13.57L12.67 13.8262C12.7722 13.927 12.9374
                                13.927 13.0382 13.8262L13.923 12.9414C14.0252 12.8392 14.0252 12.674
                                13.9244 12.5718L11.2028 9.85162ZM9.744 8.99062C9.5438 9.25102 9.3184
                                9.48902 9.0692 9.70042C8.26 10.3878 7.2142 10.805 6.0718 10.805C3.5112
                                10.805 1.428 8.72182 1.428 6.16262C1.428 3.60342 3.5112 1.51882 6.0718
                                1.51882C8.631 1.51882 10.7142 3.60202 10.7142 6.16262C10.7142 7.22662
                                10.3488 8.20662 9.744 8.99062Z" fill="#4F4F4F"
                                />
                                </svg>
                                <input type="text" placeholder="Search..."/>
                            </div>
                            {!showCheck && (
                                <svg onClick={() => setShowCheck(true)} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="8" fill="#767680" fill-opacity="0.12"/>
                                <path d="M16 24H20V22H16V24ZM9 12V14H27V12H9ZM12 19H24V17H12V19Z" fill="#333333"/>
                                </svg>
                            )}
                        </div>
                        <div className="business-chat-container">
                            <div className={`sideBarBusinessChat ${!showCheck && "d-none d-lg-block"}`}>
                                {showCheck && (
                                <>
                                    <div className="d-flex justify-content-end px-4">
                                        <div>
                                            <img src={cross} alt="cross" onClick={() => setShowCheck(false)} />
                                        </div>
                                    </div>
                                    <hr />
                                </>
                                )} 
                                <div className="business__channel-header mobile__business__channel-header">
                                    <div className="business__channel-header-left">
                                        <h2>Channel</h2>
                                    </div>
                                </div>

                                <BusinessSideBarDropDown showCheck={showCheck}/>
                            </div>
                        
                            <div className="business-chat-view">
                                <ChatBoxFive />
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default BusinessChatView;
