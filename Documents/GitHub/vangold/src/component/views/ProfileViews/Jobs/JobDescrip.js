import { Button, Col, Container, Row } from "react-bootstrap";
import SideCheckBoxes from "../../../core-ui/SideCheckBoxes/SideCheckBoxes";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import { BsFillHeartFill } from "react-icons/bs";
import { ImShare2 } from "react-icons/im";
import micro from "../../../../assets/images/profile/micro.png";
import cover from "../../../../assets/images/profile/cover.png";
import dot from "../../../../assets/images/profile/dot.png";
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

const JobDescrip = () => {
    return (
        <section id="job-descrip" className="my-5 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-4">
                        <SideMenu />
                    </Col>
                    <Col xs={10} lg={2} className="mx-auto bg-color py-5">
                        <SideCheckBoxes />
                    </Col>
                    <Col xs={10} lg={8} className="mx-auto bg-color p-5">
                        <div className="bg-color1">
                            <div>
                                <img src={cover} alt="cover" className='img-fluid' />
                            </div>
                            <div>
                                <img src={micro} alt="logo" className="job-logo" />
                            </div>
                            <div className='p-5'>
                                <Row>
                                    <Col xs={10} lg={8}>
                                        <h1 className='head'>{jobs.name}</h1>
                                    </Col>
                                    <Col xs={10} lg={4} className="align-self-center text-end">
                                        <Button variant='light' className='job-btn me-4 mt-4'><BsFillHeartFill className='job-icon' /></Button>
                                        <Button variant='light' className='job-btn mt-4' ><ImShare2 className='job-icon' /></Button>
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Col xs={10} lg={6}>
                                        <div className="d-flex">
                                            <p className="text-16px me-3" style={{ color: "#45B618" }}>Microsoft</p>
                                            <p className="text-16px-1">{jobs.address}</p>
                                        </div>
                                    </Col>
                                    <Col xs={10} lg={6} className="align-self-center text-end">
                                        <div className="d-flex justify-content-end">
                                            <p className="text-16px-1 me-3">Posted 8 Days ago</p>
                                            <p className="text-16px" style={{ color: "#4F4F4F" }}>76 Applicants</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-4 row-border'>
                                    <Col xs={10} lg={3} className='border-right px-5 py-4'>
                                        <p className="text-16px-1">Experience</p>
                                        <p className="text-16px" style={{ color: "#4F4F4F" }}>{jobs.experience}</p>
                                    </Col>
                                    <Col xs={10} lg={3} className='border-right px-5 py-4'>
                                        <p className="text-16px-1">Employment Type</p>
                                        <p className="text-16px" style={{ color: "#4F4F4F" }}>{jobs.employmentType}</p>
                                    </Col>
                                    <Col xs={10} lg={3} className='border-right px-5 py-4'>
                                        <p className="text-16px-1">Duration</p>
                                        <p className="text-16px" style={{ color: "#4F4F4F" }}>{jobs.duration}</p>
                                    </Col>
                                    <Col xs={10} lg={3} className='px-5 py-4'>
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default JobDescrip;
