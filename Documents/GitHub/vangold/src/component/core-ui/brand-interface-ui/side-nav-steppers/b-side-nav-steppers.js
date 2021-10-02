import "./b-side-nav-steppers.css"
import Stepper from "./b-stepper"
import {useState} from "react";

const BrSideNavSteppers = (props) => {

    let className = 'brand-side-nav-steppers'
    if (props.isFreelancerRegistrationNavOut) {
        className += ' brand-side-nav-steppers-out'
    }

    const [steps] = useState([
        {
            description: "Company Info",
            completed: false,
            selected: true
        },
        {
            description: "Description",
            completed: false,
            selected: false,
        },
        {
            description: "Category",
            completed: false,
            selected: false,
        },
        {
            description: "Location",
            completed: false,
            selected: false,
        },
    ])
    return (
        <div className={className}>
            {
                !props.isFreelancerRegistrationNavOut ? <p className="steppers__title">My Application</p> :null
            }
            <Stepper  steps={steps} stepPage={props.stepPage} />
        </div>
    )
}

export default BrSideNavSteppers