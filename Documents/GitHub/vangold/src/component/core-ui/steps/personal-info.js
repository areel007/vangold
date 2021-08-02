import "./steps.css"

const PersonalInfo = () => {

    return (
        <div className="step">
            <p className="step-title">Personal Info</p>
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
    )
}

export default PersonalInfo