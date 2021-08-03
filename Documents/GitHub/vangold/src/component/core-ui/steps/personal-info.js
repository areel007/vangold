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
                <label>Upload Passport Photograph </label>
                <div class='file'>
                    <label for='input-file'>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54 48V6C54 2.7 51.3 0 48 0H6C2.7 0 0 2.7 0 6V48C0 51.3 2.7 54 6 54H48C51.3 54 54 51.3 54 48ZM16.5 31.5L24 40.53L34.5 27L48 45H6L16.5 31.5Z" fill="black" fill-opacity="0.3"/>
                    </svg>
                    </label>
                    <input id='input-file' type='file' />
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo