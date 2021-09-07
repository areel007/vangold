import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap"
import SideMenu from "../../../core-ui/SideMenu/SideMenu"
import avatar from "../../../../assets/images/avatar/Ellipse7.png";
import avatarTwo from "../../../../assets/images/profile/Rectangle9112-5.png"
import chatUsersAvatar from "../../../../assets/images/avatar/Ellipse8.png";
import '../ChatComponent.css';
import useOnclickOutside from "react-cool-onclickoutside";

const chatUserData = {
    userAvatar: avatar,
    userAvatarTwo: avatarTwo
}

const otherUsersData = [
    {
        avatar: avatar,
        usersAvatar: chatUsersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
        title2: 'Frontend Developer',
        title3: 'Backend Developer',
    },
    {
        avatar: avatar,
        usersAvatar: chatUsersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
        title2: 'Frontend Developer',
        title3: 'Backend Developer',
    },
    {
        avatar: avatar,
        usersAvatar: chatUsersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
        title2: 'Frontend Developer',
        title3: 'Backend Developer',
    },
]

const GroupChatComponentThree = () => {
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
        <div id="chat-component" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="chat__container-header">
                            <p className="chat__container-title">Inbox</p>
                            <p className="chat__container-subtitle">Read, respond and respond to messages</p>
                        </div>
                        <div className="chat__box__contaniner">
                            <div className="chat__box__contaniner-left">
                                <div className="group-chat-personal__avatar">
                                    <div className="inn-group-chat-personal__avatar">
                                        <div className="group-chat-avatar_-_img">
                                            <div className="inn-group-chat-avatar_-_img">
                                                <img src={chatUserData.userAvatarTwo} alt="avatar two" />
                                            </div>
                                        </div>
                                        <p className="group_chat-user_name">Nene Asukwuo</p>
                                        <p className="group_chat-my-acct-link_text">My acount</p>
                                    </div>
                                </div>
                                <div className="direct-group-text">
                                    <Link to="#">Direct Message</Link>
                                    <Link to="#">Group Message</Link>
                                </div>
                                <div className="chat__search_box--user-avatar group-chat__search_box--user-avatar">
                                    <div className="chat__search-box">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.2028 9.85162C11.1006 9.74942 11.0866 9.57302 11.165 9.45122C11.781 8.50342 12.1422 7.37502 12.1422 6.16262C12.1422 2.81382 9.4178 0.0908203 6.0718 0.0908203C2.723 0.0908203 0 2.81382 0 6.16262C0 9.51002 2.723 12.233 6.0718 12.233C7.3752 12.233 8.582 11.8144 9.5732 11.1116C9.6894 11.0276 9.8644 11.0388 9.9666 11.1396L12.1366 13.3096C12.1506 13.3236 12.166 13.3376 12.1814 13.3488C12.2066 13.3698 12.3116 13.4678 12.4124 13.57L12.67 13.8262C12.7722 13.927 12.9374 13.927 13.0382 13.8262L13.923 12.9414C14.0252 12.8392 14.0252 12.674 13.9244 12.5718L11.2028 9.85162ZM9.744 8.99062C9.5438 9.25102 9.3184 9.48902 9.0692 9.70042C8.26 10.3878 7.2142 10.805 6.0718 10.805C3.5112 10.805 1.428 8.72182 1.428 6.16262C1.428 3.60342 3.5112 1.51882 6.0718 1.51882C8.631 1.51882 10.7142 3.60202 10.7142 6.16262C10.7142 7.22662 10.3488 8.20662 9.744 8.99062Z" fill="#4F4F4F"/>
                                        </svg>
                                        <input type="text" placeholder="Type contact name" />
                                    </div>
                                    <div className="users__chat__avatar">
                                        {
                                            otherUsersData.map((userChatData) => (
                                                <div className="chat__component_users-data">
                                                    <img className="chat__avatar" src={userChatData.usersAvatar} alt="chat Avatar" />
                                                    <div className="userChatData">
                                                        <p className="chat__users_name">{userChatData.userName}</p>
                                                        <p className="chat__users_title">{userChatData.title}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="message__box-component2">
                                <div className="message__box-component2_header">
                                    <div className="chatBox__profile">
                                        <img className="chat__avatar" src={chatUserData.userAvatar} alt="fff"/>
                                        <p>VanGold Website Design</p>
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
                                                <Link onClick={closePopover} to="#">Group Participant</Link>
                                                <Link onClick={closePopover} to="#">Search</Link>
                                                <Link onClick={closePopover} to="#">Report Group</Link>
                                                <Link onClick={closePopover} to="#">Exit Group</Link>
                                            </div>                                     
                                        </div>
                                    }  
                                </div>
                                <div className="chat-messager-container">
                                    <div className="send-message-box group-chat-send-message-box">
                                        <div className="inn-group-chat-send-message-box">
                                            <span style={{color: "#FC7300"}} className="replyName">Klaus</span>
                                            Hey, Devon. Can we get on a quick call?
                                        </div>
                                    </div>
                                    <div className="send-message-time-date">
                                        Saturday 11:50 PM
                                    </div>
                                    <div className="reply-message-box">
                                        <div className="inn-group-chat-reply-message-box2">
                                            <span style={{color: "#00237B"}} className="replyName">Damon</span>
                                            Hi, Emmie. Sure, but now I’m busy rn.
                                        </div>
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
                                        <div className="inn-group-chat-reply-message-box2">
                                            <span style={{color: "#009BBC"}} className="replyName">Koyote Stark</span>
                                            Hi, Damola. Sure, but now I’m busy rn.
                                        </div>
                                        <div className="reply-message-ime-date">
                                            11:50 AM
                                        </div>
                                        <div style={{marginTop: 24}} className="inn-group-chat-reply-message-box2">
                                            <span style={{color: "#00237B"}} className="replyName">Femi</span>
                                            Hi, Emmie. Sure, but now I’m busy rn.
                                        </div>
                                        <div className="reply-message-ime-date">
                                            Saturday 11:50 PM
                                        </div>
                                    </div>
                                    <div className="send-message-box group-chat-send-message-box">
                                        <div className="inn-group-chat-send-message-box">
                                            <span style={{color: "#FC7300"}} className="replyName">Kareem</span>
                                            Okay, some other time, I guess.
                                        </div>
                                    </div>
                                    <div className="send-message-time-date">
                                        Saturday 11:50 PM
                                    </div>
                                    
                                    <div className="inn-group-chat-reply-message-box2">
                                        <span style={{color: "#009BBC"}} className="replyName">Tola</span>
                                        Hey y’all, Burna new event is 
                                        coming up. Check out this new 
                                        link to register.
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
        </div>
    );
}

export default GroupChatComponentThree;