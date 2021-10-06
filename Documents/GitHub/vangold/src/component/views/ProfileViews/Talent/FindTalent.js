import { Row, Container, Col } from "react-bootstrap";
import SideCheckBoxes1 from "../../../core-ui/SideCheckBoxes/SideCheckBoxes1";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import { topFreelancersData } from "../../../../top-freelancers-data";
import profileImg from "../../../../assets/images/profile/Rectangle9112.png";
import filter from "../../../../assets/images/profile/filter.png";
import cross from "../../../../assets/images/profile/cross1.png";
import Img1 from "../../../../assets/images/photos/Rectangle 9113.png"
import Img2 from "../../../../assets/images/photos/Rectangle 9114.png"
import Img3 from "../../../../assets/images/photos/Rectangle 9115.png"
import Star from "../../../core-ui/star/star"
import ReactPaginate from "react-paginate";
import { useState } from "react";

const FindTalent = ({ showSideMenu, setShowSideMenu }) => {
    const [showCheck, setShowCheck] = useState(false)
    const stars = Array(5).fill(0);
    const [currentValue] = useState(3);

    const [freelancers, setfreelancers] = useState(topFreelancersData.slice(0, 30));
    const [pageNumber, setPageNumber] = useState(0);
    const freelancersPerPage = 6;
    const pagesVisited = pageNumber * freelancersPerPage;

    const displayfreelancers = freelancers
        .slice(pagesVisited, pagesVisited + freelancersPerPage)
        .map((freelancer) => {
            return (
                <div className="TopFreealancerContent" key={freelancer.id}>
                    <div className="TopFreealancerContent__BOX">
                        <div className="inn__TopFreealancerContent__BOX">
                            <div className="TopFreealancerContent__BOX-details_TOP">
                                <div className="inn__TopFreealancerContent__BOX-details_TOP">
                                    <div className="Top__Freelancer_pic">
                                        <img src={profileImg} alt="" />
                                    </div>
                                    <div className="Top__Freelancer_info">
                                        <div className="verify-logo">
                                            <h2>{freelancer.freelancersName}</h2>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 11L19.56 8.21L19.9 4.52L16.29 3.7L14.4 0.5L11 1.96L7.6 0.5L5.71 3.69L2.1 4.5L2.44 8.2L0 11L2.44 13.79L2.1 17.49L5.71 18.31L7.6 21.5L11 20.03L14.4 21.49L16.29 18.3L19.9 17.48L19.56 13.79L22 11ZM9.09 15.72L5.29 11.91L6.77 10.43L9.09 12.76L14.94 6.89L16.42 8.37L9.09 15.72Z" fill="#0038FF" />
                                            </svg>
                                        </div>
                                        <h3>{freelancer.jobTitle}</h3>
                                        <div style={{ marginTop: 10 }}>
                                            <Star stars={stars} currentValue={currentValue} />
                                        </div>
                                    </div>
                                </div>
                                <div className="inn__TopFreealancerContent__BOX-details_BOTTOM">
                                    <button className="">{freelancer.jobHire}</button>
                                    <button>35 USD</button>
                                    <button>Send message</button>
                                    <div className="svggg">
                                        <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 0H4C1.8 0 0.0200005 1.8 0.0200005 4L0 36L14 30L28 36V4C28 1.8 26.2 0 24 0Z" fill="#45B618" />
                                        </svg>
                                    </div>

                                </div>
                            </div>
                            <div className="TopFreealancerContent__BOX_images">
                                <div className="inn-TopFreealancerContent__BOX_images">
                                    <img src={Img1} alt="" />
                                </div>
                                <div className="inn-TopFreealancerContent__BOX_images">
                                    <img src={Img2} alt="" />
                                </div>
                                <div className="inn-TopFreealancerContent__BOX_images">
                                    <img src={Img3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="MobileView-TopFreealancerContent__BOX-details_TOP">
                            <div className="MobileView-TopFreealancerContent">
                                <div className="inn__TopFreealancerContent__BOX-details_TOP">
                                    <div className="Top__Freelancer_pic">
                                        <img src={profileImg} alt="" />
                                    </div>
                                    <div className="Top__Freelancer_info">
                                        <div className="verify-logo">
                                            <h2>{freelancer.freelancersName}</h2>
                                            <svg className="verify-svg-logo" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 11L19.56 8.21L19.9 4.52L16.29 3.7L14.4 0.5L11 1.96L7.6 0.5L5.71 3.69L2.1 4.5L2.44 8.2L0 11L2.44 13.79L2.1 17.49L5.71 18.31L7.6 21.5L11 20.03L14.4 21.49L16.29 18.3L19.9 17.48L19.56 13.79L22 11ZM9.09 15.72L5.29 11.91L6.77 10.43L9.09 12.76L14.94 6.89L16.42 8.37L9.09 15.72Z" fill="#0038FF" />
                                            </svg>
                                        </div>
                                        <h3>{freelancer.jobTitle}</h3>
                                        <div style={{ marginTop: 10 }}>
                                            <Star stars={stars} currentValue={currentValue} />
                                        </div>
                                    </div>
                                </div>
                                <div className="svggg">
                                    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 0H4C1.8 0 0.0200005 1.8 0.0200005 4L0 36L14 30L28 36V4C28 1.8 26.2 0 24 0Z" fill="#45B618" />
                                    </svg>
                                </div>
                            </div>
                            <div className="MobileView-TopFreealancerContent__BOX_images">
                                <div className="inn-TopFreealancerContent__BOX_images">
                                    <img src={Img1} alt="freelancer" />
                                </div>
                                <div className="inn-TopFreealancerContent__BOX_images">
                                    <img src={Img2} alt="freelancer" />
                                </div>
                                <div className="inn-TopFreealancerContent__BOX_images">
                                    <img src={Img3} alt="freelancer" />
                                </div>
                            </div>
                            <div className="inn__TopFreealancerContent__BOX-details_BOTTOM">
                                <button className="">{freelancer.jobHire}</button>
                                <button>35 USD</button>
                                <button>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

    const pageCount = Math.ceil(freelancers.length / freelancersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <section id="talent" className="my-lg-5 py-3 bg-color">

            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu  showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} lg={2} className={`mx-auto bg-color-w py-2 ${!showCheck && "d-none d-lg-block"}`}>
                        {showCheck && (
                            <>
                                <div className="d-flex justify-content-between px-4 mt-5">
                                    <h1 className="side-filter">Filter</h1>
                                    <div>
                                        <img src={cross} alt="cross" onClick={() => setShowCheck(false)} />
                                    </div>
                                </div>
                                <hr />
                            </>
                        )}
                        <SideCheckBoxes1 showCheck={showCheck} />
                    </Col>
                    <Col xs={12} lg={8} className="mx-auto bg-color-w p-5">
                    
                        {/* FILTER BUTTON HERE */}
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

                        <div className="freelancers-list__freelancer">
                            {displayfreelancers}
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
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FindTalent;