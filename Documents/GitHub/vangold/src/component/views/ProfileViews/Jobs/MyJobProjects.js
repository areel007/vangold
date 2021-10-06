import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import { AiFillStar } from "react-icons/ai";
import { RiFilterFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from "@material-ui/core";
import sq from "../../../../assets/images/profile/sq.png";
import avatar from "../../../../assets/images/profile/avatar2.png";
import eye from "../../../../assets/images/profile/eye.png";
import cmnt from "../../../../assets/images/profile/cmnt.png";
import car from "../../../../assets/images/profile/car.png";
import "./Jobs.css";
import { useState } from "react";

const progressWork = [
    {
        id: 1,
        title: "Car Care - Landing Page",
        date: "Tue, Jun 29",
        position: "Lead Designer - Daramola O.",
        barValue: 50,
        days: "3 days left",
        views: 12,
        comment: 1,
        avatar
    },
    {
        id: 2,
        title: "Car Care - Landing Page",
        date: "Tue, Jun 29",
        position: "Lead Designer - Daramola O.",
        barValue: 50,
        days: "3 days left",
        views: 12,
        comment: 1,
        avatar
    },
    {
        id: 3,
        title: "Car Care - Landing Page",
        date: "Tue, Jun 29",
        position: "Lead Designer - Daramola O.",
        barValue: 50,
        days: "3 days left",
        views: 12,
        comment: 1,
        avatar
    },
]
const reviewWork = [
    {
        id: 1,
        title: "Car Care - Landing Page",
        date: "Tue, Jun 29",
        car,
        views: 12,
        comment: 1,
        avatar
    },
    {
        id: 2,
        title: "Car Care - Landing Page",
        date: "Tue, Jun 29",
        position: "Lead Designer - Daramola O.",
        views: 12,
        comment: 1,
        avatar
    },
    {
        id: 3,
        title: "Car Care - Landing Page",
        date: "Tue, Jun 29",
        position: "Lead Designer - Daramola O.",
        views: 12,
        comment: 1,
        avatar
    },
]
const completeWork = [
    {
        id: 1,
        title: "Car Care - Landing Page",
        status: "Done",
        position: "Lead Designer - Daramola O.",
        views: 12,
        comment: 1,
        avatar
    },
    {
        id: 2,
        title: "Car Care - Landing Page",
        status: "Done",
        position: "Lead Designer - Daramola O.",
        views: 12,
        comment: 1,
        avatar
    },
    {
        id: 3,
        title: "Car Care - Landing Page",
        status: "Done",
        car,
        views: 12,
        comment: 1,
        avatar
    },
]

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 8,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: "#F2F2F2"
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#45B618',
    },
}))(LinearProgress);

