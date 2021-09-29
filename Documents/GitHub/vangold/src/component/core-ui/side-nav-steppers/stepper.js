import "./stepper.css"

const Stepper = (props) => {
    const {steps} = props

    const displaySteps = steps.map((step, index) => {
        return step.description === 'Personal Info' ? <div className={`stepper ${props.stepPage===1 ? 'stepper-active' : null}`}  key={index}>
            <div className="stepper-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="white"/>
                </svg>

            </div>
            <div className="stepper-description">{step.description}</div>
            <div className="stepper-check">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#333333"/>
            </svg>

            </div>

        </div> : step.description === 'Description' ? <div className={`stepper ${props.stepPage===2 ? 'stepper-active' : null}`} key={index}>
            <div className="stepper-icon">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z" fill="#333333"/>
                </svg>

            </div>
            <div className="stepper-description">{step.description}</div>
            <div className="stepper-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="white"/>
                </svg>
            </div>

        </div> : step.description === 'Category' ? <div className={`stepper ${props.stepPage===3 ? 'stepper-active' : null}`} key={index}>
            <div className="stepper-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L6.5 11H17.5L12 2Z" fill="#333333"/>
                    <path d="M17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22Z" fill="#333333"/>
                    <path d="M3 13.5H11V21.5H3V13.5Z" fill="#333333"/>
                </svg>


            </div>
            <div className="stepper-description">{step.description}</div>
            <div className="stepper-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="white"/>
                </svg>
            </div>

        </div> : step.description === 'Expertise' ? <div className={`stepper ${props.stepPage===4 || props.stepPage===5 ? 'stepper-active' : null}`} key={index}>
            <div className="stepper-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.6698 18.1701L16.3698 12.8701H15.3798L12.8398 15.4101V16.4001L18.1398 21.7001C18.5298 22.0901 19.1598 22.0901 19.5498 21.7001L21.6698 19.5801C22.0598 19.2001 22.0598 18.5601 21.6698 18.1701Z" fill="#333333"/>
                    <path d="M17.34 10.19L18.75 8.78L20.87 10.9C22.04 9.73 22.04 7.83 20.87 6.66L17.33 3.12L15.92 4.53V1.71L15.22 1L11.68 4.54L12.39 5.25H15.22L13.81 6.66L14.87 7.72L11.98 10.61L7.85 6.48V5.06L4.83 2.04L2 4.87L5.03 7.9H6.44L10.57 12.03L9.72 12.88H7.6L2.3 18.18C1.91 18.57 1.91 19.2 2.3 19.59L4.42 21.71C4.81 22.1 5.44 22.1 5.83 21.71L11.13 16.41V14.29L16.28 9.14L17.34 10.19Z" fill="#333333"/>
                </svg>

            </div>
            <div className="stepper-description">{step.description}</div>
            <div className="stepper-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="white"/>
                </svg>
            </div>

        </div> : step.description === 'Education' ? <div className={`stepper ${props.stepPage===6 ? 'stepper-active' : null}`} key={index}>
            <div className="stepper-icon">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10.18V14.18L11 18L18 14.18V10.18L11 14L4 10.18ZM11 0L0 6L11 12L20 7.09V14H22V6L11 0Z" fill="#333333"/>
                </svg>

            </div>
            <div className="stepper-description">{step.description}</div>
            <div className="stepper-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="white"/>
                </svg>
            </div>

        </div> : step.description === 'Employment' ? <div className={`stepper ${props.stepPage===7 ? 'stepper-active' : null}`} key={index}>
            <div className="stepper-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 5H13V2C13 0.9 12.1 0 11 0H9C7.9 0 7 0.9 7 2V5H2C0.9 5 0 5.9 0 7V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V7C20 5.9 19.1 5 18 5ZM7 10C7.83 10 8.5 10.67 8.5 11.5C8.5 12.33 7.83 13 7 13C6.17 13 5.5 12.33 5.5 11.5C5.5 10.67 6.17 10 7 10ZM10 16H4V15.25C4 14.25 6 13.75 7 13.75C8 13.75 10 14.25 10 15.25V16ZM11 7H9V2H11V7ZM16 14.5H12V13H16V14.5ZM16 11.5H12V10H16V11.5Z" fill="#333333"/>
                </svg>

            </div>
            <div className="stepper-description">{step.description}</div>
            <div className="stepper-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="white"/>
                </svg>
            </div>

        </div> : step.description === 'Rate' ? <div className={`stepper ${props.stepPage===8 ? 'stepper-active' : null}`} key={index}>
            <div className="stepper-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10.88 15.76V17H9.13V15.71C8.39 15.53 6.74 14.94 6.11 12.75L7.76 12.08C7.82 12.3 8.34 14.17 10.16 14.17C11.09 14.17 12.14 13.69 12.14 12.56C12.14 11.6 11.44 11.1 9.86 10.53C8.76 10.14 6.51 9.5 6.51 7.22C6.51 7.12 6.52 4.82 9.13 4.26V3H10.88V4.24C12.72 4.56 13.39 6.03 13.54 6.47L11.96 7.14C11.85 6.79 11.37 5.8 10.06 5.8C9.36 5.8 8.25 6.17 8.25 7.19C8.25 8.14 9.11 8.5 10.89 9.09C13.29 9.92 13.9 11.14 13.9 12.54C13.9 15.17 11.4 15.67 10.88 15.76Z" fill="#333333"/>
                </svg>

            </div>
            <div className="stepper-description">{step.description}</div>
            <div className="stepper-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="white"/>
                </svg>
            </div>

        </div> : step.description === 'Language' ? <div className={`stepper ${props.stepPage===9 ? 'stepper-active' : null}`} key={index}>
            <div className="stepper-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM16.92 6H13.97C13.65 4.75 13.19 3.55 12.59 2.44C14.43 3.07 15.96 4.35 16.92 6ZM10 2.04C10.83 3.24 11.48 4.57 11.91 6H8.09C8.52 4.57 9.17 3.24 10 2.04ZM2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12H2.26ZM3.08 14H6.03C6.35 15.25 6.81 16.45 7.41 17.56C5.57 16.93 4.04 15.66 3.08 14ZM6.03 6H3.08C4.04 4.34 5.57 3.07 7.41 2.44C6.81 3.55 6.35 4.75 6.03 6ZM10 17.96C9.17 16.76 8.52 15.43 8.09 14H11.91C11.48 15.43 10.83 16.76 10 17.96ZM12.34 12H7.66C7.57 11.34 7.5 10.68 7.5 10C7.5 9.32 7.57 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.96 15.65 14.43 16.93 12.59 17.56ZM14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12H14.36Z" fill="#333333"/>
                </svg>

            </div>
            <div className="stepper-description">{step.description}</div>
            <div className="stepper-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="white"/>
                </svg>
            </div>

        </div> : <div className={`stepper ${props.stepPage===10 ? 'stepper-active' : null}`} key={index}>
            <div className="stepper-icon">
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#333333"/>
                </svg>

            </div>
            <div className="stepper-description">{step.description}</div>
            <div className="stepper-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="white"/>
                </svg>
            </div>

        </div>
    })
    return <div className="steps-container">{displaySteps}</div>
}

export default Stepper