import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import avatar from "../../../../assets/images/avatar/Ellipse7.png";
import '../ChatComponent.css';
import useOnclickOutside from "react-cool-onclickoutside";

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
                                <div className="mobile-chat-messanger-container">
                                    <div className="send__message__container">
                                        <div className="inn-send__message__container">
                                            <div className="send__message__box">
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio feugiat donec imperdiet aliquam vel, penatibus</span>
                                            </div>
                                            <div className="send__message__time">
                                                <span>Saturday 11:50 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reply__message__container">
                                        <div className="inn-send__message__container">
                                            <div className="reply__message__box">
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio feugiat donec imperdiet aliquam vel, penatibus</span>
                                            </div>
                                            <div className="reply__message__time">
                                                <span>Saturday 11:50 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle-message-time-date">
                                        <span>June 20, 10:46 pm</span>
                                    </div>
                                    <div className="reply__message__container">
                                        <div className="inn-send__message__container">
                                            <div className="missed-call">
                                                <div className="missed-call-svg">
                                                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                    <path d="M2.74479 2.7179L5.0012 4.97431L7.873 2.10252L7.46274 1.69226L5.0012 4.1538L3.15505 2.30765H4.59095V1.69226H2.12941V4.1538H2.74479V2.7179ZM9.80531 7.30047C8.55402 6.11482 6.86377 5.38457 5.0012 5.38457C3.13864 5.38457 1.44838 6.11482 0.197099 7.30047C0.123253 7.37431 0.078125 7.47688 0.078125 7.59175C0.078125 7.70662 0.123253 7.80918 0.197099 7.88303L1.21454 8.90047C1.28838 8.97431 1.39095 9.01944 1.50582 9.01944C1.61659 9.01944 1.71915 8.97431 1.793 8.90457C2.1171 8.60098 2.48633 8.34662 2.88428 8.14559C3.01966 8.07995 3.11402 7.94047 3.11402 7.77636V6.50457C3.70889 6.30765 4.34479 6.20508 5.0012 6.20508C5.65761 6.20508 6.29351 6.30765 6.88838 6.50047V7.77226C6.88838 7.93226 6.98274 8.07585 7.11813 8.14149C7.52018 8.34252 7.88531 8.60098 8.21351 8.90047C8.28736 8.97431 8.38992 9.01534 8.50069 9.01534C8.61556 9.01534 8.71813 8.97021 8.79197 8.89636L9.80941 7.87893C9.88325 7.80508 9.92838 7.70252 9.92838 7.58765C9.92838 7.47277 9.87915 7.37431 9.80531 7.30047Z" fill="#333333"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0">
                                                    <rect width="9.84615" height="9.84615" fill="white" transform="translate(0.078125 0.461548)"/>
                                                    </clipPath>
                                                    </defs>
                                                    </svg>
                                                </div>
                                                <span>Missed call fom Jane Doe</span>
                                            </div>
                                            <div className="reply__message__time">
                                                <span>Saturday 11:50 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reply__message__container">
                                        <div className="inn-send__message__container">
                                            <div className="reply__message__box">
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed tempus convallis faucibus.</span>
                                            </div>
                                            <div className="reply__message__time">
                                                <span>Saturday 11:50 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="send__message__container">
                                        <div className="inn-send__message__container">
                                            <div className="send__message__box">
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                            </div>
                                            <div className="send__message__time">
                                                <span>Saturday 11:50 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reply__message__container">
                                        <div className="inn-send__message__container">
                                            <div className="reply__message__box">
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed tempus convallis faucibus.</span>
                                            </div>
                                            <div className="reply__message__time">
                                                <span>Saturday 11:50 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-chat-footer">
                                    <div className="chat-input-box">
                                        <input type="text" placeholder="Message..." />
                                        <div className="chat-input-icons">
                                            <div className="inn-chat-input-icons">
                                                <svg width="9.33" height="12.67" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 12C8.66 12 9.99 10.66 9.99 9L10 3C10 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3V9C4 10.66 5.34 12 7 12ZM5.8 2.9C5.8 2.24 6.34 1.7 7 1.7C7.66 1.7 8.2 2.24 8.2 2.9L8.19 9.1C8.19 9.76 7.66 10.3 7 10.3C6.34 10.3 5.8 9.76 5.8 9.1V2.9ZM12.3 9C12.3 12 9.76 14.1 7 14.1C4.24 14.1 1.7 12 1.7 9H0C0 12.41 2.72 15.23 6 15.72V19H8V15.72C11.28 15.24 14 12.42 14 9H12.3Z" fill="#333333"/>
                                                </svg>
                                                <svg width="13.33" height="13.33" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9Z" fill="#333333"/>
                                                    <path d="M6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9Z" fill="#333333"/>
                                                    <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM10 15.5C12.33 15.5 14.32 14.05 15.12 12H13.45C12.76 13.19 11.48 14 10 14C8.52 14 7.25 13.19 6.55 12H4.88C5.68 14.05 7.67 15.5 10 15.5Z" fill="#333333"/>
                                                </svg>
                                                <svg width="13.33" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.28215 18.4242C2.13255 16.2746 2.13255 12.7957 4.28215 10.6461L11.7068 3.22145C13.2695 1.65874 15.8009 1.65874 17.3636 3.22145C18.9263 4.78415 18.9263 7.3156 17.3636 8.8783L11.3532 14.8887C10.3774 15.8645 8.79349 15.8645 7.81769 14.8887C6.84188 13.9129 6.84188 12.329 7.81769 11.3532L13.121 6.04988L14.5352 7.46409L9.16826 12.831C8.77935 13.2199 9.48646 13.927 9.87537 13.5381L15.9494 7.46409C16.7272 6.68627 16.7272 5.41348 15.9494 4.63566C15.1716 3.85784 13.8988 3.85784 13.121 4.63566L5.69637 12.0603C4.33165 13.425 4.33165 15.6453 5.69637 17.01C7.06108 18.3747 9.2814 18.3747 10.6461 17.01L17.3636 10.2925L18.7778 11.7067L12.0603 18.4242C9.91072 20.5738 6.43176 20.5738 4.28215 18.4242Z" fill="#333333"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="send__message-btn">
                                        <svg className="send__message-btn-svg" width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" rx="8" fill="#45B618"/>
                                            <path d="M34 15L23 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M34 15L27 35L23 26L14 22L34 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ChatBoxMobileTwo;