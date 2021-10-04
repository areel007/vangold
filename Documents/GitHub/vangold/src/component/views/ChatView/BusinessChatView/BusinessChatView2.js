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
                        <div className="business-chat-container">
                            <div className="sideBarBusiness2">
                                <div className="business__channel-header mobile__business__channel-header">
                                    <div className="business__channel-header-left">
                                        <h2>Channel</h2>
                                    </div>
                                </div>
                                <BusinessSideBarDropDown />
                            </div>
                            <div className="business-chat-view2">
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
