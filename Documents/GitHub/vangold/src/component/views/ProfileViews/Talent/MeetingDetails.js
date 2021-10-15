import { Card, Col, Container, Row } from "react-bootstrap"
import SideMenu from "../../../core-ui/SideMenu/SideMenu"
import clock from "../../../../assets/images/profile/clock.png";
import add from "../../../../assets/images/profile/add.png";
import user1 from "../../../../assets/images/profile/user1.png";
import pencil1 from "../../../../assets/images/profile/pencil1.png";
import dustbin from "../../../../assets/images/profile/dustbin.png";
import avatar4 from "../../../../assets/images/profile/avatar4.png";
import avatar5 from "../../../../assets/images/profile/avatar5.png";
import avatar6 from "../../../../assets/images/profile/avatar6.png";
import './Talent.css'

const persons = [
    {
        id: 1,
        img: avatar4,
        name: "Vivian Miles"
    },
    {
        id: 2,
        img: avatar5,
        name: "Jackie Robinsin"
    },
    {
        id: 3,
        img: avatar6,
        name: "Clark Griffen"
    },
]

const MeetingDetails = ({ showSideMenu, setShowSideMenu }) => {

    return (
        <section id="talent" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto mt-lg-5 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <h1 className='meeting-head'>Vangold Daily Standup Meeting</h1>
                        <p className='meeting-text'><img src={clock} alt="clock" className='mb-1' /> 02:00 - 03:03 | starts in 02 hours</p>

                        <div className='d-lg-flex' style={{ marginTop: "4rem" }}>
                            <div className='mb-4'>
                                <button className='meeting-btn me-4'>Start</button>
                                <button className='meeting-btn1 me-4'>Copy Invitation</button>
                            </div>
                            <div>
                                <button className='meeting-btn1 me-4'><img src={pencil1} alt="pencil" /></button>
                                <button className='meeting-btn1'><img src={dustbin} alt="dustbin" /></button>
                            </div>
                        </div>
                        <Row style={{ marginTop: "4rem" }}>
                            <Col xs={10} md={6} >
                                <p className='meeting-text'>The purpose of this meeting is to discuss the progress of the job done so far and to set a timeline for the launch of the feature.</p>
                            </Col>
                        </Row>

                        <div className='meeting-id'>
                            <h1 className='meet-id-head'>Meeting ID</h1>
                            <p className='meet-id-code'>969 042 3871</p>
                        </div>
                        <div className='d-flex' style={{ marginTop: "4rem" }}>
                            <div className='add-meet text-center'>
                                <img src={user1} alt="user" className='img-fluid mt-1 mt-sm-4' />
                            </div>
                            <p className='meet-part'>Participants:</p>
                        </div>

                        <Row className='mt-5'>
                            {persons.map((person) => (
                                <Col xs={6} md={3} lg={2} className='mb-4' key={person.id}>
                                    <div className='participant-bg p-5 text-center'>
                                        <img src={person.img} alt="avatar" className='img-fluid' />
                                        <p className='participant-text'>{person.name}</p>
                                    </div>
                                </Col>
                            ))}
                            <Col xs={12} md={3} lg={2} className='mb-4'>
                                <div className='invite-bg p-5 text-center'>
                                    <div className="icon-bg mx-auto">
                                        <img src={add} alt="add" className='img-fluid img-bg' />
                                    </div>
                                    <p className='participant-text' style={{ color: "#fff" }}>Invite Member</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MeetingDetails;