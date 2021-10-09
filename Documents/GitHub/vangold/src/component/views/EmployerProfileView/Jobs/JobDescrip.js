import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import SideCheckBoxes from "../../../core-ui/SideCheckBoxes/SideCheckBoxes";
import EmployerSideMenu from "../../../core-ui/EmployerSideMenu/EmployerSideMenu";
import { BsFillHeartFill } from "react-icons/bs";
import { ImShare2 } from "react-icons/im";
import { useState } from "react";
import micro from "../../../../assets/images/profile/micro.png";
import cover from "../../../../assets/images/profile/cover.png";
import dot from "../../../../assets/images/profile/dot.png";
import filter from "../../../../assets/images/profile/filter.png";
import cross from "../../../../assets/images/profile/cross1.png";
import fb from "../../../../assets/images/profile/fb.png";
import wa from "../../../../assets/images/profile/wa.png";
import tw from "../../../../assets/images/profile/tw.png";
import ln from "../../../../assets/images/profile/in.png";
import pin from "../../../../assets/images/profile/pin.png";
import avatar1 from "../../../../assets/images/profile/avatar1.png";
import SendBidModal from "../../../core-ui/SendBidModal/SendBidModal";
import FollowersModal from "../../../core-ui/FollowersModal/FollowersModal";
import "./Jobs.css";

const jobs =
{
    name: "User Experience Design",
    address: "Santa Ana,CA",
    descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque egestas leo tempor in ut eget. Euismod et scelerisque aliquam viverra. Vel, nullam pellentesque neque, elit ut cras vitae. Facilisis non sit elit quis consectetur lobortis. Mollis fusce nibh elementum eget bibendum quam proin. Arcu lacus mauris pellentesque in risus. Consectetur cras adipiscing accumsan, lacus id a. Nibh dictum eget amet nec ultricies purus porttitor pretium. Dignissim ridiculus molestie vestibulum suscipit at tempus. Vitae risus fringilla quis in sagittis nulla auctor. Donec vulputate feugiat massa turpis. Id sed quis nulla sed. Auctor porttitor felis in vulputate. Cras enim, vulputate nunc, ornare. ",
    experience: "Minimum 1 Year",
    employmentType: "Contract",
    duration: "6 Months",
    offerSalary: "$2150/Month",
}

const socialList = [
    {
        icon: tw,
        link: "/"
    },
    {
        icon: fb,
        link: "/"
    },
    {
        icon: wa,
        link: "/"
    },
    {
        icon: ln,
        link: "/"
    },
    {
        icon: pin,
        link: "/"
    },
]

const followersList = [
    {
        id: 1,
        name: "Kali Jay",
        avatar: avatar1,
        position: "Frontend Developer"
    },
    {
        id: 2,
        name: "Kali Jay",
        avatar: avatar1,
        position: "Frontend Developer"
    },
    {
        id: 3,
        name: "Kali Jay",
        avatar: avatar1,
        position: "Frontend Developer"
    },
    {
        id: 4,
        name: "Kali Jay",
        avatar: avatar1,
        position: "Frontend Developer"
    },
]

