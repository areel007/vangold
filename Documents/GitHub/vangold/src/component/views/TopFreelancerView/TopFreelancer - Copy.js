import React from "react";
import "./TopFreelancer.css";
import SearchBox from "../../core-ui/SearchInput/SearchBox";
import TopHeader from "./TopHeader";
import SideCheckBoxes from "../../core-ui/SideCheckBoxes/SideCheckBoxes1";
import Star from "../../core-ui/star/star"



const TopFreelancer = (props) => {
    const stars = Array(5).fill(0);
    
  return (
    <div className="top-freelancer">
      <TopHeader />
      <div className="container">
        <p>Vangold > Browse Jobs</p>
        <SearchBox />
        <div className="inn-top-freelancer">
          <div className="sideBarTopFreealancer">
              <SideCheckBoxes />
          </div>
          <div className="TopFreealancerContent">
            <div className="TopFreealancerContent__BOX">
                <div className="inn__TopFreealancerContent__BOX">
                    <div className="inn__TopFreealancerContent__BOX-details_TOP">
                        <div className="Top__Freelancer_pic">

                        </div>
                        <div className="Top__Freelancer_info">
                            <div className="verify-logo">
                                <h2>Justin Kan</h2>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11L19.56 8.21L19.9 4.52L16.29 3.7L14.4 0.5L11 1.96L7.6 0.5L5.71 3.69L2.1 4.5L2.44 8.2L0 11L2.44 13.79L2.1 17.49L5.71 18.31L7.6 21.5L11 20.03L14.4 21.49L16.29 18.3L19.9 17.48L19.56 13.79L22 11ZM9.09 15.72L5.29 11.91L6.77 10.43L9.09 12.76L14.94 6.89L16.42 8.37L9.09 15.72Z" fill="#0038FF"/>
                                </svg>
                            </div>
                            <h3>Product Designer</h3>
                        </div>
                    </div>
                    <div className="inn__TopFreealancerContent__BOX-details_BOTTOM">
                        <button className="">Hire</button>
                        <button>35 USD</button>
                        <button>Send message</button>
                        <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0H4C1.8 0 0.0200005 1.8 0.0200005 4L0 36L14 30L28 36V4C28 1.8 26.2 0 24 0Z" fill="#45B618"/>
                        </svg>
                    </div>
                </div>
                <div className="inn__TopFreealancerContent__BOX">
                    <div className="inn__TopFreealancerContent__BOX_images">
                        <div className="TopFreealancerContent__BOX_images">

                        </div>
                        <div className="TopFreealancerContent__BOX_images">

                        </div>
                        <div className="TopFreealancerContent__BOX_images">

                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFreelancer;
