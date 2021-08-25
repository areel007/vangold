import "./log-in.css"
import LogInForm from "../../core-ui/auth/log-in-form/log-in-form";
import {Link} from "react-router-dom";
import LogInImage from "../../../assets/images/amico-login.png"

const LogIn = () => {
    return (
        <div className='log-in'>
            <div className="container">
                <p className="dont-have-account">Don’t have an account? <Link to="/sign-up">Create account</Link></p>
                <div className="log-in__inner">
                    <div className="log-in__image">
                        <img src={ LogInImage } alt="log in pic"/>
                    </div>
                    <div className="log-in__form">
                        <LogInForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn