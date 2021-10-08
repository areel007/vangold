import React, {useState} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import BusinessSideBarDropDown from "../../../core-ui/BusinessSideBarDropDown/BusinessSideBarDropDown1";
import BusinessChatImg from "../../../../assets/images/business-chat.png";
import "./BusinessChatView.css";

const BusinessChatViewTwo = (props) => {
    const [requestAccess, setRequestAccess] = useState("requestaccess");
  
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
                                                {requestAccess === "requestaccess" ? (

                                                <button className='follow-btn me-4' onClick={() => setRequestAccess()}>Request Access</button>
                                                ) : (

                                                <button className='web-btn me-4'>Request Sent</button>
                                                )}
                                                
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
