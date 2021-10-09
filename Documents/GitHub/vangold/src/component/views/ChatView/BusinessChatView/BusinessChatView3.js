import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import BusinessSideBarDropDown from "../../../core-ui/BusinessSideBarDropDown/BusinessSideBarDropDown1";
import BusinessChatImg from "../../../../assets/images/business-chat.png";
import ChatBoxEight from "../../../core-ui/AllMessagesBox/ChatBoxEight";
import "./BusinessChatView.css";

const BusinessChatViewThree = ({ showSideMenu, setShowSideMenu }) => {
  const [showCheck, setShowCheck] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col
            xs={12}
            lg={2}
            className={`mx-auto mt-lg-4 ${
              !showSideMenu ? "d-none d-lg-block" : "mb-5"
            }`}
          >
            <SideMenu
              showSideMenu={showSideMenu}
              setShowSideMenu={setShowSideMenu}
            />
          </Col>
          <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
            <div className="business-chat-container">
              <div className="sideBarBusiness2">
                <BusinessSideBarDropDown setShowMessages={setShowMessages} showCheck={showCheck} />
              </div>
              <div className="business-chat-view2">
                <div className="inn-business-chat-view">
                  <div className="business-chat-box-content">
                    {showMessages ? (
                      <ChatBoxEight />
                    ) : (
                      <div className="inn-business-chat-box-content BusinessChatImg-content">
                        <img src={BusinessChatImg} alt="BusinessChatImg" />
                        <div className="BusinessChatImg__text">
                          <span>This is a new group</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusinessChatViewThree;
