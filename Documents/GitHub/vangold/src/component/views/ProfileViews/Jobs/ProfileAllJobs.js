import { Card, Col, Container, Pagination, Row } from "react-bootstrap";
import SideCheckBoxes from "../../../core-ui/SideCheckBoxes/SideCheckBoxes";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import { BsFillHeartFill } from "react-icons/bs";
import apple from "../../../../assets/images/profile/apple.png";
import "./Jobs.css";

const jobs = [
    {
        name: "User Experience Design",
        address: "2972 Westminister Rd, Santa Ana",
        descrip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
        time: 'Full Time',
        level: 'Expert',
        price: '$1200',
        img: apple,
    },
    {
        name: "User Experience Design",
        address: "2972 Westminister Rd, Santa Ana",
        descrip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
        time: 'Full Time',
        level: 'Expert',
        price: '$1200',
        img: apple,
    },
    {
        name: "User Experience Design",
        address: "2972 Westminister Rd, Santa Ana",
        descrip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
        time: 'Full Time',
        level: 'Expert',
        price: '$1200',
        img: apple,
    },
];
const ProfileAllJobs = () => {
    return (
        <section id="profile-alljobs" className="my-5 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-4">
                        <SideMenu />
                    </Col>
                    <Col xs={10} lg={2} className="mx-auto bg-color-w py-5">
                        <SideCheckBoxes />
                    </Col>
                    <Col xs={10} lg={8} className="mx-auto bg-color-w p-5">
                        <Row>
                            {jobs.map(job => (
                                <Col xs={10} lg={12} className="mx-auto">
                                    <Card className='card-bg'>
                                        <div className='text-end me-4'><BsFillHeartFill className='card-icon' /></div>
                                        <Row>
                                            <Col xs={10} lg={2} className="">
                                                <img src={job.img} alt="image" className="img-fluid card-pic" />
                                            </Col>
                                            <Col xs={10} lg={9} className="">
                                                <h1 className="head">{job.name}</h1>
                                                <p className='text-18px'>{job.address}</p>
                                                <p className='text-16px'>{job.descrip}</p>
                                            </Col>
                                        </Row>
                                        <div className="d-flex mt-4 mb-3 justify-content-between">
                                            <div className='d-flex'>
                                                <div className='job-time'>{job.time}</div>
                                                <div className='job-level'>{job.level}</div>
                                                <div className='job-price'>{job.price}</div>
                                            </div>
                                            <div className='align-self-center'>
                                                <span className='text-16px me-4' style={{ color: "#083EB1", fontWeight: "bold" }}>New</span>
                                                <span className='text-16px me-4' style={{ fontWeight: "bold" }}>4d</span>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Col xs={10} md={4} className="mx-auto">
                                <Pagination className='paginat'>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item>{4}</Pagination.Item>
                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{36}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </Pagination>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProfileAllJobs;
