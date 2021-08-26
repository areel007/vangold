import "./change-password.css"
import ResetPasswordForm from "../../core-ui/auth/reset-password-form/reset-password-form";
import {Link} from "react-router-dom";
import ResetPasswordImage from "../../../assets/images/bro.png"

const ResetPassword = () => {
    return (
        <div className='change-password'>
            <div className="container">
                <p className="change-account-pswrd"><Link to="/login">Back to Login</Link></p>
                <div className="change-password__inner">
                    <div className="change-password__image">
                        <img src={ ResetPasswordImage } alt="log in pic"/>
                    </div>
                    <div className="change-password__form">
                        <ResetPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword