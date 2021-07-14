import "./terms-and-conditions.css"
import TermsAndConditionUi from "../core-ui/legal/terms-and-conditions/terms-and-conditions-ui";
import TermsAndConditionUiHeader from "../core-ui/legal/terms-and-conditions/terms-and-conditions-header";
// import {Link} from "react-router-dom";

const TermsAndConditions = () => {
    return (
        <div className='terms-and-conditions'>
            <div className="container">
                <div className="terms-and-conditions__inner">
                    <div className="terms-and-conditions__ui">
                        <TermsAndConditionUiHeader />
                        <TermsAndConditionUi />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions