import "./freelancer-registration.css"
import SideNavSteppers from "../../../core-ui/side-nav-steppers/side-nav-steppers";

const FreelancerRegistration = () => {
    return (
        <div className="freelancer-registration">
            <div className="container">
                <div className="freelancer-registration__inner">
                    <SideNavSteppers />
                    <div className="freelancer-registration__form">
                        <p className="freelancer-registration__form-title">Personal Info</p>
                        <form>
                            <div className="form-control first-name">
                                <label>First Name</label>
                                <input type="text"/>
                            </div>
                            <div className="form-control last-name">
                                <label>Last Name</label>
                                <input type="text"/>
                            </div>
                            <div className="form-control email">
                                <label>Email</label>
                                <input type="text"/>
                            </div>
                            <div className="form-control linkedin-profile">
                                <label>LinkedIn Profile URL</label>
                                <input type="text"/>
                            </div>
                        </form>
                        <div className="upload-passport">
                            <label>Upload Passport Photograph</label>
                        </div>
                    </div>
                    <div className="save-and-next">
                        <button>Save and Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreelancerRegistration