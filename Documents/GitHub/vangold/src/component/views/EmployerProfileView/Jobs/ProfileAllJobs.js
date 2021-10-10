import { Card, Col, Container, Row } from "react-bootstrap";
import SideCheckBoxes from "../../../core-ui/SideCheckBoxes/SideCheckBoxes";
import EmployerSideMenu from "../../../core-ui/EmployerSideMenu/EmployerSideMenu";
import apple from "../../../../assets/images/profile/apple.png";
import cross from "../../../../assets/images/profile/cross1.png";
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
const EmployerProfileAllJobs = ({ showSideMenu, setShowSideMenu }) => {
    const [showCheck, setShowCheck] = useState(false)
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
        <section id="profile-alljobs" className="my-lg-5 py-3">
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
                        <div className="mb-5 dashboard_mobile_searchBar__filter d-lg-none">
                            <div className="dashboard_mobile_searchBar">
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
                                <input type="text" placeholder="Search..."/>
                            </div>
                            {!showCheck && (
                                <svg onClick={() => setShowCheck(true)} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="8" fill="#767680" fill-opacity="0.12"/>
                                <path d="M16 24H20V22H16V24ZM9 12V14H27V12H9ZM12 19H24V17H12V19Z" fill="#333333"/>
                                </svg>
                            )}
                        </div>
                        <Row>
                            {jobs
                                .slice(pagesVisited, pagesVisited + jobsPerPage)
                                .map(job => (
                                    <Col xs={12} lg={12} className="mx-auto" key={job.id}>
                                        <Card className='card-bg' onClick={() => {
                                                history.push("/profile/e-jobs/job-description");
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

export default EmployerProfileAllJobs;
