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
                    
                        <div className="business-chat-container">
                            <div className="sideBarBusinessChat"> 
                                <BusinessSideBarDropDown showCheck={showCheck}/>
                            </div>
                        
                            <div className="message__box-component2">
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
