import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap"
import SideMenu from "../../../core-ui/SideMenu/SideMenu"
import avatar from "../../../../assets/images/avatar/Ellipse7.png";
import CallImg1 from "../../../../assets/images/chat-call/Rectangle649.png";
import CallImg2 from "../../../../assets/images/chat-call/Rectangle9163.png";
import CallImg3 from "../../../../assets/images/chat-call/Rectangle9164.png";
import CallImg4 from "../../../../assets/images/chat-call/Rectangle9165.png";
import '../ChatComponent.css';
import { Menu } from "semantic-ui-react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const handleClick = (e, data) => {
    console.log(data);
  };
  
const otherUsersData = [
    {
        avatar: avatar,
    },
    {
        avatar: avatar,
    },
    {
        avatar: avatar,
    },
]

const initialState = {
    mouseX: null,
    mouseY: null,
  };
  

const ChatCall = () => {

    return (
        <div id="chat-component" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto d-none d-lg-block mt-5">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="chat__container-header">
                            <p className="chat__container-title">VanGold Website Design</p>
                            <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V18H6V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H24V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" fill="#C963F9"/>
                                </svg>
                                Team
                            </button>
                        </div>
                        <div className="chat__box__contaniner chat__call__contaniner">
                            <div className="chat__box__contaniner-left chat-call-left">
                                <div className="chat-call-left-header">
                                    <div>
                                        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z" fill="#808080"/>
                                        </svg>
                                        Invited to the call
                                        <p className="chat-call-left-header-P1">6</p>
                                    </div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.64965 5.82006C9.35965 4.72006 10.5996 4.00006 11.9996 4.00006C14.2096 4.00006 15.9996 5.79006 15.9996 8.00006C15.9996 9.40006 15.2796 10.6401 14.1796 11.3501L8.64965 5.82006ZM19.9996 17.1701C19.9796 16.0701 19.3696 15.0601 18.3896 14.5501C17.8496 14.2701 17.2596 14.0101 16.6196 13.7901L19.9996 17.1701ZM21.1896 21.1901L2.80965 2.81006L1.38965 4.22006L10.2796 13.1101C8.46965 13.3401 6.88965 13.9001 5.60965 14.5601C4.60965 15.0701 3.99965 16.1001 3.99965 17.2201V20.0001H17.1696L19.7796 22.6101L21.1896 21.1901Z" fill="#808080"/>
                                        </svg>
                                        Absent people
                                        <p className="chat-call-left-header-P2">2</p>
                                    </div>
                                </div>
                                <div className="chat-call-view">
                                    <div className="top-chat-call-view">
                                        <div className="top-chat-call-view-left">
                                            <button>
                                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#45B618"/>
                                                </svg>
                                            </button>
                                            <button disabled>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.99967 4.66683C6.15967 4.66683 4.66634 6.16016 4.66634 8.00016C4.66634 9.84016 6.15967 11.3335 7.99967 11.3335C9.83967 11.3335 11.333 9.84016 11.333 8.00016C11.333 6.16016 9.83967 4.66683 7.99967 4.66683ZM7.99967 1.3335C4.31967 1.3335 1.33301 4.32016 1.33301 8.00016C1.33301 11.6802 4.31967 14.6668 7.99967 14.6668C11.6797 14.6668 14.6663 11.6802 14.6663 8.00016C14.6663 4.32016 11.6797 1.3335 7.99967 1.3335ZM7.99967 13.3335C5.05301 13.3335 2.66634 10.9468 2.66634 8.00016C2.66634 5.0535 5.05301 2.66683 7.99967 2.66683C10.9463 2.66683 13.333 5.0535 13.333 8.00016C13.333 10.9468 10.9463 13.3335 7.99967 13.3335Z" fill="#F00E0E"/>
                                                </svg>
                                                03:15
                                            </button>
                                        </div>
                                        <div className="top-chat-call-view-right">
                                            <div className="inn-top-chat-call-view-right">
                                                <div><img src={CallImg1} alt="" /></div>
                                                <div><img src={CallImg2} alt="" /></div>
                                                <div><img src={CallImg3} alt="" /></div>
                                                <div><img src={CallImg4} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-chat-call-view">
                                        <div className="inn-bottom-chat-call-view-left">
                                            <div className="volume">
                                                <input type="range" orient="vertical" />
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="inn-bottom-chat-call-view-right">
                                            <button>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 11H17.3C17.3 11.74 17.14 12.43 16.87 13.05L18.1 14.28C18.66 13.3 19 12.19 19 11ZM14.98 11.17C14.98 11.11 15 11.06 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V5.18L14.98 11.17ZM4.27 3L3 4.27L9.01 10.28V11C9.01 12.66 10.34 14 12 14C12.22 14 12.44 13.97 12.65 13.92L14.31 15.58C13.6 15.91 12.81 16.1 12 16.1C9.24 16.1 6.7 14 6.7 11H5C5 14.41 7.72 17.23 11 17.72V21H13V17.72C13.91 17.59 14.77 17.27 15.54 16.82L19.73 21L21 19.73L4.27 3Z" fill="white"/>
                                                </svg>
                                            </button>
                                            <button>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 9C10.4 9 8.85 9.25 7.4 9.72V12.82C7.4 13.21 7.17 13.56 6.84 13.72C5.86 14.21 4.97 14.84 4.18 15.57C4 15.75 3.75 15.85 3.48 15.85C3.2 15.85 2.95 15.74 2.77 15.56L0.29 13.08C0.11 12.91 0 12.66 0 12.38C0 12.1 0.11 11.85 0.29 11.67C3.34 8.78 7.46 7 12 7C16.54 7 20.66 8.78 23.71 11.67C23.89 11.85 24 12.1 24 12.38C24 12.66 23.89 12.91 23.71 13.09L21.23 15.57C21.05 15.75 20.8 15.86 20.52 15.86C20.25 15.86 20 15.75 19.82 15.58C19.03 14.84 18.13 14.22 17.15 13.73C16.82 13.57 16.59 13.23 16.59 12.83V9.73C15.15 9.25 13.6 9 12 9Z" fill="white"/>
                                                </svg>
                                            </button>
                                            <button>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 6.5L17 10.5V7C17 6.45 16.55 6 16 6H9.82L21 17.18V6.5ZM3.27 2L2 3.27L4.73 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.21 18 16.39 17.92 16.54 17.82L19.73 21L21 19.73L3.27 2Z" fill="white"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="message__box-component2 chat-call-right">
                                <div className="message__box-component2_header">
                                    <div className="chatBox__profile">
                                        <p>Group Participants</p>
                                    </div>
                                </div>
                                <div className="chat-messager-container">
                                    <div className="send-message-box group-chat-send-message-box">
                                        <ContextMenuTrigger id="some_unique_identifier">
                                        <div style={{ cursor: 'context-menu' }} className="inn-group-chat-send-message-box">
                                            <span style={{color: "#FC7300"}} className="replyName">Klaus</span>
                                            Hey, Devon. Can we get on a quick call?
                                        </div>
                                        </ContextMenuTrigger>
                                    </div>
                                    <div className="send-message-time-date">
                                        Saturday 11:50 PM
                                    </div>
                                    <div className="reply-message-box">
                                    <ContextMenuTrigger id="some_unique_identifier">
                                        <div className="inn-group-chat-reply-message-box2">
                                            <span style={{color: "#00237B"}} className="replyName">Damon</span>
                                            Hi, Emmie. Sure, but now I’m busy rn.
                                        </div>
                                    </ContextMenuTrigger>
                                        <div className="reply-message-ime-date">
                                            11:50 AM
                                        </div>
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
                                        <ContextMenuTrigger id="some_unique_identifier">
                                            <div className="inn-group-chat-reply-message-box2">
                                                <span style={{color: "#009BBC"}} className="replyName">Koyote Stark</span>
                                                Hi, Damola. Sure, but now I’m busy rn.
                                            </div>
                                        </ContextMenuTrigger>
                                        <div className="reply-message-ime-date">
                                            11:50 AM
                                        </div>
                                        <ContextMenuTrigger id="some_unique_identifier">
                                            <div style={{marginTop: 24}} className="inn-group-chat-reply-message-box2">
                                                <span style={{color: "#00237B"}} className="replyName">Femi</span>
                                                Hi, Emmie. Sure, but now I’m busy rn.
                                            </div>
                                        </ContextMenuTrigger>
                                        <div className="reply-message-ime-date">
                                            Saturday 11:50 PM
                                        </div>
                                    </div>
                                    <div className="send-message-box group-chat-send-message-box">
                                    <ContextMenuTrigger id="some_unique_identifier">
                                        <div className="inn-group-chat-send-message-box">
                                            <span style={{color: "#FC7300"}} className="replyName">Kareem</span>
                                            Okay, some other time, I guess.
                                        </div>
                                    </ContextMenuTrigger>
                                    </div>
                                    <div className="send-message-time-date">
                                        Saturday 11:50 PM
                                    </div>
                                    <div className="reply-message-box">
                                    <ContextMenuTrigger id="some_unique_identifier">
                                        <div className="inn-group-chat-reply-message-box2">
                                            <span style={{color: "#009BBC"}} className="replyName">Tola</span>
                                            Hey y’all, Burna new event is 
                                            coming up. Check out this new 
                                            link to register.
                                        </div>
                                    </ContextMenuTrigger>
                                    </div>
                                    <div className="reply-message-ime-date">
                                        11:50 AM
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
                                        <svg className="send__message-btn" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" rx="8" fill="#45B618"/>
                                            <path d="M34 15L23 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M34 15L27 35L23 26L14 22L34 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Menu className="right__click_menu" as={ContextMenu} id="some_unique_identifier" vertical>
                <MenuItem className="right__click_menu_links" data={"some_data"} onClick={handleClick}>
                    <Menu.Item>Star</Menu.Item>
                </MenuItem>

                <MenuItem className="right__click_menu_links" data={"some_data"} onClick={handleClick}>
                    <Menu.Item>Reply</Menu.Item>
                </MenuItem>

                <MenuItem className="right__click_menu_links" data={"some_data"} onClick={handleClick}>
                    <Menu.Item>Copy</Menu.Item>
                </MenuItem>

                <MenuItem className="right__click_menu_links" data={"some_data"} onClick={handleClick}>
                    <Menu.Item>Delete</Menu.Item>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default ChatCall;