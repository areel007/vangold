import "./log-in.css"
import LogInForm from "../../core-ui/auth/log-in-form/log-in-form";
import {Link} from "react-router-dom";
import LogInImage from "../../../assets/images/amico-login.png"

const LogIn = () => {
    return (
        <div className='auth-form'>
            <div className="container">
                <p className="dont-have-account">Don’t have an account? <Link to="/sign-up">Create account</Link></p>
                <div className="auth-form__inner">
                    <div className="auth-form__image">
                        <img src={ LogInImage } alt="log in pic"/>
                    </div>
                    <div className="auth-form__form">
                        <LogInForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn