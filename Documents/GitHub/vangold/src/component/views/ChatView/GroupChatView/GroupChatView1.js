import React, {useState}  from 'react';
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import avatar from "../../../../assets/images/avatar/Ellipse7.png";
import avatarTwo from "../../../../assets/images/profile/Rectangle9112-5.png";
import chatUsersAvatar from "../../../../assets/images/avatar/Ellipse8.png";
import '../ChatComponent.css';
import Stories from "./Stories";
import ChatBoxTwo from "../../../core-ui/AllMessagesBox/ChatBoxTwo";
import { useHistory } from "react-router-dom";  


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
        messages: 'Hi our deadlines are...',
    },
    {
        avatar: avatar,
        usersAvatar: chatUsersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
        title2: 'Frontend Developer',
        title3: 'Backend Developer',
        messages: 'Hi our deadlines are...',
    },
    {
        avatar: avatar,
        usersAvatar: chatUsersAvatar,
        userName: 'Kali Jay',
        title: 'Designer',
        title2: 'Frontend Developer',
        title3: 'Backend Developer',
        messages: 'Hi our deadlines are...',
    },
]

const GroupChatViewOne = ({ showSideMenu, setShowSideMenu }) => {
    const [seeMessage, setSeeMessage] = useState(false);
    const history = useHistory();

    return (
        <div id="chat-component" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu  showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <Stories />
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
                                        <p disabled className="group_chat-user_name">Nene Asukwuo</p>
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
                                        <div className="d-none d-lg-block">
                                            {
                                                otherUsersData.map((userChatData) => (
                                                    <div onClick={() => {
                                                            setSeeMessage(true);
                                                        }} className="chat__component_users-data">
                                                        <img className="chat__avatar" src={userChatData.usersAvatar} alt="chat avatar" />
                                                        <div className="userChatData">
                                                            <span className="chat__users_name">{userChatData.userName}</span>
                                                            <span className="chat__users_title">{userChatData.title}</span>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="d-lg-none">
                                            {
                                                otherUsersData.map((userChatData) => (
                                                    <div onClick={() => {
                                                            history.push("/profile/g-chat-user")
                                                        }} className="chat__component_users-data">
                                                        <img className="chat__avatar" src={userChatData.usersAvatar} alt="chat avatar" />
                                                        <div className="userChatData">
                                                            <span className="chat__users_name">{userChatData.userName}</span>
                                                            <span className="chat__users_title">{userChatData.title}</span>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="message__box-component2">
                                <ChatBoxTwo />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default GroupChatViewOne;