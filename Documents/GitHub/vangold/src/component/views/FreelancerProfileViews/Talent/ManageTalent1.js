import { Card, Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import ManageTalentDropDown from "../../../core-ui/ManageTalentSiderBarDropDown/ManageTalentSiderBarDropDown";
import { useState } from "react";
import Image1 from "../../../../assets/images/manage-talents/Rectangle9205.png"
import Image2 from "../../../../assets/images/manage-talents/Rectangle92062.png"
import Image3 from "../../../../assets/images/manage-talents/Rectangle92061.png"
import Image4 from "../../../../assets/images/manage-talents/Rectangle92063.png"
import './Talent.css'

const cards = [
    {
        
    }
] 

const ManageTalent1 = () => {

    return (
        <section id="talent" className="my-3 manage_-_Talent py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="manage__talent">
                            <div className="manage__talent-left">
                                <div className="manage__talent-left-top">
                                    <div className="manage__talent-left-top-bottom">
                                        <button disabled>Brian Lukas <button disabled className="dot"></button></button>
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" rx="8" fill="#45B618"/>
                                            <path d="M24 26C25.66 26 26.99 24.66 26.99 23L27 17C27 15.34 25.66 14 24 14C22.34 14 21 15.34 21 17V23C21 24.66 22.34 26 24 26ZM29.3 23C29.3 26 26.76 28.1 24 28.1C21.24 28.1 18.7 26 18.7 23H17C17 26.41 19.72 29.23 23 29.72V33H25V29.72C28.28 29.24 31 26.42 31 23H29.3Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <img src={Image1} alt="dhhdh" />
                                </div>
                                <div className="manage__talent-left-bottom">
                                    <div>
                                        <div className="manage__talent-left-bottom-bottom">
                                            <button disabled>Brian Lukas <button disabled className="dot"></button></button>
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="36" height="36" rx="8" fill="#45B618"/>
                                                <path d="M18 20C19.66 20 20.99 18.66 20.99 17L21 11C21 9.34 19.66 8 18 8C16.34 8 15 9.34 15 11V17C15 18.66 16.34 20 18 20ZM23.3 17C23.3 20 20.76 22.1 18 22.1C15.24 22.1 12.7 20 12.7 17H11C11 20.41 13.72 23.23 17 23.72V27H19V23.72C22.28 23.24 25 20.42 25 17H23.3Z" fill="white"/>
                                            </svg>

                                        </div>
                                        <img src={Image2} alt="juu" />
                                    </div>
                                    <div>
                                        <div className="manage__talent-left-bottom-bottom">
                                            <button disabled>Brian Lukas <button disabled className="dot"></button></button>
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="36" height="36" rx="8" fill="white" fill-opacity="0.3"/>
                                                <path d="M25 17H23.3C23.3 17.74 23.14 18.43 22.87 19.05L24.1 20.28C24.66 19.3 25 18.19 25 17ZM20.98 17.17C20.98 17.11 21 17.06 21 17V11C21 9.34 19.66 8 18 8C16.34 8 15 9.34 15 11V11.18L20.98 17.17ZM10.27 9L9 10.27L15.01 16.28V17C15.01 18.66 16.34 20 18 20C18.22 20 18.44 19.97 18.65 19.92L20.31 21.58C19.6 21.91 18.81 22.1 18 22.1C15.24 22.1 12.7 20 12.7 17H11C11 20.41 13.72 23.23 17 23.72V27H19V23.72C19.91 23.59 20.77 23.27 21.54 22.82L25.73 27L27 25.73L10.27 9Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <img src={Image3} alt="juu" />
                                    </div>
                                    <div>
                                        <div className="manage__talent-left-bottom-bottom">
                                            <button disabled>Brian Lukas <button disabled className="dot"></button></button>
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="36" height="36" rx="8" fill="white" fill-opacity="0.3"/>
                                                <path d="M25 17H23.3C23.3 17.74 23.14 18.43 22.87 19.05L24.1 20.28C24.66 19.3 25 18.19 25 17ZM20.98 17.17C20.98 17.11 21 17.06 21 17V11C21 9.34 19.66 8 18 8C16.34 8 15 9.34 15 11V11.18L20.98 17.17ZM10.27 9L9 10.27L15.01 16.28V17C15.01 18.66 16.34 20 18 20C18.22 20 18.44 19.97 18.65 19.92L20.31 21.58C19.6 21.91 18.81 22.1 18 22.1C15.24 22.1 12.7 20 12.7 17H11C11 20.41 13.72 23.23 17 23.72V27H19V23.72C19.91 23.59 20.77 23.27 21.54 22.82L25.73 27L27 25.73L10.27 9Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <img src={Image4} alt="juu" />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="manage__talent-right">
                                <ManageTalentDropDown />
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
        </section>
    );
}

export default ManageTalent1;