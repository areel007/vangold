import './App.css';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Header from "./component/core-ui/header/header"
import Footer from "./component/core-ui/footer/footer"
import SignUp from "./component/views/sign-up";
import LogIn from "./component/views/log-in";
import ChangePassword from "./component/views/change-password";
import PasswordResetSuccess from "./component/views/password-reset-success";
import TermsAndConditions from "./component/views/terms-and-conditions";
import PrivacyPolicy from "./component/views/privacy-policy";
import {useState} from "react";
import MobileNav from "./component/core-ui/header/mobile-nav";

function App() {

    const history = useHistory();

    const routeChange = () =>{
        let path = `sign-up`;
        history.push(path);
    }

    const [links] = useState(
        [
            { linkName: 'Find Freelancer', to: '/find-freelancer' },
            { linkName: 'Browse Job', to: '/browse-job' },
            { linkName: 'English', to: '/english' },
            { linkName: 'Become a Business', to: '/become-a-business' },
        ]
    )

    const [buttons] = useState(
        [
            { buttonName: 'Login', to: '/login' },
            { buttonName: 'Sign up', to: '/sign-up' },
        ]
    )

    let [isMobileNavOut, setIsMobileNavOut] = useState(false)

    const toggleMobileNav = () => {
        setIsMobileNavOut(true)
    }

    const close = () => {
        setIsMobileNavOut(false)
    }

  return (
    <Router>
        <div className="App">
            <Header
                links={links}
                buttons={buttons}
                toggleMobileNav={toggleMobileNav}
            />
            <MobileNav
                links={links}
                buttons={buttons}
                isMobileNavOut={isMobileNavOut}
                close={close}
                routeChange={routeChange}
            />
            <Switch>
                <Route path="/" exact>
                    Hello World
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/changepassword">
                    <ChangePassword />
                </Route>
                <Route path="/passwordresetsuccessful">
                    <PasswordResetSuccess />
                </Route>
                <Route path="/terms-and-conditions">
                    <TermsAndConditions />
                </Route>
                <Route path="/privacypolicy">
                    <PrivacyPolicy />
                </Route>
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
