import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import vid from "../../../../assets/images/profile/vid.png";
import add from "../../../../assets/images/profile/add.png";
import cal from "../../../../assets/images/profile/cal.png";
import share from "../../../../assets/images/profile/share.png";
import flower from "../../../../assets/images/profile/flower.png";
import clock from "../../../../assets/images/profile/clock.png";
import avatar4 from "../../../../assets/images/profile/avatar4.png";
import avatar5 from "../../../../assets/images/profile/avatar5.png";
import avatar6 from "../../../../assets/images/profile/avatar6.png";
import CreateEventModal from "../../../core-ui/CreateEventModal/CreateEventModal";
import JoinMeetingModal from "../../../core-ui/JoinMeetingModal/JoinMeetingModal";
import PresentScreenModal from "../../../core-ui/PresentScreenModal/PresentScreenModal";
import { useHistory, useLocation } from "react-router-dom";

import './Talent.css'

const avatars = [
    {
        img: avatar4
    },
    {
        img: avatar5
    },
    {
        img: avatar6
    },
    {
        img: avatar6
    },
    {
        img: avatar6
    },
    {
        img: avatar6
    },
    {
        img: avatar6
    },
    {
        img: avatar6
    },
    {
        img: avatar6
    },

]
const ManageTalent = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const history = useHistory();


    return (
        <section id="talent" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} lg={10} className="mx-auto bg-color">
                        <Row>
                            <Col xs={12} lg={6}>
                                <Row>
                                    <Col xs={6} className='p-2 p-md-4'>
                                        <Card style={{cursor: "pointer"}} onClick={() => setModalShow(true)} className="card-blue p-5">
                                            <div className="icon-bg text-center">
                                                <img src={vid} alt="vid" className='img-fluid img-bg' />
                                            </div>
                                            <h1 className='card-head'>New Meeting</h1>
                                            <p className='card-text'>set up new meeting</p>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='p-2 p-md-4'>
                                        <Card style={{cursor: "pointer"}} onClick={() => setModalShow2(true)} className="card-green p-5">
                                            <div className="icon-bg text-center">
                                                <img src={add} alt="add" className='img-fluid img-bg' />
                                            </div>
                                            <h1 className='card-head'>Join Meeting</h1>
                                            <p className='card-text'>via invitation link</p>
                                        </Card>
                                    </Col>
                                    <Col xs={6} className='p-2 p-md-4'>
                                        <Card style={{cursor: "pointer"}} onClick={() => {
                                                history.push("/profile/talent/ManageSchedule");
                                            }} className="card-green p-5">
                                            <div className="icon-bg text-center">
                                                <img src={cal} alt="cal" className='img-fluid img-bg' />
                                            </div>
                                            <h1 className='card-head'>Schedule</h1>
                                            <p className='card-text'>plan your meetings</p>
                                        </Card>
                                    </Col>
                                    <Col style={{cursor: "pointer"}} onClick={() => setModalShow3(true)} xs={6} className='p-2 p-md-4'>
                                        <Card className="card-green p-5">
                                            <div className="icon-bg text-center">
                                                <img src={share} alt="share" className='img-fluid img-bg' />
                                            </div>
                                            <h1 className='card-head'>Share Screen</h1>
                                            <p className='card-text'>show your work</p>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} lg={6} className="mx-auto p-4">
                                <div className='time-bg d-none d-lg-block'>
                                    <Row>
                                        <Col xs={6} className='p-5'>
                                            <h1 className='time'>10:30</h1>
                                            <p className='date-day'>Saturday, 11 September 2021</p>
                                        </Col>
                                        <Col xs={6}>
                                            <div className='bg-ig'>
                                                <img src={flower} alt="flower" className='img-fluid ms-5' />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='meet-bg p-4'>
                                    <h1 className='meet-head'>Vangold Daily Standup Meeting</h1>
                                    <p className='meet-text'><img src={clock} alt="clock" className='mb-1' /> 02:00 - 03:03 | starts in 02 hours</p>
                                    <div className='d-flex' style={{ marginTop: "4rem" }}>
                                        {avatars.slice(0, 3).map((avatar) => (
                                            <img src={avatar.img} alt="avatar" className='img-fluid me-3 avatar-dim' />
                                        ))}
                                        {avatars.length > 3 && (

                                            <div className='add-meet text-center pt-2 pt-md-3'>
                                                +{avatars.length - 3}
                                            </div>
                                        )}
                                        <div className='ms-auto'>
                                            <button className='meet-btn me-4'>ID</button>
                                            <button className='meet-btn1'>Start</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='meet-bg p-4'>
                                    <h1 className='meet-head'>Vangold Daily Standup Meeting</h1>
                                    <p className='meet-text'><img src={clock} alt="clock" className='mb-1' /> 02:00 - 03:03 | starts in 02 hours</p>
                                    <div className='d-flex' style={{ marginTop: "4rem" }}>
                                        {avatars.slice(0, 3).map((avatar) => (
                                            <img src={avatar.img} alt="avatar" className='img-fluid me-3 avatar-dim' />
                                        ))}
                                        <div className='ms-auto'>
                                            <button className='meet-btn me-4'>ID</button>
                                            <button className='meet-btn1'>Start</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <CreateEventModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                head="Create Event"
                btntext='Create Event' />
            <JoinMeetingModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                head="Join Meeting"
                btntext='Join' />
            <PresentScreenModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                head="Present"
                btntext='Present' />
        </section>
    );
}

export default ManageTalent;