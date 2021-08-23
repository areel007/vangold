import BrSelectInputComponent from "./select/location-select/b-select-input-component"
import BrSelectInputComponentTwo from "./select/location-select/b-select-input-component2"

const BrLocation = () => {
    return (
        <div className="b-step">
            <p className="b-step-title">Location</p>
            <span className="b-step-subtitle">Where is your company located?</span>
            <div className="location-br-select">
                <BrSelectInputComponent />
                <BrSelectInputComponentTwo />
            </div>
            <p className="location-p">We take privacy very seriously. Only your country and city will be revealed to clients</p>
            <form className="br-location-form">
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

export default BrLocation