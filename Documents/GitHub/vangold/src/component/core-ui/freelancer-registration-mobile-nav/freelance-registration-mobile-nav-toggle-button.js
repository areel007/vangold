import "./freelancer-registration-mobile-nav.css"

const FreelanceRegistrationMobileNavToggleButton = (props) => {

    return (
        <div className="freelancer-registration-mobile-nav-toggle-button">
            {
                !props.isFreelancerRegistrationNavOut ? <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    onClick={props.toggleFreelancerRegistrationNavOut}
                >
                    <path d="M0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4Z" fill="#45B618"/>
                </svg> : null
            }
            {
                props.isFreelancerRegistrationNavOut ? <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    onClick={props.toggleFreelancerRegistrationNavIn}
                >
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#45B618"/>
                </svg> : null
            }

            <span className="button-text">{props.buttonText}</span>
        </div>
    )
}

export default FreelanceRegistrationMobileNavToggleButton;