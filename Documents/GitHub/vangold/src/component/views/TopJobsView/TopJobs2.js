import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import SideCheckBoxes from "../../core-ui/SideCheckBoxes/SideCheckBoxes";
import { BsFillHeartFill } from "react-icons/bs";
import { ImShare2 } from "react-icons/im";
import { useState } from "react";
import TopJobsHeader from "./TopJobsHeader";
import SearchBox from "../../core-ui/SearchInput/SearchBox";
import micro from "../../../assets/images/profile/micro.png";
import cover from "../../../assets/images/profile/cover.png";
import dot from "../../../assets/images/profile/dot.png";
import filter from "../../../assets/images/profile/filter.png";
import cross from "../../../assets/images/profile/cross1.png";
import fb from "../../../assets/images/profile/fb.png";
import wa from "../../../assets/images/profile/wa.png";
import tw from "../../../assets/images/profile/tw.png";
import ln from "../../../assets/images/profile/in.png";
import pin from "../../../assets/images/profile/pin.png";
import avatar1 from "../../../assets/images/profile/avatar1.png";
import SendBidModal from "../../core-ui/SendBidModal/SendBidModal";
import FollowersModal from "../../core-ui/FollowersModal/FollowersModal";
import ShareModal from "../../core-ui/ShareModal/ShareModal";
import { useHistory } from "react-router-dom";
// import "../../Jobs.css";

const jobs = {
  name: "User Experience Design",
  address: "Santa Ana,CA",
  descrip:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque egestas leo tempor in ut eget. Euismod et scelerisque aliquam viverra. Vel, nullam pellentesque neque, elit ut cras vitae. Facilisis non sit elit quis consectetur lobortis. Mollis fusce nibh elementum eget bibendum quam proin. Arcu lacus mauris pellentesque in risus. Consectetur cras adipiscing accumsan, lacus id a. Nibh dictum eget amet nec ultricies purus porttitor pretium. Dignissim ridiculus molestie vestibulum suscipit at tempus. Vitae risus fringilla quis in sagittis nulla auctor. Donec vulputate feugiat massa turpis. Id sed quis nulla sed. Auctor porttitor felis in vulputate. Cras enim, vulputate nunc, ornare. ",
  experience: "Minimum 1 Year",
  employmentType: "Contract",
  duration: "6 Months",
  offerSalary: "$2150/Month",
};

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


const TopJobsTwo = () => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [shareShow, setShareShow] = useState(false);
  const [followersShow, setFollowersShow] = useState(false);
  const [freelancer] = useState(true);
  const [followBtn, setFollowBtn] = useState("follow");
  const [shareList, setShareList] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [fav, setFav] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <section id="job-descrip">
    <TopJobsHeader />
      <Container>
      <p className="top__jobs__freelancers"><span onClick={() => {
                history.push("/browse-job")
                }} style={{cursor: "pointer"}}>Brrowse Jobs</span> > Top Jobs View</p>
                <SearchBox />
        <div className="top-jobs-view">
          <Row>
            <Col xs={12} lg={9} className="topjobtwo__container">
              <div className="dashboard_mobile_searchBar__filter d-lg-none">
                <div className="dashboard_mobile_searchBar">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M11.2028 9.85162C11.1006 9.74942 11.0866 9.57302 11.165
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
                        10.3488 8.20662 9.744 8.99062Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                  <input type="text" placeholder="Search..." />
                </div>
                <div className="text-end d-lg-none">
                  {!showCheck && (
                    <img
                      src={filter}
                      alt="filter button"
                      className="img-fluid"
                      onClick={() => setShowCheck(true)}
                    />
                  )}
                </div>
              </div>
              <Col
                xs={12}
                lg={2}
                className={`mx-auto topjobtwo__left bg-color-w ${
                  !showCheck && "d-none d-lg-block"
                }`}
              >
                {showCheck && (
                  <>
                    <div className="d-flex justify-content-between px-4">
                      <h1 className="side-filter">Filter</h1>
                      <div>
                        <img
                          src={cross}
                          alt="cross"
                          onClick={() => setShowCheck(false)}
                        />
                      </div>
                    </div>
                    <hr />
                  </>
                )}
                <SideCheckBoxes showCheck={showCheck} />
              </Col>
              <div className="bg-color1 topjobtwo__right">
              <div>
                  <div className="box-cover-upload">
                      <div className="image-upload">
                          <div className="d-flex">
                              <img
                                  id="uploaded-cover-image"
                                  src={cover}
                                  alt="uploaded-img"
                              />
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="box-upload">
                      <div className="image-upload">
                          <div className="d-flex">
                              <img
                                  id="uploaded-image"
                                  src={micro}
                                  alt="uploaded-img"
                              />
                          </div>
                      </div>
                  </div>
              </div>
                <div className="p-5">
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
                  <Row className="mt-4">
                    <Col xs={10} lg={6}>
                        <div className="d-flex">
                            <p className="text-16px me-3" style={{ color: "#45B618" }}>Microsoft</p>
                            <p className="text-16px-1">{jobs.address}</p>
                            <p style={{ marginLeft: 10, cursor: 'pointer' }} className="text-16px-1 me-3" onClick={() => setFollowersShow(true)} >{followersList.length} Followers</p>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="d-lg-flex justify-content-end">
                        <p className="text-16px-1 me-3">Posted 8 Days ago</p>
                        <p className="text-16px d-none d-lg-block" style={{ color: "#4F4F4F" }}>76 Applicants</p>
                    </Col>
                    <div className="mt-4">
                            {followBtn === "follow" ? (

                                <button className='follow-btn me-4' onClick={() => setFollowBtn('following')}>FOLLOW</button>
                            ) : (

                                <button className='web-btn me-4' onClick={handleShow}>FOLLOWING</button>
                            )}
                            <button className='web-btn'>VISIT WEBSITE</button>
                        </div>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <h2 className="unfollow-mod-head mt-4">
                            Unfollow Page
                          </h2>
                        </Modal.Header>
                        <p className="p-3">You are about to unfollow Vangold</p>
                        <Modal.Footer>
                          <button
                            onClick={handleClose}
                            className="cancel-mod-btn me-4"
                          >
                            Cancel
                          </button>
                          <button
                            variant="primary"
                            onClick={() => {
                              setFollowBtn("follow");
                              handleClose();
                            }}
                            className="unfollow-mod-btn"
                          >
                            Unfollow
                          </button>
                        </Modal.Footer>
                      </Modal>
                  </Row>
                  <Row className="mt-4 row-border">
                      <Col
                      xs={6}
                      lg={3}
                      className="border-right border-botom"
                      >
                      <p className="text-16px-1">Experience</p>
                      <p className="text-16px" style={{ color: "#4F4F4F" }}>
                          {jobs.experience}
                      </p>
                      </Col>
                      <Col
                      xs={6}
                      lg={3}
                      className="border-right border-botom"
                      >
                      <p className="text-16px-1">Employment Type</p>
                      <p className="text-16px" style={{ color: "#4F4F4F" }}>
                          {jobs.employmentType}
                      </p>
                      </Col>
                      <Col
                      xs={6}
                      lg={3}
                      className="border-right"
                      >
                      <p className="text-16px-1">Duration</p>
                      <p className="text-16px" style={{ color: "#4F4F4F" }}>
                          {jobs.duration}
                      </p>
                      </Col>
                      <Col xs={6} lg={3} className="offer__salary">
                      <p className="text-16px-1">Offer Salary</p>
                      <p className="text-16px" style={{ color: "#4F4F4F" }}>
                          {jobs.offerSalary}
                      </p>
                      </Col>
                  </Row>
                  <h1 className="head2">Description</h1>
                  <p className="text-16px-1">{jobs.descrip}</p>

                  <h1 className="head2">Description</h1>
                  <ul className="text-16px-1">
                    <li className="mb-3">
                      <span className="me-2">
                        <img src={dot} alt="dot" />
                      </span>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li className="mb-3">
                      <span className="me-2">
                        <img src={dot} alt="dot" />
                      </span>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li className="mb-3">
                      <span className="me-2">
                        <img src={dot} alt="dot" />
                      </span>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li className="mb-3">
                      <span className="me-2">
                        <img src={dot} alt="dot" />
                      </span>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li className="mb-3">
                      <span className="me-2">
                        <img src={dot} alt="dot" />
                      </span>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                  <div className="mt-5 text-end">
                    {freelancer ? (
                      <button
                        className="modal-btn"
                        onClick={() => setModalShow(true)}
                      >
                        Apply
                      </button>
                    ) : null}
                  </div>

                  <SendBidModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    head="Send a bid for this job"
                    para="What makes you the right person for this job"
                    btntext="Apply"
                  />
                  <FollowersModal
                    show={followersShow}
                    onHide={() => setFollowersShow(false)}
                    head="Followers"
                  />
                  <ShareModal
                    show={shareShow}
                    onHide={() => setShareShow(false)}
                    head="Share this Job"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default TopJobsTwo;
