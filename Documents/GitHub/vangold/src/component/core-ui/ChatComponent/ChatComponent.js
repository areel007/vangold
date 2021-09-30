import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import './ChatComponent.css'


const ChatComponents = () => {

    return (
        <section id="chat_-_component" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                    <div className="chat-messager-container">
                                    <div className="send-message-box">
                                        <div className="inn-send-message-box">
                                            Okay, some other time, I guess. Lorem Ipsum jji jksn jikkkms jkola kopol; kppp
                                        </div>
                                    </div>
                                    <div className="send-message-time-date">
                                        Saturday 11:50 PM
                                    </div>
                                    <div className="middle-message-time-date">
                                        June 20, 10:46 pm
                                    </div>
                                    <div className="reply-message-box">
                                        <div className="replied-message-to">
                                            Replied to Damola
                                        </div>
                                        <div className="inn-reply-message-box">
                                            Hey, Devon. Can we get on a quick call?
                                        </div>
                                        <div className="inn-reply-message-box2">
                                            <span className="replyName">Koyote Stark</span>
                                            Hi, Damola. Sure, but now I’m busy rn.
                                        </div>
                                        <div className="reply-message-ime-date">
                                            11:50 AM
                                        </div>
                                        <div style={{marginTop: 24}} className="inn-reply-message-box2">
                                            <span style={{color: "#00237B"}} className="replyName">Femi</span>
                                            Hi, Emmie. Sure, but now I’m busy rn.
                                        </div>
                                        <div className="reply-message-ime-date">
                                            Saturday 11:50 PM
                                        </div>
                                    </div>
                                    <div className="send-message-box">
                                        <div className="inn-send-message-box inn-send-message-box2">
                                            Okay, some other time, I guess.
                                        </div>
                                    </div>
                                    <div className="send-message-time-date">
                                        Saturday 11:50 PM
                                    </div>
                                    <div style={{marginTop: 24}} className="inn-reply-message-box2 inn-reply-message-box3">
                                            <span style={{color: "#00237B"}} className="replyName">Tola</span>
                                            Hey y’all, Burna new event is coming up. Check out this nehhh jjjnnnd nnjjjnnnjn
                                        </div>
                                        <div className="reply-message-ime-date">
                                            Saturday 11:50 PM
                                        </div>
                                    </div>
                                    <div className="bottom-chat-footer">
                                        <div className="chat-input-box">
                                            <input type="text" placeholder="Message..." />
                                            <div className="chat-input-icons">
                                                <div className="inn-chat-input-icons">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9Z" fill="#333333"/>
                                                        <path d="M6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9Z" fill="#333333"/>
                                                        <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM10 15.5C12.33 15.5 14.32 14.05 15.12 12H13.45C12.76 13.19 11.48 14 10 14C8.52 14 7.25 13.19 6.55 12H4.88C5.68 14.05 7.67 15.5 10 15.5Z" fill="#333333"/>
                                                    </svg>
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.28215 18.4242C2.13255 16.2746 2.13255 12.7957 4.28215 10.6461L11.7068 3.22145C13.2695 1.65874 15.8009 1.65874 17.3636 3.22145C18.9263 4.78415 18.9263 7.3156 17.3636 8.8783L11.3532 14.8887C10.3774 15.8645 8.79349 15.8645 7.81769 14.8887C6.84188 13.9129 6.84188 12.329 7.81769 11.3532L13.121 6.04988L14.5352 7.46409L9.16826 12.831C8.77935 13.2199 9.48646 13.927 9.87537 13.5381L15.9494 7.46409C16.7272 6.68627 16.7272 5.41348 15.9494 4.63566C15.1716 3.85784 13.8988 3.85784 13.121 4.63566L5.69637 12.0603C4.33165 13.425 4.33165 15.6453 5.69637 17.01C7.06108 18.3747 9.2814 18.3747 10.6461 17.01L17.3636 10.2925L18.7778 11.7067L12.0603 18.4242C9.91072 20.5738 6.43176 20.5738 4.28215 18.4242Z" fill="#333333"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="send__message-btn">
                                            <svg className="send__message-btn-svg" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="48" height="48" rx="8" fill="#45B618"/>
                                                <path d="M34 15L23 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M34 15L27 35L23 26L14 22L34 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                    </Col>
                </Row> 
            </Container>
        </section>
    );
}

export default ChatComponents;