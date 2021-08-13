import "./top-freelancers.css";
import ImagelessBanner from "../../core-ui/banner/imageless-banner/imageless-banner";
import SelectInputComponent from "../../core-ui/inputs/select/select-input-component";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Star from "../../core-ui/star/star";
import FreelancerData from "../../../top-freelancers-data.json";
import SearchInputComponent from "../../core-ui/inputs/search/search-input-component";
import profileImg from "../../../assets/images/Ellipse-111.png";
import Location from "../../core-ui/inputs/location/location";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import TopJobsViewModal from "../../core-ui/modal/top-jobs-view";

const TopFreelancers = (props) => {
  const [open, setOpen] = React.useState(false);

  const stars = Array(5).fill(0);
  const [selectOptions] = useState(["Select Category"]);

  const [currentValue] = useState(3);

  const [freelancers, setfreelancers] = useState(FreelancerData.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);
  const freelancersPerPage = 5;
  const pagesVisited = pageNumber * freelancersPerPage;

  const displayfreelancers = freelancers
    .slice(pagesVisited, pagesVisited + freelancersPerPage)
    .map((freelancer) => {
      return (
        <div className="freelancers-list__freelancer" key={freelancer.id}>
          <div className="inner-freelancers">
            <div className="freelancer__img">
              <img src={profileImg}></img>
            </div>
            <div className="inner-freelancers-img__name">
              <h1>
                <span>{freelancer.freelancersName}</span>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M22 11L19.56 8.21L19.9 4.52L16.29 3.7L14.4 0.5L11 1.96L7.6
                                        0.5L5.71 3.69L2.1 4.5L2.44 8.2L0 11L2.44 13.79L2.1 17.49L5.71 18.31L7.6
                                        21.5L11 20.03L14.4 21.49L16.29 18.3L19.9 17.48L19.56 13.79L22 11ZM9.09
                                        15.72L5.29 11.91L6.77 10.43L9.09 12.76L14.94 6.89L16.42 8.37L9.09
                                        15.72Z"
                    fill="#0038FF"
                  />
                </svg>
              </h1>
              <h2>Product Designer</h2>
            </div>
            <div className="freelancers-list__freelancer-category-star-and-bid-button">
              <div className="freelancers-list__freelancer-stars-amount">
                <div className="freelancers-list__freelancer-star-number">
                  {freelancer.starNumber}
                </div>
                <Star stars={stars} currentValue={currentValue} />
                <span>{freelancer.freelancerAmount}</span>
              </div>
              <button className="freelancers-list__freelancer-bid-button" onClick={() => setOpen(true)}>
                Hire Me
              </button>
            </div>
          </div>

          <p className="freelancers-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan,
            diam pretium amet habitasse. Viverra vel enim magna nibh neque
            curabitur egestas. Proin magna pellentesque nunc egestas. Mauris
            semper a, odio eget pharetra convallis. Porttitor turpis fames purus
            pretium sit scelerisque.
          </p>
          <div className="freelancers-related__category">
            <div className="category__freelancer">Web Design</div>
            <div className="category__freelancer">App Design</div>
            <div className="category__freelancer">Mockup</div>
            <div className="category__freelancer">Prototyping</div>
            <div className="category__freelancer">User Experience Design</div>
            <div className="category__freelancer">User Interface Design</div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(freelancers.length / freelancersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="top-freelancers">
        <ImagelessBanner bannerText="Top Freelancers" />
        <div className="container">
          <div className="top-freelancers__inner">
            <p className="page-nav">Vangold > Browse freelancers</p>
            <div className="search-component">
              <SelectInputComponent selectOptions={selectOptions} />
              <SearchInputComponent />
              <Location />
              <button>Search</button>
            </div>
            <div className="freelancers-list">
              <p className="total-freelance">
                We have 1,027 freelancers offereing 24 services
              </p>
              {displayfreelancers}
            </div>
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
      <>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            center
            classNames={{
            overlay: 'customOverlay',
            modal: 'topJobsViewModal',
            closeButton: 'closeIcon',
            }}
        >
            
            <div className="banner2__form">
            <h2>Send an offer to Daramola</h2>
            <label className="modalLabel" htmlFor="username">
              State clearly what you want Daramola to do for you
            </label>
                <TopJobsViewModal />
            </div>
        </Modal>
      </>
    </div>
  );
};

export default TopFreelancers;
