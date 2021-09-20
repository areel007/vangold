import React, {useState} from "react";
import "./TopJobs.css";
import SearchBox from "../../core-ui/SearchInput/SearchBox";
import TopJobsHeader from "./TopJobsHeader";
import SideCheckBoxes from "../../core-ui/SideCheckBoxes/SideCheckBoxes";
import BannerCoverImg from "../../../assets/images/profile/cover.png";
import JobsLogImg from "../../../assets/images/profile/micro.png";
import SendBidModal from "../../core-ui/SendBidModal/SendBidModal";

const TopJobsTwo = (props) => {
    const [modalShow, setModalShow] = useState(false);

  return (
    <div className="top-freelancer">
      <TopJobsHeader />
      <div className="container">
        <p className="top__jobs__freelancers">Vangold > Browse Jobs</p>
        <SearchBox />
        <div className="inn-top-freelancer">
          <div className="sideBarTopJobs d-none d-lg-block">
            <SideCheckBoxes />
          </div> 
          <div className="top__Jobs__view">
            <div className="jobs-view-banner">
              <img src={BannerCoverImg} alt="jobs view" />
            </div>
            <div className="jobs-view-logo">
                <img src={JobsLogImg} alt="jobs view logo" />
            </div>
            <div style={{padding: 24}}>
                <div class="row ">
                    <div class="col-lg-8 col-10">
                        <h1 class="user__experience_TEXT">User Experience Design</h1>
                    </div>
                    <div class="align-self-center text-end col-lg-4 col-10">
                        <button type="button" class="job-btn-love me-4 mt-4 btn btn-light">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#4F4F4F"/>
                            </svg>
                        </button>
                        <button type="button" class="job-btn-share mt-4 btn btn-light">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08Z" fill="#4F4F4F"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div style={{marginTop: 30}} class="row">
                    <div class="col-lg-6 col-10">
                        <div class="d-flex top_jobs_view-paragraph-1">
                            <p class="text-16px me-3">Microsoft</p>
                            <p class="text-16px-1">Santa Ana,CA</p>
                        </div>
                    </div>
                    <div class="align-self-center text-end col-lg-6 col-10">
                        <div class="d-flex justify-content-end top_jobs_view-paragraph-2">
                            <p class="text-16px-1 me-3">Posted 8 Days ago</p>
                            <p class="text-16px">76 Applicants</p>
                        </div>
                    </div>
                </div>
                <div class="mt-4 row-_-border row">
                    <div class="border-right px-5 py-4 col-lg-3 col-10">
                        <p class="text-16px-1">Experience</p>
                        <p class="text-16px">Minimum 1 Year</p>
                    </div>
                    <div class="border-right px-5 py-4 col-lg-3 col-10">
                        <p class="text-16px-1">Employment Type</p>
                        <p class="text-16px">Contract</p>
                    </div>
                    <div class="border-right px-5 py-4 col-lg-3 col-10">
                        <p class="text-16px-1">Duration</p>
                        <p class="text-16px">6 Months</p>
                    </div>
                    <div class="px-5 py-4 col-lg-3 col-10">
                        <p class="text-16px-1">Offer Salary</p>
                        <p class="text-16px">$2150/Month</p>
                    </div>
                </div>
                <div className="top__jobs__view-description">
                    <h1>Description</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque egestas leo tempor in ut
                        eget. Euismod et scelerisque aliquam viverra. Vel, nullam pellentesque neque, elit ut cras vitae. Facilisis non sit
                        elit quis consectetur lobortis. Mollis fusce nibh elementum eget bibendum quam proin. Arcu lacus mauris pellentesque
                        in risus. Consectetur cras adipiscing accumsan, lacus id a. Nibh dictum eget amet nec ultricies purus porttitor
                        pretium. Dignissim ridiculus molestie vestibulum suscipit at tempus. Vitae risus fringilla quis in sagittis nulla
                        auctor. Donec vulputate feugiat massa turpis. Id sed quis nulla sed. Auctor porttitor felis in vulputate. Cras enim,
                        vulputate nunc, ornare. </p>
                </div>
                <div className="top__jobs__view-description">
                    <h1>Description</h1>
                    <ul class="text-16px-1">
                        <li class="mb-3">
                            <span class="me-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="5.5" fill="#F2F2F2" stroke="#45B618"/>
                                </svg>
                            </span> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li class="mb-3">
                            <span class="me-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="5.5" fill="#F2F2F2" stroke="#45B618"/>
                                </svg>
                            </span> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque egestas leo tempor in ut eget.
                        </li>
                        <li class="mb-3">
                            <span class="me-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="5.5" fill="#F2F2F2" stroke="#45B618"/>
                                </svg>
                            </span> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque egestas leo tempor in ut eget.
                        </li>
                        <li class="mb-3">
                            <span class="me-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="5.5" fill="#F2F2F2" stroke="#45B618"/>
                                </svg>
                            </span> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li class="mb-3">
                            <span class="me-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="5.5" fill="#F2F2F2" stroke="#45B618"/>
                                </svg>
                            </span> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque egestas leo tempor in ut eget.
                        </li>
                        <li class="mb-3">
                            <span class="me-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="5.5" fill="#F2F2F2" stroke="#45B618"/>
                                </svg>
                            </span> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque egestas leo tempor in ut eget.
                        </li>
                        
                    </ul>
                </div>
                <div className="topjobsview-applyBtn">
                    <button onClick={() => setModalShow(true)}>Apply</button>
                </div>
                <SendBidModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                head="Send a bid for this job"
                para="What makes you the right person for this job"
                btntext='Apply' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopJobsTwo;