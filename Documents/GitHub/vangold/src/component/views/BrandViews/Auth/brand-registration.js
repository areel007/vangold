import "./brand-registration.css"
import BrSideNavSteppers from "../../../core-ui/brand-interface-ui/side-nav-steppers/b-side-nav-steppers";
import CompanyInfo from "../../../core-ui/brand-interface-ui/steps/company-info";
import Description from "../../../core-ui/brand-interface-ui/steps/description";
import {useState} from "react";
import Category from "../../../core-ui/brand-interface-ui/steps/category";
import BrLocation from "../../../core-ui/brand-interface-ui/steps/location";

const BrandRegistration = () => {

    let [stepPage, setStepPage] = useState(1)

    const showStep = (stepNumber) => {
        switch (stepNumber) {
            case 1:
                return <CompanyInfo />
            case 2:
                return <Description />
            case 3:
                return <Category />
            case 4:
                return <BrLocation />
        }
    }

    const saveAndNext = () => {
        stepPage < 4 ? setStepPage(stepPage = stepPage + 1) : stepPage = 4
    }

    const back = () => {
        stepPage > 0 ? setStepPage(stepPage = stepPage - 1) : stepPage = 0
    }

    return (
        <div className="brand-registration">
            <div className="container">
                <div className="brand-registration__inner">
                    <BrSideNavSteppers stepPage={stepPage} />
                    <div className="brand-registration__form">
                        { showStep(stepPage) }
                        <div className="b-save-and-next">
                            { stepPage > 1 ? <button className="back__button" onClick={back}>Back</button> : null}
                            <button className="b-save-and-next__button" onClick={saveAndNext}>Save and Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandRegistration