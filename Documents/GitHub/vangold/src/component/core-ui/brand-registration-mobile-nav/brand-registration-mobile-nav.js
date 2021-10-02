import "./brand-registration-mobile-nav.css"
import BrSideNavSteppers from "../brand-interface-ui/side-nav-steppers/b-side-nav-steppers";

const BrandRegistrationMobileNav = (props) => {
    return props.isFreelancerRegistrationNavOut ? <div className="brand-registration-mobile-nav">
        <BrSideNavSteppers isFreelancerRegistrationNavOut={props.isFreelancerRegistrationNavOut} stepPage={props.stepPage} />
    </div> : null
}

export default BrandRegistrationMobileNav;