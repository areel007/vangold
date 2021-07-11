import "./reset-password.css"
import {Link} from "react-router-dom";
import resetPassageImage from "../../../assets/images/bro.png"

const ResetPassword = () => {
    return (
        <div className='reset-password'>
            <div className="container">
                <p className="already-have-account">
                    <Link to="/login">Back to Login</Link>
                </p>
                <div className="reset-password__inner">
                    <div className="reset-password__image">
                        <img src={ resetPassageImage } alt="sign up pic"/>
                    </div>
                    <form className="reset-password__form">
                        <h1 className="reset-password-form__title">Reset your Password</h1>
                        <p className="reset-password-form__subtitle">Enter the registered email address to get a password reset link</p>
                        <div className="reset-password-form__control">
                            <label>Email</label>
                            <input type="text"/>
                        </div>
                        <button className="reset-password-submit__button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword