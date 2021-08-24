import "./steps.css"

const Location = (props) => {
    return (
        <div className="step">
            <p className="step-title">Location</p>
            <span className="step-subtitle">Where do you live?</span>

            <p className="location-p">We take privacy very seriously. Only your country and city will be revealed to clients</p>
            <form className="location-form">
                <div className="form-control Address">
                    <label>Address</label>
                    <input type="text" />
                </div>
                <div className="form-control zip-postal-code">
                    <label>Zip/Postal Code</label>
                    <input type="email" />
                </div>
            </form>
        </div>
    )
}

export default Location