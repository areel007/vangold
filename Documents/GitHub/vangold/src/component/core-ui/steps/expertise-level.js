import "./steps.css"

const ExpertiseLevel = (props) => {

    return <div className="step">
        <p className="step-title">Expertise Level</p>
        <span className="step-subtitle">What is your level of experience in this field?</span>
        <div className="expertise-level__cards">
            <label className="expertise-card">
                <input type="radio" name="radioname" value="entry" />
                <div>
                    <p className="expertise-card__title">Entry Level</p>
                    <p className="expertise-card__subtitle">Less than a year experience</p>
                </div>
            </label>
            <label className="expertise-card">
                <input type="radio" name="radioname" value="intermediate"/>
                <div>
                    <p className="expertise-card__title">Intermediate</p>
                    <p className="expertise-card__subtitle">1 - 2 years experience</p>
                </div>
            </label>
            <label className="expertise-card">
                <input type="radio" name="radioname" value="expert"/>
                <div>
                    <p className="expertise-card__title">Expert</p>
                    <p className="expertise-card__subtitle">3 years experience and above</p>
                </div>
            </label>
        </div>
    </div>
}

export default ExpertiseLevel