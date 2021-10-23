import "./contactus.css"

const ContactUs = () => {

     const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

    };

    return (
        <div className="container">
            <div className='contact_us'>
                <div className="contact_us__left">
                    <h2>CONTACT US</h2>
                    <p className="contact_us__left__subtitle1">How can we <span>help</span> you?</p>
                    <p className="contact_us__left__subtitle2">Fill in the form and we will get back to you</p>
                    <div className="contact_us__left__btn-disabled">
                        <button disabled>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z" fill="#45B618"/>
                            </svg>
                            <span>+234800000000</span>
                        </button>
                        <button disabled>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#45B618"/>
                            </svg>
                            <span>support@vangoldservices.com</span>
                        </button>
                        <button disabled>
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#45B618"/>
                            </svg>
                            <span>Remote</span>
                        </button>
                    </div>
                </div>
                <div className="contact_us__right">
                   <form>
                            <div className="d-flex contact_us__right-form-top-input">
                                <div className="form__-control contact_us__right-form-control">
                                    <label htmlFor="First Name">First Name</label>
                                    <input name="fName" id="username" type="text" required/>
                                </div>
                                <div className="form__-control contact_us__right-form-control">
                                    <label htmlFor="Last Name">Last Name</label>
                                    <input name="lname" id="username" type="text" required/>
                                </div>
                            </div>
                            <div className="form__-control contact_us__right-form-control mt-5">
                                <label htmlFor="Email">Email Address</label>
                                <input name="email" type="email" required />
                            </div>
                            <div className="form__-control contact_us__right-form-control mt-5">
                                <label htmlFor="Subject">Subject</label>
                                <input name="subject" type="text" required />
                            </div>
                            <div className="form__-control contact_us__right-form-control mt-5">
                                <label htmlFor="Message">Your message</label>
                                <textarea name="message" className="textarea"></textarea>
                            </div>
                            <div className="form__-control contact_us__right-form-control mt-5">
                                <button type="submit" name="submit" className="submit__btn">SEND MESSAGE</button>
                            </div>
                   </form>
                </div>
           </div>
        </div>
    )
}

export default ContactUs