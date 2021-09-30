import { Card, Col, Container, Row } from "react-bootstrap";
import SideCheckBoxes from "../../../core-ui/SideCheckBoxes/SideCheckBoxes";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import apple from "../../../../assets/images/profile/apple.png";
import ReactPaginate from "react-paginate";
import "./Jobs.css";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const jobsLists = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
    const [jobs, setJobs] = useState(jobsLists.slice(0, 30));
    const [pageNumber, setPageNumber] = useState(0);
    const jobsPerPage = 4;
    const pagesVisited = pageNumber * jobsPerPage;
    const pageCount = Math.ceil(jobs.length / jobsPerPage);
    const history = useHistory();
    const location = useLocation();

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <section id="profile-alljobs" className="my-5 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-4 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={10} lg={2} className="mx-auto bg-color-w py-5 d-none d-lg-block">
                        <SideCheckBoxes />
                    </Col>
                    <Col xs={12} lg={8} className="mx-auto bg-color-w p-5">
                        <Row>
                            {jobs
                                .slice(pagesVisited, pagesVisited + jobsPerPage)
                                .map(job => (
                                    <Col xs={12} lg={12} className="mx-auto" key={job.id}>
                                        <Card className='card-bg' onClick={() => {
                                                history.push("/profile/jobs/job-description");
                                            }} style={{cursor: "pointer"}}>
                                            <div className='text-end me-4'>
                                                <div className="love-icon">
                                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#4F4F4F" fillOpacity="0.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <Row>
                                                <Col xs={4} lg={2}>
                                                    <img src={job.img} alt="image" className="img-fluid card-pic" />
                                                </Col>
                                                <Col xs={8} lg={9}>
                                                    <h1 className="head">{job.name}</h1>
                                                    <p className='text-18px'>{job.address}</p>
                                                    <p className='text-16px'>{job.descrip}</p>
                                                </Col>
                                            </Row>
                                            <div className="d-md-flex mt-4 mb-3 justify-content-between">
                                                <div className='d-flex'>
                                                    <div className='job-time'>{job.time}</div>
                                                    <div className='job-level'>{job.level}</div>
                                                    <div className='job-price'>{job.price}</div>
                                                </div>
                                                <div className='align-self-center text-end'>
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
                                <div className="paginationContainer">
                                    <ReactPaginate
                                        previousLabel={
                                            <svg
                                                width="8"
                                                height="12"
                                                viewBox="0 0 8 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 1.23266e-07L0.000155878 6L6.00016 12Z"
                                                    fill="#333333"
                                                />
                                            </svg>
                                        }
                                        nextLabel={
                                            <svg
                                                width="8"
                                                height="12"
                                                viewBox="0 0 8 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z"
                                                    fill="#333333"
                                                />
                                            </svg>
                                        }
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        containerClassName={"paginationBttns"}
                                        previousLinkClassName={"previousBttn"}
                                        nextLinkClassName={"nextBttn"}
                                        disabledClassName={"paginationDisabled"}
                                        activeClassName={"paginationActive"}
                                        breakLabel={"..."}
                                        className="paginated"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProfileAllJobs;
