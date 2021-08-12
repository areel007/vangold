import React from "react";
import "./main-section2.css";
import AboutUsCard from "../card/talent-card/about-us-card";
import BrownsingIcon from "../../../assets/images/svgicons/browsing.svg";
import PostIcon from "../../../assets/images/svgicons/Post.svg";
import FindIcon from "../../../assets/images/svgicons/find.svg";

const MainSectionTwo = (props) => {
  return (
    <div>
      <div className="container home-two">
        <div className="home-two-title">
          <h2>What’s great about us</h2>
        </div>
        <div className="home-two-card-container">
          <div className="home-two-card">
            <div className="card-icon">
              <img src={BrownsingIcon} alt="browsing icon" />
            </div>
            <div className="card-title">
              <h2>Browse Jobs</h2>
            </div>
            <div className="card-article">
              <p>
                Freelancers can bid for different jobs on VanGold based on their
                level of competence and expertise.
              </p>
            </div>
          </div>
          <div className="home-two-card">
            <div className="card-icon">
              <img src={PostIcon} alt="browsing icon" />
            </div>
            <div className="card-title">
              <h2>Post a Job</h2>
            </div>
            <div className="card-article">
              <p>
                Posting a job on VanGold is easy and seamless and our expert
                professionals are ready to do the job.
              </p>
            </div>
          </div>
          <div className="home-two-card">
            <div className="card-icon">
              <img src={FindIcon} alt="browsing icon" />
            </div>
            <div className="card-title">
              <h2>Find Freelancers</h2>
            </div>
            <div className="card-article">
              <p>
                Choose from an array of freelancers that has been vetted and
                approved by us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="container">
          <div className="main-section__inner">
            <div className="popular-service">
              <p className="popular-service-title">Popular Services</p>
              <div className="list-of-talents">
                {props.aboutUsCardDetails.map((aboutUsCardDetail) => {
                  return (
                    <AboutUsCard
                      key={aboutUsCardDetail.voiceOverAvatar}
                      aboutUsCardDetail={aboutUsCardDetail}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="secure-payment-section">
          <div className="container">
            <div className="inner__secure-payment-section">
              <div className="looking-for-talent-image secure-payment-section-img">
                <img
                  src="images/popular-service.png"
                  alt="looking for talent"
                />
              </div>
              <div className="looking-for-talent-text">
                <p className="popular-service-text__title">
                  Secured Payment System
                </p>
                <p className="looking-for-talent-text__subtitle">
                  Money will only be released to the freelancer when the job is
                  done and you are 100% satisfied with the job done using our
                  milestone project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-top-freelancers">
            <div className="container">
              <div className="inner-our-top-freelancers">

              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionTwo;
