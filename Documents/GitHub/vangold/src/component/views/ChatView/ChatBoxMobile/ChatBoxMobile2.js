import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import avatar from "../../../../assets/images/avatar/Ellipse7.png";
import '../ChatComponent.css';
import useOnclickOutside from "react-cool-onclickoutside";
import MobileMessageTwo from "../../../core-ui/Messages/MobileMessages2";

const chatUserData = {
    userAvatar: avatar,
    userName: "Kali Jay"
}

const ChatBoxMobileTwo = () => {
    const [isShow, setIsShow] = React.useState(false);

    const openPopover = () => {
      setIsShow(!isShow);
    };
    
    const closePopover = () => {
        setIsShow(false);
    };

    const ref = useOnclickOutside(() => {
        setIsShow(false);
      });
  
    return (
        <div id="chat-mobile-box" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="chat__container-header">
                            <p className="chat__container-title">Inbox</p>
                            <p className="chat__container-subtitle">Read, respond and respond to messages</p>
                        </div>
                        <div className="chat__box__contaniner">
                        <div className="mobile-message__box-component">
                                <div className="mobile-message__box-component_header">
                                    <div className="chatBox__profile">
                                        <img className="chat__avatar" src={chatUserData.userAvatar} alt="fff"/>
                                        <p>{chatUserData.userName}</p>
                                    </div>
                                    <svg className="open_popover_btn" onClick={openPopover} style={{cursor: "pointer"}} width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.125 4.5C11.3676 4.5 12.375 3.49264 12.375 2.25C12.375 1.00736 11.3676 0 10.125 0C8.88236 0 7.875 1.00736 7.875 2.25C7.875 3.49264 8.88236 4.5 10.125 4.5Z" fill="black"/>
                                        <path d="M18 4.5C19.2426 4.5 20.25 3.49264 20.25 2.25C20.25 1.00736 19.2426 0 18 0C16.7574 0 15.75 1.00736 15.75 2.25C15.75 3.49264 16.7574 4.5 18 4.5Z" fill="black"/>
                                        <path d="M2.25 4.5C3.49264 4.5 4.5 3.49264 4.5 2.25C4.5 1.00736 3.49264 0 2.25 0C1.00736 0 0 1.00736 0 2.25C0 3.49264 1.00736 4.5 2.25 4.5Z" fill="black"/>
                                    </svg>
                                    {isShow &&
                                        <div ref={ref} class="popoverBox arrow-top">
                                            <div className="popover__close-btns">
                                                <svg onClick={closePopover} style={{cursor: "pointer"}} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.7501 10L14.9996 13.75L11.2499 10L10 11.25L13.7497 15L10 18.75L11.2499 20L14.9996 16.25L18.7501 20L20 18.75L16.2503 15L20 11.25L18.7501 10Z" fill="black"/>
                                                    <circle cx="14.5" cy="14.5" r="13.5" stroke="black" stroke-width="2"/>
                                                </svg>
                                            </div>
                                            <div className="popover__links">
                                                <Link onClick={closePopover} to="/profile/group-chat">Create Group</Link>
                                                <li onClick={closePopover} to="#">View Team Members</li>
                                            </div>                                     
                                        </div>
                                    }
                                </div>
                               <MobileMessageTwo />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ChatBoxMobileTwo;