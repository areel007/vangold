import React from "react";
import SideNavSteppers from "../side-nav-steppers/side-nav-steppers";

const FreelancerRegistrationMobileNav = (props) => {

    {
        return props.isFreelancerRegistrationNavOut ? <div className="freelancer-registration-mobile-nav">
            <SideNavSteppers isFreelancerRegistrationNavOut={props.isFreelancerRegistrationNavOut} stepPage={props.stepPage} />
        </div> : null
    }
}

export default FreelancerRegistrationMobileNav