const EmployerJobDescrip = ({ showSideMenu, setShowSideMenu }) => {
    const [modalShow, setModalShow] = useState(false);
    const [freelancer] = useState(true);
    const [followBtn, setFollowBtn] = useState("follow");
    const [shareList, setShareList] = useState(false);
    const [show, setShow] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const [followers, setFollowers] = useState(false);
    const [fav, setFav] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section id="job-descrip" className="my-5 py-3">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                    <EmployerSideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} lg={2} className={`mx-auto bg-color-w py-5 ${!showCheck && "d-none d-lg-block"}`}>
                        {showCheck && (
                            <>
                                <div className="d-flex justify-content-between px-4">
                                    <h1 className="side-filter">Filter</h1>
                                    <div>
                                        <img src={cross} alt="cross" onClick={() => setShowCheck(false)} />
                                    </div>
                                </div>
                                <hr />
                            </>
                        )}
                        <SideCheckBoxes showCheck={showCheck} />
                    </Col>
                    <Col xs={12} lg={8} className="mx-auto bg-color-w p-5">
                        <div className="mb-5 text-end d-lg-none">
                            {!showCheck && (
                                <img src={filter} alt="filter button" className='img-fluid' onClick={() => setShowCheck(true)} />
                            )}
                        </div>
                        <div className="bg-color1">
                            <div>
                                <img src={cover} alt="cover" className='img-fluid' style={{ width: "100vw" }} />
                            </div>
                            <div>
                                <img src={micro} alt="logo" className="job-logo" />
                            </div>
                            <div className='p-5'>
                                <Row>
                                    <Col xs={8} lg={8}>
                                        <h1 className='head'>{jobs.name}</h1>
                                    </Col>
                                    <Col xs={4} lg={4} className="mt-2 mt-md-4 text-end">
                                        <Button variant='light' className='job-btn me-2 me-lg-4 mt-4' onClick={() => setFav(!fav)}><BsFillHeartFill className={`${fav ? "job-icon-fav" : "job-icon"}`} /></Button>
                                        <Button variant='light' className='job-btn mt-4' onClick={() => setShareList(true)}><ImShare2 className='job-icon' /></Button>
                                    </Col>
                                </Row>

                                {/* social modal */}
                                <Modal show={shareList} onHide={() => setShareList(false)} dialogClassName="modal-style">
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <div className="p-5 text-center">
                                        <h2 className='unfollow-mod-head mt-4'>Share this Job</h2>
                                        <p className='mt-2'>Spread the word about this Job on Vangold</p>
                                        <div className='d-flex justify-content-center mt-5'>
                                            {
                                                socialList.map(social => (
                                                    <div className="me-4">
                                                        <a href={social.link}><img src={social.icon} alt="icon" className="img-fluid" /></a>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                </Modal>
                                <Row className='mt-4'>
                                    <Col xs={10} lg={6}>
                                        <div className="d-flex">
                                            <p className="text-16px me-3" style={{ color: "#45B618" }}>Microsoft</p>
                                            <p className="text-16px-1">{jobs.address}</p>
                                            <p style={{ marginLeft: 10, cursor: 'pointer' }} className="text-16px-1 me-3" onClick={() => setFollowers(true)}>{followersList.length} Followers</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6} className="d-lg-flex justify-content-end">
                                        <p className="text-16px-1 me-3">Posted 8 Days ago</p>
                                        <p className="text-16px d-none d-lg-block" style={{ color: "#4F4F4F" }}>76 Applicants</p>
                                    </Col>
                                </Row>
                                {/* folllowers modal */}
                                <Modal show={followers} onHide={() => { setFollowers(false) }}>
                                    <Modal.Header closeButton>
                                        <h2 className='unfollow-mod-head mt-4'>Followers</h2>
                                    </Modal.Header>
                                    {followersList.map((follower => (
                                        <div className='my-2 d-flex p-4' key={follower.key} >
                                            <div className='me-4'><img src={follower.avatar} alt="avatar" className='img-fluid' /></div>
                                            <div>
                                                <p className='followers-mod-head mb-0'>{follower.name}</p>
                                                <p style={{ color: "#666666" }}>{follower.position}</p>
                                            </div>
                                        </div>
                                    )))}
                                </Modal>
                                <div className="mt-4">
                                    {followBtn === "follow" ? (

                                        <button className='follow-btn me-4' onClick={() => setFollowBtn('following')}>FOLLOW</button>
                                    ) : (

                                        <button className='web-btn me-4' onClick={handleShow}>FOLLOWING</button>
                                    )}
                                    <button className='web-btn'>VISIT WEBSITE</button>
                                </div>
                                <Modal show={show} onHide={handleClose} className="mt-5">
                                    <Modal.Header closeButton>
                                        <h2 className='unfollow-mod-head mt-4'>Unfollow Page</h2>
                                    </Modal.Header>
                                    <p className='p-3'>You are about to unfollow Vangold</p>
                                    <Modal.Footer>
                                        <button onClick={handleClose} className='cancel-mod-btn me-4' >
                                            Cancel
                                        </button>
                                        <button variant="primary" onClick={() => { setFollowBtn('follow'); handleClose(); }} className='unfollow-mod-btn' >
                                            Unfollow
                                        </button>
                                    </Modal.Footer>
                                </Modal>
                                <Row className='mt-4 row-border'>
                                    <Col xs={6} lg={3} className='border-right px-4 px-lg-5 py-4 border-botom'>
                                        <p className="text-16px-1">Experience</p>
                                        <p className="text-16px" style={{ color: "#4F4F4F" }}>{jobs.experience}</p>
                                    </Col>
                                    <Col xs={6} lg={3} className='border-right px-4 px-lg-5 py-4 border-botom'>
                                        <p className="text-16px-1">Employment Type</p>
                                        <p className="text-16px" style={{ color: "#4F4F4F" }}>{jobs.employmentType}</p>
                                    </Col>
                                    <Col xs={6} lg={3} className='border-right px-4 px-lg-5 py-4'>
                                        <p className="text-16px-1">Duration</p>
                                        <p className="text-16px" style={{ color: "#4F4F4F" }}>{jobs.duration}</p>
                                    </Col>
                                    <Col xs={6} lg={3} className='px-4 px-lg-5 py-4'>
                                        <p className="text-16px-1">Offer Salary</p>
                                        <p className="text-16px" style={{ color: "#4F4F4F" }}>{jobs.offerSalary}</p>
                                    </Col>
                                </Row>
                                <h1 className='head2'>Description</h1>
                                <p className='text-16px-1'>{jobs.descrip}</p>

                                <h1 className='head2'>Description</h1>
                                <ul className='text-16px-1'>
                                    <li className='mb-3'><span className='me-2'><img src={dot} alt="dot" /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li className='mb-3'><span className='me-2'><img src={dot} alt="dot" /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li className='mb-3'><span className='me-2'><img src={dot} alt="dot" /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li className='mb-3'><span className='me-2'><img src={dot} alt="dot" /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li className='mb-3'><span className='me-2'><img src={dot} alt="dot" /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                                <div className='mt-5 text-end'>
                                    {freelancer ? (
                                        <button className="modal-btn" onClick={() => setModalShow(true)}>Apply</button>
                                    ) : null}
                                </div>

                                <SendBidModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    head="Send a bid for this job"
                                    para="What makes you the right person for this job"
                                    btntext='Apply' />

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default EmployerJobDescrip;
