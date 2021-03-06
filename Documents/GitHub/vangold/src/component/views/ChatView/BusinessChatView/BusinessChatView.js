import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import BusinessSideBarDropDown from "../../../core-ui/BusinessSideBarDropDown/BusinessSideBarDropDown1";
import ChatBoxFive from "../../../core-ui/AllMessagesBox/ChatBoxFive";
import ChatBoxEight from "../../../core-ui/AllMessagesBox/ChatBoxEight";
import "./BusinessChatView.css";

const BusinessChatView = ({ showSideMenu, setShowSideMenu }) => {
    const [showMessages, setShowMessages] = useState(false);
    const [setShowChatBoxFive] = useState(false);
    const [showCheck] = useState(false);

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
              <div className="sideBarBusinessChat">
                <BusinessSideBarDropDown
                  setShowChatBoxFive={setShowChatBoxFive}
                  setShowMessages={setShowMessages}
                  showCheck={showCheck}
                />
              </div>

              <div className="message__box-component2">
                {showMessages ? (
                    <ChatBoxEight />
                    ) :  ( 
                        <ChatBoxFive />
                    )}

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusinessChatView;
