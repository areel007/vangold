import "./change-password.css"
import ChangePasswordForm from "../../core-ui/auth/change-password-form/change-password-form";
import {Link} from "react-router-dom";
import ChangePasswordImage from "../../../assets/images/amico-change-password-form.png"

const ChangePassword = () => {
    return (
        <div className='change-password'>
            <div className="container">
                <p className="change-account-pswrd"><Link to="/login">Back to Login</Link></p>
                <div className="change-password__inner">
                    <div className="change-password__image">
                        <img src={ ChangePasswordImage } alt="log in pic"/>
                    </div>
                    <div className="change-password__form">
                        <ChangePasswordForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword