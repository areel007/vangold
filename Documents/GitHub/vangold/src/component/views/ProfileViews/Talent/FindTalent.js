import { Row, Container, Col } from "react-bootstrap";
import SideCheckBoxes1 from "../../../core-ui/SideCheckBoxes/SideCheckBoxes1";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import { topFreelancersData } from "../../../../top-freelancers-data";
import profileImg from "../../../../assets/images/profile/Rectangle9112.png";
import Img1 from "../../../../assets/images/photos/Rectangle 9113.png"
import Img2 from "../../../../assets/images/photos/Rectangle 9114.png"
import Img3 from "../../../../assets/images/photos/Rectangle 9115.png"
import Star from "../../../core-ui/star/star"
import ReactPaginate from "react-paginate";
import { useState } from "react";

const FindTalent = () => {
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
                                <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 0H4C1.8 0 0.0200005 1.8 0.0200005 4L0 36L14 30L28 36V4C28 1.8 26.2 0 24 0Z" fill="#45B618" />
                                </svg>
                            </div>
                        </div>
                        <div className="inn__TopFreealancerContent__BOX">
                            <div className="inn__TopFreealancerContent__BOX_images">
                                <div className="TopFreealancerContent__BOX_images">
                                    <img src={Img1} alt="" />
                                </div>
                                <div className="TopFreealancerContent__BOX_images">
                                    <img src={Img2} alt="" />
                                </div>
                                <div className="TopFreealancerContent__BOX_images">
                                    <img src={Img3} alt="" />
                                </div>
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
        <section id="find-talent" className="my-5 py-3 bg-color">

            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-4">
                        <SideMenu />
                    </Col>
                    <Col xs={10} lg={2} className="mx-auto bg-color-w py-2">
                        <SideCheckBoxes1 />
                    </Col>
                    <Col xs={10} lg={8} className="mx-auto bg-color-w p-5">
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
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FindTalent;