import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
// import "./TopJobs.css";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import ReactPaginate from "react-paginate";
import SideCheckBoxes from "../../../core-ui/SideCheckBoxes/SideCheckBoxes";
import apple from "../../../../assets/images/profile/apple.png";
import cross from "../../../../assets/images/profile/cross1.png";
import { useHistory } from "react-router-dom";

const TopJobsData = [
  {
    name: "User Experience Design",
    address: "2972 Westminister Rd, Santa Ana",
    descrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
    time: "Full Time",
    level: "Expert",
    price: "$1200",
    img: apple,
  }, 
  {
    name: "User Experience Design",
    address: "2972 Westminister Rd, Santa Ana",
    descrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
    time: "Full Time",
    level: "Expert",
    price: "$1200",
    img: apple,
  },
  {
    name: "User Experience Design",
    address: "2972 Westminister Rd, Santa Ana",
    descrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
    time: "Full Time",
    level: "Expert",
    price: "$1200",
    img: apple,
  },
  {
    name: "User Experience Design",
    address: "2972 Westminister Rd, Santa Ana",
    descrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
    time: "Full Time",
    level: "Expert",
    price: "$1200",
    img: apple,
  },
];

const ProfileAllJobs  = ({ showSideMenu, setShowSideMenu }) => {
  const history = useHistory();
  const [showCheck, setShowCheck] = useState(false);
  const [jobs] = useState(TopJobsData.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);
  const jobsPerPage = 4;
  const pagesVisited = pageNumber * jobsPerPage;

  const displayjobs = jobs
    .slice(pagesVisited, pagesVisited + jobsPerPage)
    .map((job) => {
      return (
        <div
          key={job.id}
        >
          <div className="TopJobsContent__BOX">
            <div className="TopJobsContent__BOX-TOP">
              <div className="TopJobs-pic">
                <img src={job.img} alt="" />
              </div>
              <div className="TopJobs-info">
                <h1 className="job-_-_name" onClick={() => {
                history.push("/profile/jobs/job-description");
                }} style={{ cursor: "pointer" }}>{job.name}</h1>
                <p className="job-_-_address">{job.address}</p>
                <span className="job-_-_descrip">{job.descrip}</span>
              </div>
              <div className="love-icon">
                <svg
                  className="love__icon"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
                    fill="#4F4F4F"
                    fill-opacity="0.5"
                  />
                </svg>
              </div>
            </div>
            <div className="TopJobsContent__BOX-BOTTOM">
              <div className="TopJobsContent__BOX-BOTTOM_button">
                <button>{job.time}</button>
                <button>{job.level}</button>
                <button>{job.price}</button>
              </div>
              <div className="align-self-center">
                <span
                  className="text-16px top-jobs_NEW-TEXT me-4"
                  style={{ color: "#083EB1", fontWeight: "bold" }}
                >
                  New
                </span>
                <span
                  className="text-16px top-jobs_NEW-TEXT me-4"
                  style={{ fontWeight: "bold" }}
                >
                  4d
                </span>
              </div>
            </div>
            <div className="top-jobs_NEW-TEXT-box">
              <span
                className="text-16px top-jobs_NEW-TEXT me-4"
                style={{ color: "#083EB1", fontWeight: "bold" }}
              >
                New
              </span>
              <span
                className="text-16px top-jobs_NEW-TEXT me-4"
                style={{ fontWeight: "bold" }}
              >
                4d
              </span>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(jobs.length / jobsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="top-freelancer d-flex">
    <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
        <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
    </Col>
      <Container fluid>
        <div className="mb-5 dashboard_mobile_searchBar__filter d-lg-none">
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
          {!showCheck && (
            <svg
              onClick={() => setShowCheck(true)}
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="36"
                height="36"
                rx="8"
                fill="#767680"
                fill-opacity="0.12"
              />
              <path
                d="M16 24H20V22H16V24ZM9 12V14H27V12H9ZM12 19H24V17H12V19Z"
                fill="#333333"
              />
            </svg>
          )}
        </div>
        <div className="inn-top-freelancer top-jobs-right">
            <Col
              xs={12}
              lg={2}
              className={`mx-auto sideBarTopJobs bg-color-w ${
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
          <div className="freelancers-list__freelancer jobs-list__jobs">
            {displayjobs}
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileAllJobs ;
