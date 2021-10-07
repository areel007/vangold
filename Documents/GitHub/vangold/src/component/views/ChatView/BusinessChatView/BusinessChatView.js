import React, {useState} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import BusinessSideBarDropDown from "../../../core-ui/BusinessSideBarDropDown/BusinessSideBarDropDown1";
import participantsAvatar1 from "../../../../assets/images/avatar/Ellipse-7.png";
import participantsAvatar2 from "../../../../assets/images/avatar/Ellipse-7-1.png";
import participantsAvatar3 from "../../../../assets/images/avatar/Ellipse-7-2.png";
import participantsAvatar4 from "../../../../assets/images/avatar/Ellipse-7-3.png";
import Avatar1 from "../../../../assets/images/business-chat-content/Ellipse1531.png";
import Avatar2 from "../../../../assets/images/business-chat-content/Group43951.png";
import Avatar3 from "../../../../assets/images/business-chat-content/Ellipse1533.png";
import Avatar4 from "../../../../assets/images/business-chat-content/Group43952.png";
import ChatBoxFive from "../../../core-ui/AllMessagesBox/ChatBoxFive";
import "./BusinessChatView.css";

const BusinessChatView = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const toggleTwo = () => setIsOpenTwo(!isOpenTwo);

    const closePopover = () => {
        setIsOpen(false);
    };

    const closePopoverTwo = () => {
        setIsOpenTwo(false);
    };


    
    const userMembersAdmin = [
        {
            usersAvatar: participantsAvatar1,
            userName: 'Kali Jay',
            messages: 'Hi our deadlines are...',
        },
    ]
    const userMembers = [
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
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="business__chat__searchBox">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#808080"/>
                            </svg>

                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="business-chat-container">
                            <div className="sideBarBusinessChat">
                                <div className="business__channel-header mobile__business__channel-header">
                                    <div className="business__channel-header-left">
                                        <h2>Channel</h2>
                                    </div>
                                </div>
                                <BusinessSideBarDropDown />
                            </div>
                            <div className="business-chat-view">
                                <ChatBoxFive />
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default BusinessChatView;
