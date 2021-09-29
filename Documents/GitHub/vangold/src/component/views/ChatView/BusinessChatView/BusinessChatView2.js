import React, {useState} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import BusinessSideBarDropDown from "../../../core-ui/BusinessSideBarDropDown/BusinessSideBarDropDown1";
import BusinessChatImg from "../../../../assets/images/business-chat.png";
import "./BusinessChatView.css";

const BusinessChatViewTwo = (props) => {
    
  
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="business__channel-header business__channel-header-2">
                            <div className="business__channel-header-left business__channel-header-left-2">
                                <h2>Channel</h2>
                            </div>
                        </div>
                        <div className="business-chat-container">
                            <div className="sideBarBusinessChat d-none d-lg-block">
                                <BusinessSideBarDropDown />
                            </div>
                            <div className="business-chat-view">
                                <div className="inn-business-chat-view">
                                    <div className="business-chat-box-content">
                                        <div className="inn-business-chat-box-content BusinessChatImg-content">
                                            <img src={BusinessChatImg} alt="BusinessChatImg" />
                                            <div className="BusinessChatImg__text">
                                                <span>This is a private group</span>
                                                <p>Request access to join this group.</p>
                                                <button className="request_-_access-btn">Request Access</button>
                                                <button className="request_-_sent-btn">Request Sent</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default BusinessChatViewTwo;
