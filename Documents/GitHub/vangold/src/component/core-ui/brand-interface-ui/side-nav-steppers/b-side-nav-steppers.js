import "./b-side-nav-steppers.css"
import Stepper from "./b-stepper"
import {useState} from "react";

const BrSideNavSteppers = (props) => {
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
        <div className="side-nav-steppers">
            <p className="steppers__title">My Application</p>
            <Stepper  steps={steps} stepPage={props.stepPage} />
        </div>
    )
}

export default BrSideNavSteppers