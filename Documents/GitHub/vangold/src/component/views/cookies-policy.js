import "./cookies-policy.css"
import CookiesPolicyUi from "../core-ui/legal/cookies-policy/cookies-policy-ui";
import CookiesPolicyUiHeader from "../core-ui/legal/cookies-policy/cookies-policy-header";
// import {Link} from "react-router-dom";

const CookiePolicy = () => {
    return (
        <div className='cookie-policy'>
            <div className="container">
                <div className="cookie-policy__inner">
                    <div className="cookie-policy__ui">
                        <CookiesPolicyUiHeader />
                        <CookiesPolicyUi />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookiePolicy