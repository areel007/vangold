import cover from "../../../../assets/images/profile/cover1.png";
import avatar from "../../../../assets/images/profile/avatar3.png";
import cam from "../../../../assets/images/profile/cam.png";
import tick from "../../../../assets/images/profile/tick.png";
import bullet from "../../../../assets/images/profile/bullet.png";
import avatar1 from "../../../../assets/images/profile/avatar1.png";
import { CgArrowLongRight } from "react-icons/cg";
import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { ImStarHalf, ImStarFull } from "react-icons/im";
import SendBidModal from "../../../core-ui/SendBidModal/SendBidModal";
import FollowersModal from "../../../core-ui/FollowersModal/FollowersModal";
import "./FreelancerProfile.css";

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


const FreelancerProfile = () => {
    const [image, setImage] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [followBtn, setFollowBtn] = useState("follow");
    const [showFollow, setShowFollow] = useState(false);
    const [followers, setFollowers] = useState(false);

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setImage(e.target.result);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }
    return (
        <section id="freelancer-profile" className="pb-5 my-4">
            <div>
                <img src={cover} alt="cover" className="img-fluid cover" />
            </div>
            <Container>
                <div className='d-flex justify-content-center'>
                    <div className="box-upload">
                        <div className="image-upload">
                            <div className="d-flex">
                                <img
                                    id="uploaded-image"
                                    src={image ? image : avatar}
                                    draggable={false}
                                    alt="uploaded-img"
                                />
                                <div className="align-self-end cam">
                                    <label htmlFor="upload-input">
                                        <img src={cam} draggable={"false"} alt="placeholder" />
                                    </label>

                                    <input
                                        id="upload-input"
                                        type="file"
                                        accept=".jpg,.jpeg,.gif,.png"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-16px mt-3">Lagos Nigeria</p>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <h1>Daramola O.</h1>
                    <div className="ms-3">
                        <img src={tick} alt="tick" className="img-fluid" />
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-16px mt-3 fw-bold">Product Designers <span style={{ fontSize: 16, fontWeight: 500, color: "#4F4F4F", cursor: "pointer" }} onClick={() => setModalShow3(true)}>164 Followers</span></p>
                </div>
                <div className="d-flex freelancer__profile_buttons justify-content-center mt-5">
                    <Button className="freelance-btn me-4"
                        onClick={() => setModalShow(true)}
                    >
                        CONTACT <CgArrowLongRight className="ms-2 mb-1" />
                    </Button>
                    <Button className="freelance-btn me-4">
                        MAKE PAYMENT <CgArrowLongRight className="ms-2 mb-1" />
                    </Button>
                    {followBtn === "follow" ? (

                        <button className='follow-btn' onClick={() => setFollowBtn('following')}>FOLLOW</button>
                    ) : (

                        <button className='web-btn' onClick={() => setShowFollow(true)}>FOLLOWING</button>
                    )}
                </div>
                <Modal show={showFollow} onHide={() => { setShowFollow(false) }}>
                    <Modal.Header closeButton>
                        <h2 className='unfollow-mod-head mt-4'>Unfollow Page</h2>
                    </Modal.Header>
                    <p className='p-3'>You are about to unfollow Vangold</p>
                    <Modal.Footer>
                        <button onClick={() => { setShowFollow(false) }} className='cancel-mod-btn me-4' >
                            Cancel
                        </button>
                        <button variant="primary" onClick={() => { setFollowBtn('follow'); setShowFollow(false); }} className='unfollow-mod-btn' >
                            Unfollow
                        </button>
                    </Modal.Footer>
                </Modal>
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
                <Row>
                    <Col xs={12} className="mx-auto">

                        <Row style={{ marginTop: "10rem" }}>
                            <Col xs={6} lg={7}>
                                <h1>Profile</h1>
                            </Col>
                            <Col xs={6} lg={5}>
                                <p className="text-18px fw-bold" style={{ color: "#45B618" }}>
                                    Expert
                                </p>
                                <p className="text-16px fw-bold" style={{ color: "#333333" }}>
                                    100% job success
                                </p>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "7rem" }}>
                            <Col lg={7}>
                                <h2>general</h2>
                                <h2 style={{ color: "#808080" }}>user experience design</h2>
                            </Col>
                            <Col lg={5}>
                                <p className="text-16px" style={{ color: "#333333" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                                    dolor tempus sed egestas lorem. Venenatis maecenas pellentesque
                                    adipiscing dignissim. Curabitur consectetur est enim fusce diam
                                    risus. Id id tincidunt et non. Vulputate in ullamcorper adipiscing
                                    arcu dolor eget cras neque et. Semper id purus bibendum
                                    pellentesque fermentum pulvinar imperdiet. Orci ipsum posuere leo
                                    sed in tempus in. Nullam iaculis tortor auctor facilisis quis in
                                    adipiscing arcu, nunc. Convallis placerat massa eu enim egestas
                                    ipsum massa. Non neque, maecenas id egestas viverra. Sed platea
                                    odio arcu elementum morbi condimentum sed blandit.
                                </p>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "7rem" }}>
                            <Col sm={6} lg={2} className="me-md-4">
                                <h3>₦50,000</h3>
                                <hr style={{ border: "2px solid #0000004D" }} />
                                <p className="text-16px fw-bold mt-5" style={{ color: "#4F4F4FB2" }}>Hourly rate</p>
                            </Col>
                            <Col sm={6} lg={2} className="me-md-4">
                                <h3>₦700K+</h3>
                                <hr style={{ border: "2px solid #0000004D" }} />
                                <p className="text-16px fw-bold mt-5" style={{ color: "#4F4F4FB2" }}>Total earned</p>
                            </Col>
                            <Col sm={6} lg={2} className="me-md-4">
                                <h3>12</h3>
                                <hr style={{ border: "2px solid #0000004D" }} />
                                <p className="text-16px fw-bold mt-5" style={{ color: "#4F4F4FB2" }}>Jobs</p>
                            </Col>
                            <Col sm={6} lg={2} className="me-md-4">
                                <h3>157</h3>
                                <hr style={{ border: "2px solid #0000004D" }} />
                                <p className="text-16px fw-bold mt-5" style={{ color: "#4F4F4FB2" }}>Hours worked</p>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "7rem" }}>
                            <Col lg={7}>
                                <h2 className='mb-3 mb-md-0'>Skills</h2>
                            </Col>
                            <Col lg={5}>
                                <Row>
                                    <Col sm={6} md={6}>
                                        <ul>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                        </ul>
                                    </Col>
                                    <Col sm={6} md={6}>
                                        <ul>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                            <li className='text-16px fw-bold mb-3'><img src={bullet} alt="bullet" className="img-fluid mb-1" /> user interface design</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "7rem" }}>
                            <Col lg={7}>
                                <h2 className='mb-4 mb-md-0'>Employment history</h2>
                            </Col>
                            <Col lg={5} className="ps-md-5">
                                <p className="text-18px fw-bold" style={{ color: "#808080" }}>
                                    <img src={bullet} alt="bullet" className="img-fluid me-1 mb-2" /> Google
                                </p>
                                <h2 className="ms-4 mb-3" style={{ color: "#141414" }}>Head Researcher</h2>
                                <p className="text-16px ms-4" style={{ color: "#333333" }}>
                                    January 2019 - Present
                                </p>
                                <p className="text-18px fw-bold mt-5" style={{ color: "#808080" }}>
                                    <img src={bullet} alt="bullet" className="img-fluid me-1 mb-2" /> Facebook
                                </p>
                                <h2 className="ms-4 mb-3" style={{ color: "#141414" }}>User Experience Designer</h2>
                                <p className="text-16px ms-4" style={{ color: "#333333" }}>
                                    January 2017 - January 2019
                                </p>
                            </Col>
                        </Row>

                        <h2 className="mb-5" style={{ marginTop: "7rem" }}>Education</h2>

                        <hr style={{ border: "2px solid #0000004D" }} />
                        <Row style={{ margin: "3rem 0" }}>
                            <Col lg={7} className="align-self-center">
                                <p className="text-18px fw-bold">2016 - 2020</p>
                            </Col>
                            <Col lg={5} className="ps-5">
                                <p className="text-18px fw-bold">University of Ibadan</p>
                                <p className="text-16px">Bachelor of Science (BS) of Computer Science</p>
                            </Col>
                        </Row>
                        <hr style={{ border: "2px solid #0000004D" }} />
                        <Row style={{ margin: "3rem 0" }}>
                            <Col lg={7} className="align-self-center">
                                <p className="text-18px fw-bold">2016 - 2020</p>
                            </Col>
                            <Col lg={5} className="ps-5">
                                <p className="text-18px fw-bold">University of Ibadan</p>
                                <p className="text-16px">Bachelor of Science (BS) of Computer Science</p>
                            </Col>
                        </Row>
                        <hr style={{ border: "2px solid #0000004D" }} />

                        <Row style={{ margin: "7rem 0" }}>
                            <Col xs={5} lg={7}>
                                <h2 className='mb-3 mb-sm-0'>Rating</h2>
                            </Col>
                            <Col xs={7} lg={5} className="pt-2 pt-lg-0 ps-md-5">
                                <span className='freelancer-rating'>4.5</span>
                                <ImStarFull className='rating-star' />
                                <ImStarFull className='rating-star' />
                                <ImStarFull className='rating-star' />
                                <ImStarFull className='rating-star' />
                                <ImStarHalf className='rating-star' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <SendBidModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    head="Send an offer to Daramola"
                    para="State clearly what you want Daramola to do for you"
                    btntext='Send' />
                <FollowersModal
                    show={modalShow3}
                    onHide={() => setModalShow3(false)}
                    head="Followers" />
            </Container>
        </section >
    );
};

export default FreelancerProfile;
