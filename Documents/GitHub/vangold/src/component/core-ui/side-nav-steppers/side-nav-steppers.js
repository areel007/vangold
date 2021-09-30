import "./side-nav-steppers.css"
import Stepper from "./stepper";
import {useState} from "react";

const SideNavSteppers = (props) => {

    let className = 'side-nav-steppers'
    if (props.isFreelancerRegistrationNavOut) {
        className += ' side-nav-steppers-out'
    }

    const [steps] = useState([
        {
            description: "Personal Info",
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
            description: "Expertise",
            completed: false,
            selected: false,
        },
        {
            description: "Education",
            completed: false,
            selected: false,
        },
        {
            description: "Employment",
            completed: false,
            selected: false,
        },
        {
            description: "Rate",
            completed: false,
            selected: false,
        },
        {
            description: "Language",
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
        <div className={className} >
            {
                !props.isFreelancerRegistrationNavOut ? <p className="steppers__title">My Application</p> :null
            }
            <Stepper  steps={steps} stepPage={props.stepPage} />
        </div>
    )
}

export default SideNavSteppers