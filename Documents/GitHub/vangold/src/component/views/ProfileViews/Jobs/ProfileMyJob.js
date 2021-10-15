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
        <>
            <div className="dashboard_mobile_searchBar px-4">
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none">
                    <path d="M11.2028 9.85162C11.1006 9.74942 11.0866 9.57302 11.165
                    9.45122C11.781 8.50342 12.1422 7.37502 12.1422 6.16262C12.1422
                    2.81382 9.4178 0.0908203 6.0718 0.0908203C2.723 0.0908203 0 2.81382
                    0 6.16262C0 9.51002 2.723 12.233 6.0718 12.233C7.3752 12.233 8.582
                    11.8144 9.5732 11.1116C9.6894 11.0276 9.8644 11.0388 9.9666 11.1396L12.1366
                    13.3096C12.1506 13.3236 12.166 13.3376 12.1814 13.3488C12.2066 13.3698
                    12.3116 13.4678 12.4124 13.57L12.67 13.8262C12.7722 13.927 12.9374
                    13.927 13.0382 13.8262L13.923 12.9414C14.0252 12.8392 14.0252 12.674
                    13.9244 12.5718L11.2028 9.85162ZM9.744 8.99062C9.5438 9.25102 9.3184
                    9.48902 9.0692 9.70042C8.26 10.3878 7.2142 10.805 6.0718 10.805C3.5112
                    10.805 1.428 8.72182 1.428 6.16262C1.428 3.60342 3.5112 1.51882 6.0718
                    1.51882C8.631 1.51882 10.7142 3.60202 10.7142 6.16262C10.7142 7.22662
                    10.3488 8.20662 9.744 8.99062Z" fill="#4F4F4F"
                    />
                </svg>
                <input type="text" placeholder="Search..." />
            </div>
            <section id="my-job">
                <Container fluid>
                    <Row>
                        <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                            <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                        </Col>
                        <Col xs={12} lg={4} className="mx-auto bg-colorr-w pb-5 p-lg-4">
                            <Card className="my-job-card">
                                <div className="d-flex justify-content-between">
                                    <h1 className="head-wb">Website Designer</h1>
                                    <div className="mt-1">
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
                        <Col xs={12} lg={6} className="mx-auto bg-colorr-w pb-4 pt-lg-4 ps-4 pe-4 pe-lg-5">
                            <Card className="my-job-card-1">
                                {
                                    applicant &&
                                    <>
                                        <div className="text-lg-center">
                                            <h1 className="applic-head mb-4">{applicant.length > 0 ? `Applicantions (${applicant.length})` : "Applicantion"}</h1>
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
        </>
    );
};

export default ProfileMyJob;
