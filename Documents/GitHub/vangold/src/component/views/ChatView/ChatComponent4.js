import { Col, Container, Row } from "react-bootstrap"
import SideMenu from "../../core-ui/SideMenu/SideMenu"
import avatar from "../../../assets/images/avatar/Ellipse7.png";
import chatUsersAvatar from "../../../assets/images/avatar/Ellipse8.png";
import messageBoxImg from "../../../assets/images/chat/Rectangle9160.png";
import  CallImg from "../../../assets/images/chat/89889.PNG";
import './ChatComponent.css'

const chatUserData = {
    userAvatar: avatar
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
const ChatComponentFour = () => {
  
    return (
        <div id="chat-component" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="chat__container-header">
                            <p className="chat__container-title">Inbox</p>
                            <p className="chat__container-subtitle">Read, respond and respond to messages</p>
                        </div>
                        <div className="chat__box__contaniner">
                            <div className="chat__box__contaniner-left">
                                <div className="personal__avatar">
                                    <img className="chat__avatar" src={chatUserData.userAvatar} alt="fff"/>

                                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#333333"/>
                                    </svg>
                                </div>
                                <div className="chat__search_box--user-avatar">
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
                                                    <img className="chat__avatar" src={userChatData.usersAvatar} alt="chat avatar" />
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
                            <div className="Call_-_box-container">
                                <img src={messageBoxImg} alt="messageBoxImg" />
                                <div className="Call_-_box-container-top">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.5" y="1.5" width="33" height="33" rx="2.5" stroke="white" stroke-width="3"/>
                                        <path d="M21.41 13.41L20 12L14 18L20 24L21.41 22.59L16.83 18L21.41 13.41Z" fill="#45B618"/>
                                    </svg>
                                    <button disabled>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.00065 4.66659C6.16065 4.66659 4.66732 6.15992 4.66732 7.99992C4.66732 9.83992 6.16065 11.3333 8.00065 11.3333C9.84065 11.3333 11.334 9.83992 11.334 7.99992C11.334 6.15992 9.84065 4.66659 8.00065 4.66659ZM8.00065 1.33325C4.32065 1.33325 1.33398 4.31992 1.33398 7.99992C1.33398 11.6799 4.32065 14.6666 8.00065 14.6666C11.6807 14.6666 14.6673 11.6799 14.6673 7.99992C14.6673 4.31992 11.6807 1.33325 8.00065 1.33325ZM8.00065 13.3333C5.05398 13.3333 2.66732 10.9466 2.66732 7.99992C2.66732 5.05325 5.05398 2.66659 8.00065 2.66659C10.9473 2.66659 13.334 5.05325 13.334 7.99992C13.334 10.9466 10.9473 13.3333 8.00065 13.3333Z" fill="#F00E0E"/>
                                        </svg>
                                        <span>03:15</span>
                                    </button>
                                    <img src={CallImg} alt="CallImg" />
                                </div>
                                <div className="Call_-_box-container-bottom">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.5"/>
                                        <path d="M31 23H29.3C29.3 23.74 29.14 24.43 28.87 25.05L30.1 26.28C30.66 25.3 31 24.19 31 23ZM26.98 23.17C26.98 23.11 27 23.06 27 23V17C27 15.34 25.66 14 24 14C22.34 14 21 15.34 21 17V17.18L26.98 23.17ZM16.27 15L15 16.27L21.01 22.28V23C21.01 24.66 22.34 26 24 26C24.22 26 24.44 25.97 24.65 25.92L26.31 27.58C25.6 27.91 24.81 28.1 24 28.1C21.24 28.1 18.7 26 18.7 23H17C17 26.41 19.72 29.23 23 29.72V33H25V29.72C25.91 29.59 26.77 29.27 27.54 28.82L31.73 33L33 31.73L16.27 15Z" fill="white"/>
                                    </svg>
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="32" r="32" fill="#E22020"/>
                                        <path d="M32 29C30.4 29 28.85 29.25 27.4 29.72V32.82C27.4 33.21 27.17 33.56 26.84 33.72C25.86 34.21 24.97 34.84 24.18 35.57C24 35.75 23.75 35.85 23.48 35.85C23.2 35.85 22.95 35.74 22.77 35.56L20.29 33.08C20.11 32.91 20 32.66 20 32.38C20 32.1 20.11 31.85 20.29 31.67C23.34 28.78 27.46 27 32 27C36.54 27 40.66 28.78 43.71 31.67C43.89 31.85 44 32.1 44 32.38C44 32.66 43.89 32.91 43.71 33.09L41.23 35.57C41.05 35.75 40.8 35.86 40.52 35.86C40.25 35.86 40 35.75 39.82 35.58C39.03 34.84 38.13 34.22 37.15 33.73C36.82 33.57 36.59 33.23 36.59 32.83V29.73C35.15 29.25 33.6 29 32 29Z" fill="white"/>
                                    </svg>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.5"/>
                                        <path d="M33 18.5L29 22.5V19C29 18.45 28.55 18 28 18H21.82L33 29.18V18.5ZM15.27 14L14 15.27L16.73 18H16C15.45 18 15 18.45 15 19V29C15 29.55 15.45 30 16 30H28C28.21 30 28.39 29.92 28.54 29.82L31.73 33L33 31.73L15.27 14Z" fill="white"/>
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

export default ChatComponentFour;