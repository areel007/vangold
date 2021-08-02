import "./freelancer-registration.css"
import SideNavSteppers from "../../../core-ui/side-nav-steppers/side-nav-steppers";
import PersonalInfo from "../../../core-ui/steps/personal-info";
import Description from "../../../core-ui/steps/description";
import {useState} from "react";
import Category from "../../../core-ui/steps/category";

const FreelancerRegistration = () => {

    let [stepPage, setStepPage] = useState(1)

    const showStep = (stepNumber) => {
        switch (stepNumber) {
            case 1:
                return <PersonalInfo />
            case 2:
                return <Description />
            case 3:
                return <Category />
        }
    }

    const saveAndNext = () => {
        stepPage < 9 ? setStepPage(stepPage = stepPage + 1) : stepPage = 9
    }

    const back = () => {
        stepPage > 0 ? setStepPage(stepPage = stepPage - 1) : stepPage = 0
    }

    return (
        <div className="freelancer-registration">
            <div className="container">
                <div className="freelancer-registration__inner">
                    <SideNavSteppers stepPage={stepPage} />
                    <div className="freelancer-registration__form">
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