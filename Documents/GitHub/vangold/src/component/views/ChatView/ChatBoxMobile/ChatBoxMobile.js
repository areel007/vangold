import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap"
import SideMenu from "../../../core-ui/SideMenu/SideMenu"
import avatar from "../../../../assets/images/avatar/Ellipse7.png";
import avatarTwo from "../../../../assets/images/profile/Rectangle9112-5.png"
import participantsAvatar1 from "../../../../assets/images/avatar/Ellipse-7.png";
import participantsAvatar2 from "../../../../assets/images/avatar/Ellipse-7-1.png";
import participantsAvatar3 from "../../../../assets/images/avatar/Ellipse-7-2.png";
import participantsAvatar4 from "../../../../assets/images/avatar/Ellipse-7-3.png";
import MobileMessageOne from "../../../core-ui/Messages/MobileMessages1";
import '../ChatComponent.css';
import useOnclickOutside from "react-cool-onclickoutside";
import { Menu } from "semantic-ui-react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const handleClick = (e, data) => {
    console.log(data);
  };
  
const chatUserData = {
    userAvatar: avatar,
    userAvatarTwo: avatarTwo
}

const groupChatParticipantsUsersData = [
    {
        usersAvatar: participantsAvatar1,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
    {
        usersAvatar: participantsAvatar2,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
    {
        usersAvatar: participantsAvatar3,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
    {
        usersAvatar: participantsAvatar4,
        userName: 'Kali Jay',
        messages: 'Hi our deadlines are...',
    },
]

const ChatBoxMobile = () => {
    const [isShow, setIsShow] = React.useState(false);
    const [isShow2, setIsShow2] = React.useState(false);

        const openPopover = () => {
            setIsShow(!isShow);
        };

        const closePopover = () => {
            setIsShow(false);
        };

        const ref = useOnclickOutside(() => {
            setIsShow(false);
        });
        const openParticantsPopover = () => {
            setIsShow2(!isShow2);
        };

        const closeParticantsPopover = () => {
            setIsShow2(false);
        };
  
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
                                    {isShow &&
                                        <div ref={ref} class="popoverBox arrow-top">
                                            <div className="popover__close-btns">
                                                <svg onClick={closePopover} style={{cursor: "pointer"}} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.7501 10L14.9996 13.75L11.2499 10L10 11.25L13.7497 15L10 18.75L11.2499 20L14.9996 16.25L18.7501 20L20 18.75L16.2503 15L20 11.25L18.7501 10Z" fill="black"/>
                                                    <circle cx="14.5" cy="14.5" r="13.5" stroke="black" stroke-width="2"/>
                                                </svg>
                                            </div>
                                            <div className="popover__links">
                                                <Link onClick={() => { closePopover(); openParticantsPopover();}} to="#">Group Participant</Link>
                                                <Link onClick={closePopover} to="#">Search</Link>
                                                <Link onClick={closePopover} to="#">Report Group</Link>
                                                <Link onClick={closePopover} to="#">Exit Group</Link>
                                            </div>                                     
                                        </div>
                                    }  
                                    {isShow2 &&
                                        <div ref={ref} class="popover__participants">
                                            <div className="popover__participants-header">
                                                <span>Group Participants</span>
                                                <div className="popover__close-btns participants__close-btns">
                                                    <svg onClick={closeParticantsPopover} style={{cursor: "pointer"}} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.7501 10L14.9996 13.75L11.2499 10L10 11.25L13.7497 15L10 18.75L11.2499 20L14.9996 16.25L18.7501 20L20 18.75L16.2503 15L20 11.25L18.7501 10Z" fill="black"/>
                                                        <circle cx="14.5" cy="14.5" r="13.5" stroke="black" stroke-width="2"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="popover__participants__links">
                                                <div className="popover__partcipants_link__header">
                                                    <span>70  Participants</span>
                                                    <svg style={{cursor: "pointer"}} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.33268 13.9993C8.81183 13.999 10.2484 13.5039 11.4135 12.5927L15.0768 16.256L16.2552 15.0777L12.5919 11.4143C13.5035 10.2491 13.999 8.81221 13.9993 7.33268C13.9993 3.65685 11.0085 0.666016 7.33268 0.666016C3.65685 0.666016 0.666016 3.65685 0.666016 7.33268C0.666016 11.0085 3.65685 13.9993 7.33268 13.9993ZM7.33268 2.33268C10.0902 2.33268 12.3327 4.57518 12.3327 7.33268C12.3327 10.0902 10.0902 12.3327 7.33268 12.3327C4.57518 12.3327 2.33268 10.0902 2.33268 7.33268C2.33268 4.57518 4.57518 2.33268 7.33268 2.33268Z" fill="#333333"/>
                                                    </svg>
                                                </div>
                                                {
                                                    groupChatParticipantsUsersData.map((groupParticipantsUsersData) => (
                                                        <div className="chat__group__component_participants-data">
                                                            <img className="chat__avatar" src={groupParticipantsUsersData.usersAvatar} alt="chat Avatar" />
                                                            <div className="userChatData">
                                                                <p className="chat__users_name">{groupParticipantsUsersData.userName}</p>
                                                                <p className="chat__users_title">{groupParticipantsUsersData.messages}</p>
                                                            </div>
                                                            <button className="choose-group-admin-button">Group Admin</button>
                                                        </div>
                                                    ))
                                                }
                                            </div>                                     
                                        </div>
                                    }  
                                </div>
                                <MobileMessageOne />
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

export default ChatBoxMobile;