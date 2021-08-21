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
import CookiesPolicy from "./component/views/cookies-policy";
import {useState} from "react";
import MobileNav from "./component/core-ui/header/mobile-nav";
import ResetPassword from "./component/views/reset-password/reset-password";
import Home from "./component/views/home/home";
import HomeTwo from './component/views/home/home2';
import TopJobs from "./component/views/top-jobs/top-jobs";
import TopJobsView from './component/views/top-jobs/top-jobs-view';
import TopFreelancers from "./component/views/top-freelancers/top-freelancers";
import FreelancerRegistration from "./component/views/auth/freelancer-registration/freelancer-registration";
import PostJob from './component/views/EmployerViews/PostJob';


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

    const [cardDetails] = useState([
        { cardImage: "voice-over.png", voiceOverAvatar: "voice-over-avatar.png", position: "Voice Over Artist" },
        { cardImage: "frontend-dev.png", voiceOverAvatar: "frontend-avatar.png", position: "Frontend Developer" },
        { cardImage: "product-designer.png", voiceOverAvatar: "product-designer-avatar.png", position: "Product Designer" },
        { cardImage: "graphic-designer.png", voiceOverAvatar: "graphic-designer-avatar.png", position: "Graphic Designer" },
    ])

    const [aboutUsCardDetails] = useState([
        { cardImage: "popular-service1.png", productServiceCaption: "Voice Over" },
        { cardImage: "popular-service2.png", productServiceCaption: "Social Media" },
        { cardImage: "popular-service3.png", productServiceCaption: "Illustration" },
        { cardImage: "popular-service4.png", productServiceCaption: "Product Design" },
        { cardImage: "popular-service5.png", productServiceCaption: "Graphic Designer" },
    ])

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
                    <HomeTwo aboutUsCardDetails={aboutUsCardDetails} />
                </Route>
                <Route path="/home">
                    <Home cardDetails={cardDetails} />
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
                <Route path="/cookiepolicy">
                    <CookiesPolicy />
                </Route>
                <Route path="/reset-password">
                    <ResetPassword />
                </Route>
                <Route path="/browse-jobs">
                    <TopJobs />
                </Route>
                <Route path="/top-jobs-view">
                    <TopJobsView />
                </Route>
                <Route path="/browse-freelancers">
                    <TopFreelancers />
                </Route>
                <Route path="/freelancer-registration">
                    <FreelancerRegistration />
                </Route>
                <Route path="/postjob">
                    <PostJob />
                </Route>
            </Switch>
            <Footer />
        </div>
    </Router>
  );
};

export default App;