const MyJobProjects = ({ showSideMenu }) => {
    const [select, setSelect] = useState('IN PROGRESS');

    return (
        <section id="my-job-projects" className="my-5 py-3">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu />
                    </Col>
                    <Col xs={12} lg={10} className="mx-auto bg-color-w p-5">
                        <Row>
                            <Col xs={10} lg={6} className="mx-auto">
                                <h1 style={{ color: "#000000" }}>Welcome back, Daramola</h1>
                            </Col>
                            <Col xs={10} lg={6} className="mx-auto align-self-center text-end d-none d-lg-block">
                                <Button variant='light' className="btn-pro-job"><AiFillStar className="fs-4 me-1" /></Button>
                                <Button variant='light' className="btn-pro-job"><RiFilterFill className="fs-4 me-1" /> Filter</Button>
                                <Button variant='light' className="btn-pro-job"><GiHamburgerMenu className="fs-4 me-1" /> Menu</Button>
                                <Button variant='light' className="btn-pro-job-1"><img src={sq} alt="square" /> Board <span className="menu-icon"><GiHamburgerMenu className="fs-4 ms-1" /></span> </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} lg={12} className="mx-auto">
                                <p className="text-16px">You have <strong>9 tasks</strong> to complete</p>
                            </Col>
                        </Row>

                        <Row className="d-block d-lg-none">
                            <Col xs={10} lg={12} className="mx-auto">
                                <select className="project-select" onChange={(e) => setSelect(e.target.value)}>
                                    <option value="IN PROGRESS">IN PROGRESS</option>
                                    <option value="IN REVIEW">IN REVIEW</option>
                                    <option value="COMPLETED">COMPLETED</option>
                                </select>
                            </Col>
                        </Row>

                        <div className="d-none d-lg-block">
                            <Row className="mt-5">
                                <Col xs={10} lg={4} className="mx-auto p-3">
                                    <h2 className="mb-5"><GoPrimitiveDot className="mb-1" style={{ color: "#45B618" }} />IN PROGRESS</h2>
                                    {progressWork.map(work => (
                                        <Row key={work.id} className='mb-4'>
                                            <Col xs={12}>
                                                <Card className='project-card'>
                                                    <Row>
                                                        <Col xs={8}>
                                                            <p className='text-16px' style={{ color: "#4F4F4F" }}>{work.title}</p>
                                                        </Col>
                                                        <Col xs={4} className='text-end'>
                                                            <p className='text-12px'>{work.date}</p>
                                                        </Col>
                                                    </Row>
                                                    <p className='text-14px' style={{ color: "#808080" }}>{work.position}</p>
                                                    <div className="d-flex justify-content-between mt-4">
                                                        <p className='text-12px'><span style={{ color: "#45B618" }}>{work.barValue}</span> of 100%</p>
                                                        <p className='text-12px'>{work.days}</p>
                                                    </div>
                                                    <BorderLinearProgress variant="determinate" value={60} />
                                                    <div className="d-flex justify-content-between mt-4">
                                                        <div className="d-flex">
                                                            <div><img src={work.avatar} alt="avatar" /></div>
                                                            <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                            <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                        </div>
                                                        <div className="d-flex align-self-center">
                                                            <div className='text-12px me-4'><img src={eye} alt="avatar" className='mb-1 me-1' />{work.views}</div>
                                                            <div className='text-12px'><img src={cmnt} alt="avatar" className='mb-1 me-1' />{work.comment}</div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                        </Row>
                                    ))}
                                </Col>
                                <Col xs={10} lg={4} className="mx-auto p-3">
                                    <h2 className="mb-5"><GoPrimitiveDot className="mb-1" style={{ color: "#EED600" }} />IN REVIEW</h2>
                                    {reviewWork.map(work => (
                                        <Row key={work.id} className='mb-4'>
                                            <Col xs={12}>
                                                <Card className='project-card'>
                                                    <Row>
                                                        <Col xs={8}>
                                                            <p className='text-16px' style={{ color: "#4F4F4F" }}>{work.title}</p>
                                                        </Col>
                                                        <Col xs={4} className='text-end'>
                                                            <p className='text-12px'>{work.date}</p>
                                                        </Col>
                                                    </Row>
                                                    {work.car &&
                                                        <div><img src={work.car} alt="image" className="img-fluid" /></div>
                                                    }
                                                    <p className='text-14px' style={{ color: "#808080" }}>{work.position}</p>
                                                    <div className="d-flex justify-content-between mt-4">
                                                        <div className="d-flex">
                                                            <div><img src={work.avatar} alt="avatar" /></div>
                                                            <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                            <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                        </div>
                                                        <div className="d-flex align-self-center">
                                                            <div className='text-12px me-4'><img src={eye} alt="avatar" className='mb-1 me-1' />{work.views}</div>
                                                            <div className='text-12px'><img src={cmnt} alt="avatar" className='mb-1 me-1' />{work.comment}</div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                        </Row>
                                    ))}
                                </Col>
                                <Col xs={10} lg={4} className="mx-auto p-3">
                                    <h2 className="mb-5"><GoPrimitiveDot className="mb-1" style={{ color: "#14E273" }} />COMPLETED</h2>
                                    {completeWork.map(work => (
                                        <Row key={work.id} className='mb-4'>
                                            <Col xs={12}>
                                                <Card className='project-card'>
                                                    <Row>
                                                        <Col xs={8}>
                                                            <p className='text-16px' style={{ color: "#4F4F4F" }}>{work.title}</p>
                                                        </Col>
                                                        <Col xs={4} className='text-end'>
                                                            <p className='project-status'><span className='status-bg'>{work.status}</span></p>
                                                        </Col>
                                                    </Row>
                                                    {work.car &&
                                                        <div><img src={work.car} alt="image" className="img-fluid" /></div>
                                                    }
                                                    <p className='text-14px' style={{ color: "#808080" }}>{work.position}</p>
                                                    <div className="d-flex justify-content-between mt-4">
                                                        <div className="d-flex">
                                                            <div><img src={work.avatar} alt="avatar" /></div>
                                                            <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                            <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                        </div>
                                                        <div className="d-flex align-self-center">
                                                            <div className='text-12px me-4'><img src={eye} alt="avatar" className='mb-1 me-1' />{work.views}</div>
                                                            <div className='text-12px'><img src={cmnt} alt="avatar" className='mb-1 me-1' />{work.comment}</div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                        </Row>
                                    ))}
                                </Col>
                            </Row>
                        </div>

                        {/* ----------------------------mobile version----------------------- */}
                        <Row className="mt-5 d-block d-lg-none">
                            {
                                select === "IN PROGRESS" ? (

                                    <Col xs={10} lg={4} className="mx-auto  p-3">
                                        <h2 className="mb-5"><GoPrimitiveDot className="mb-1" style={{ color: "#45B618" }} />IN PROGRESS</h2>
                                        {progressWork.map(work => (
                                            <Row key={work.id} className='mb-4'>
                                                <Col xs={12}>
                                                    <Card className='project-card'>
                                                        <Row>
                                                            <Col xs={8}>
                                                                <p className='text-16px' style={{ color: "#4F4F4F" }}>{work.title}</p>
                                                            </Col>
                                                            <Col xs={4} className='text-end'>
                                                                <p className='text-12px'>{work.date}</p>
                                                            </Col>
                                                        </Row>
                                                        <p className='text-14px' style={{ color: "#808080" }}>{work.position}</p>
                                                        <div className="d-flex justify-content-between mt-4">
                                                            <p className='text-12px'><span style={{ color: "#45B618" }}>{work.barValue}</span> of 100%</p>
                                                            <p className='text-12px'>{work.days}</p>
                                                        </div>
                                                        <BorderLinearProgress variant="determinate" value={60} />
                                                        <div className="d-flex justify-content-between mt-4">
                                                            <div className="d-flex">
                                                                <div><img src={work.avatar} alt="avatar" /></div>
                                                                <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                                <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                            </div>
                                                            <div className="d-flex align-self-center">
                                                                <div className='text-12px me-4'><img src={eye} alt="avatar" className='mb-1 me-1' />{work.views}</div>
                                                                <div className='text-12px'><img src={cmnt} alt="avatar" className='mb-1 me-1' />{work.comment}</div>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        ))}
                                    </Col>
                                ) : select === "IN REVIEW" ? (

                                    <Col xs={10} lg={4} className="mx-auto p-3">
                                        <h2 className="mb-5"><GoPrimitiveDot className="mb-1" style={{ color: "#EED600" }} />IN REVIEW</h2>
                                        {reviewWork.map(work => (
                                            <Row key={work.id} className='mb-4'>
                                                <Col xs={12}>
                                                    <Card className='project-card'>
                                                        <Row>
                                                            <Col xs={8}>
                                                                <p className='text-16px' style={{ color: "#4F4F4F" }}>{work.title}</p>
                                                            </Col>
                                                            <Col xs={4} className='text-end'>
                                                                <p className='text-12px'>{work.date}</p>
                                                            </Col>
                                                        </Row>
                                                        {work.car &&
                                                            <div><img src={work.car} alt="image" className="img-fluid" /></div>
                                                        }
                                                        <p className='text-14px' style={{ color: "#808080" }}>{work.position}</p>
                                                        <div className="d-flex justify-content-between mt-4">
                                                            <div className="d-flex">
                                                                <div><img src={work.avatar} alt="avatar" /></div>
                                                                <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                                <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                            </div>
                                                            <div className="d-flex align-self-center">
                                                                <div className='text-12px me-4'><img src={eye} alt="avatar" className='mb-1 me-1' />{work.views}</div>
                                                                <div className='text-12px'><img src={cmnt} alt="avatar" className='mb-1 me-1' />{work.comment}</div>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        ))}
                                    </Col>
                                ) : (

                                    <Col xs={10} lg={4} className="mx-auto p-3">
                                        <h2 className="mb-5"><GoPrimitiveDot className="mb-1" style={{ color: "#14E273" }} />COMPLETED</h2>
                                        {completeWork.map(work => (
                                            <Row key={work.id} className='mb-4'>
                                                <Col xs={12}>
                                                    <Card className='project-card'>
                                                        <Row>
                                                            <Col xs={8}>
                                                                <p className='text-16px' style={{ color: "#4F4F4F" }}>{work.title}</p>
                                                            </Col>
                                                            <Col xs={4} className='text-end'>
                                                                <p className='project-status'><span className='status-bg'>{work.status}</span></p>
                                                            </Col>
                                                        </Row>
                                                        {work.car &&
                                                            <div><img src={work.car} alt="image" className="img-fluid" /></div>
                                                        }
                                                        <p className='text-14px' style={{ color: "#808080" }}>{work.position}</p>
                                                        <div className="d-flex justify-content-between mt-4">
                                                            <div className="d-flex">
                                                                <div><img src={work.avatar} alt="avatar" /></div>
                                                                <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                                <div style={{ marginLeft: "-1rem" }}><img src={work.avatar} alt="avatar" /></div>
                                                            </div>
                                                            <div className="d-flex align-self-center">
                                                                <div className='text-12px me-4'><img src={eye} alt="avatar" className='mb-1 me-1' />{work.views}</div>
                                                                <div className='text-12px'><img src={cmnt} alt="avatar" className='mb-1 me-1' />{work.comment}</div>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        ))}
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MyJobProjects;
