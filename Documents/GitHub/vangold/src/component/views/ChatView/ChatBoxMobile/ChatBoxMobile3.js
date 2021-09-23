import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import avatar from "../../../../assets/images/avatar/Ellipse7.png";
import CreatedImg from "../../../../assets/images/undraw_real_time_collaboration.png";
import '../ChatComponent.css'

const chatUserData = {
    userAvatar: avatar
}

const ChatBoxMobileThree = () => {
  
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
                            <div className="mobile-message__box-component group-chat__box-component">
                                <div className="message__box-component2_header">
                                    <div className="chatBox__profile">
                                        <img className="chat__avatar" src={chatUserData.userAvatar} alt="fff"/>
                                        <p>VanGold Website Design</p>
                                    </div>
                                    <div className="chat-component-icons">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 4.5V1C14 0.45 13.55 0 13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L18 11.5V0.5L14 4.5Z" fill="#333333"/>
                                        </svg>

                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z" fill="#333333"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="group_chat-messager-container">
                                    <p>You created “VanGold Website Design”
                                        Have conversations around your different interest
                                        as  a group</p>
                                        <div className="created-_-Img">
                                            <img src={CreatedImg} alt="created" />
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

export default ChatBoxMobileThree;