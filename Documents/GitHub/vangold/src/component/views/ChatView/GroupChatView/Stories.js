import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap"
import SideMenu from "../../../core-ui/SideMenu/SideMenu"
import avatar from "../../../../assets/images/stories/Ellipse1518.png";
import avatar2 from "../../../../assets/images/stories/Ellipse1519.png";
import avatar3 from "../../../../assets/images/stories/Ellipse1520.png";
import avatar4 from "../../../../assets/images/stories/Ellipse1521.png";
import avatar5 from "../../../../assets/images/stories/Ellipse1522.png";
import avatar6 from "../../../../assets/images/stories/Ellipse1523.png";
import backgroundImg1 from "../../../../assets/images/stories/Rectangle9135.png";
import backgroundImg2 from "../../../../assets/images/stories/Rectangle9131.png";
import backgroundImg3 from "../../../../assets/images/stories/Rectangle9135-1.png";
import backgroundImg4 from "../../../../assets/images/stories/Rectangle9137.png";
import backgroundImg5 from "../../../../assets/images/stories/Rectangle9136.png";
import backgroundImg6 from "../../../../assets/images/stories/Rectangle9138.png";
import '../ChatComponent.css';
import '../ChatComponent2.css';

const userStoriesData = [
    {
        avatar: avatar,
        backgroundImg: backgroundImg1,
        userName: "Adam Sandler"
    },
    {
        avatar: avatar2,
        backgroundImg: backgroundImg2,
        userName: "Adam Sandler"
    },
    {
        avatar: avatar3,
        backgroundImg: backgroundImg3,
        userName: "Adam Sandler"
    },
    {
        avatar: avatar4,
        backgroundImg: backgroundImg4,
        userName: "Adam Sandler"
    },
    {
        avatar: avatar5,
        backgroundImg: backgroundImg5,
        userName: "Adam Sandler"
    },
    {
        avatar: avatar6,
        backgroundImg: backgroundImg6,
        userName: "Adam Sandler"
    },
] 

const Stories = () => {

    return (
        <div id="chat-component" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="chat__container-header stories-header">
                            <p className="chat__container-title">Stories</p>
                            <button>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#45B618"/>
                                </svg>
                                Add Story
                            </button>
                        </div>
                        <div className="stories__box__contaniner">
                            <div className="stories__container">
                                {
                                    userStoriesData.map((userData) => (
                                                <div className="stories-show-box">
                                                    <img className="backgroundImg" src={userData.backgroundImg} alt="stories avatar" />
                                                    <div className="stories-profile-details">
                                                        <img className="chat__avatar" src={userData.avatar} alt="stories avatar" />
                                                        <p className="chat__users_name">{userData.userName}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stories;