import { Card, Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import pencil from "../../../../assets/images/profile/pencil.png";
import clip from "../../../../assets/images/profile/clip.png";
import rafiki from "../../../../assets/images/profile/rafiki.png";
import avatar from "../../../../assets/images/profile/avatar1.png";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import "./Jobs.css";
import { useState } from "react";
import ApplicantsApplied from "./ApplicantsApplied";

const applicantsList = [
    {
        id: 1,
        name: "Kali Jay",
        position: 'Designer',
        avatar: avatar
    },
    {
        id: 2,
        name: "Kali Jay",
        position: 'Designer',
        avatar: avatar,
        notification: 2
    },
    {
        id: 3,
        name: "Kali Jay",
        position: 'Designer',
        avatar: avatar
    },
    {
        id: 4,
        name: "Kali Jay",
        position: 'Designer',
        avatar: avatar
    }
]
const ProfileMyJob = ({ showSideMenu, setShowSideMenu }) => {
    const [applicant, setApplicant] = useState(applicantsList)
    return (
        <section id="my-job" className="my-5 py-3">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} lg={4} className="mx-auto bg-color-w p-4">
                        <Card className="my-job-card">
                            <div className="d-flex justify-content-between">
                                <h1 className="head">Website Designer</h1>
                                <div className="align-self-center">
                                    <img src={pencil} alt="pencil menu" className="img-fluid" />
                                </div>
                            </div>
                            <p className="text-16px">Lagos, Nigeria</p>
                            <Row className="mt-4">
                                <Col xs={12} md={6} className="mx-auto">
                                    <p className="text-16px mb-0" style={{ color: "#808080" }}>
                                        Budget
                                    </p>
                                    <p className="text-16px fw-bold">₦200,000-₦500,000</p>
                                </Col>
                                <Col xs={12} md={6} className="mx-auto">
                                    <p className="text-16px mb-0" style={{ color: "#808080" }}>
                                        Category
                                    </p>
                                    <p className="text-16px fw-bold">Product Design</p>
                                </Col>
                            </Row>
                            <p className="fw-bold fs-1 fs-lg-3 mt-4">Description</p>
                            <p className="text-16px" style={{ color: "#333333" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Scelerisque egestas leo tempor in ut eget. Euismod et
                                scelerisque aliquam viverra. Vel, nullam pellentesque neque,
                                elit ut cras vitae. Facilisis non sit elit quis consectetur
                                lobortis. Mollis fusce nibh elementum eget bibendum quam proin.
                                Arcu lacus mauris pellentesque in risus. Consectetur cras
                                adipiscing accumsan, lacus id a. Nibh dictum eget amet nec
                                ultricies purus porttitor pretium. Dignissim ridiculus molestie
                                vestibulum suscipit at tempus.
                            </p>
                            <p className="text-16px mb-0 mt-4" style={{ color: "#808080" }}>POSTED ON</p>
                            <p className="text-16px fw-bold">Aug 03, 2021 10:00PM </p>
                            <p className="text-16px mt-4" style={{ color: "#808080" }}>SHARE THIS</p>
                            <div className="d-flex mb-5">
                                <div>
                                    <FaFacebook className='fb' />
                                </div>
                                <div>
                                    <AiOutlineTwitter className='twit' />
                                </div>
                                <div>
                                    <img src={clip} alt="clip" />
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={12} lg={6} className="mx-auto bg-color-w py-4 ps-4 pe-4 pe-lg-5">
                        <Card className="my-job-card-1">
                            {
                                applicant &&
                                <>
                                    <div className="text-center">
                                        <h1 className="head mb-4">4 Applicants applied</h1>
                                    </div>
                                    <hr style={{ border: "1px solid #0000004D" }} />
                                </>
                            }
                            {
                                applicant ? applicant.map((appli) => (
                                    <ApplicantsApplied key={appli.id} {...appli} />
                                ))
                                    : (
                                        <div className="text-center" style={{ margin: "10rem 0" }}>
                                            <div>
                                                <img src={rafiki} alt="rafiki" className="img-fluid" />
                                            </div>
                                            <p className="fw-bold fs-4 mt-5 mb-4">0 Applicants applied</p>
                                            <p className="fs-4" style={{ color: "#333333" }}>Don’t worry. People will notice the join
                                                soon. Invite people.</p>
                                        </div>
                                    )
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProfileMyJob;
