import "./privacy-policy.css"
import PrivacyPolicyUi from "../core-ui/legal/privacy-policy/privacy-policy-ui";
import PrivacyPolicyUiHeader from "../core-ui/legal/privacy-policy/privacy-policy-header";
// import {Link} from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className='privacy-policy'>
            <div className="container">
                <div className="privacy-policy__inner">
                    <div className="privacy-policy__ui">
                        <PrivacyPolicyUiHeader />
                        <PrivacyPolicyUi />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy