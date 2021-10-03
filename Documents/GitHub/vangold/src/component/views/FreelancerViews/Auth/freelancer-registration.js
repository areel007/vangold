import "./freelancer-registration.css"
import SideNavSteppers from "../../../core-ui/side-nav-steppers/side-nav-steppers";
import PersonalInfo from "../../../core-ui/steps/personal-info";
import Description from "../../../core-ui/steps/description";
import {useState} from "react";
import Category from "../../../core-ui/steps/category";
import Expertise from "../../../core-ui/steps/expertise";
import Education from "../../../core-ui/steps/education";
import Employment from "../../../core-ui/steps/employment";
import Rate from "../../../core-ui/steps/rate";
import Language from "../../../core-ui/steps/language.js";
import Location from "../../../core-ui/steps/location";
import ExpertiseLevel from "../../../core-ui/steps/expertise-level";
import FreelanceRegistrationMobileNavToggleButton
    from "../../../core-ui/freelancer-registration-mobile-nav/freelance-registration-mobile-nav-toggle-button";
import FreelancerRegistrationMobileNav
    from "../../../core-ui/freelancer-registration-mobile-nav/freelancer-registration-mobile-nav";

const FreelancerRegistration = () => {

    let [stepPage, setStepPage] = useState(1)

    const [isFreelancerRegistrationNavOut, setIsFreelancerRegistrationNavOut] = useState(false)

    const showStep = (stepNumber) => {
        switch (stepNumber) {
            case 1:
                return <PersonalInfo />
            case 2:
                return <Description />
            case 3:
                return <Category />
            case 4:
                return <Expertise />
            case 5:
                return <ExpertiseLevel />
            case 6:
                return <Education />
            case 7:
                return <Employment />
            case 8:
                return <Rate />
            case 9:
                return <Language />
            case 10:
                return <Location />
        }
    }

    const saveAndNext = () => {
        stepPage < 10 ? setStepPage(stepPage = stepPage + 1) : stepPage = 10
    }

    const back = () => {
        stepPage > 0 ? setStepPage(stepPage = stepPage - 1) : stepPage = 0
    }

    const toggleFreelancerRegistrationNavOut = () => {
        setIsFreelancerRegistrationNavOut(true)
    }

    const toggleFreelancerRegistrationNavIn = () => {
        setIsFreelancerRegistrationNavOut(false)
    }

    return (
        <div className="freelancer-registration">
            <div className="container">
                <div className="freelancer-registration__inner">
                    <SideNavSteppers
                        stepPage={stepPage}
                    />
                    <div className="freelancer-registration__form">
                        <FreelanceRegistrationMobileNavToggleButton
                            buttonText="My Application"
                            toggleFreelancerRegistrationNavOut={toggleFreelancerRegistrationNavOut}
                            toggleFreelancerRegistrationNavIn={toggleFreelancerRegistrationNavIn}
                            isFreelancerRegistrationNavOut={isFreelancerRegistrationNavOut}
                        />
                        <FreelancerRegistrationMobileNav
                            isFreelancerRegistrationNavOut={isFreelancerRegistrationNavOut}
                            stepPage={stepPage}
                        />
                        { showStep(stepPage) }
                        <div className="save-and-next">
                            { stepPage > 1 ? <button className="back__button" onClick={back}>Back</button> : null}
                            <button className="save-and-next__button" onClick={saveAndNext}>Save and Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreelancerRegistration