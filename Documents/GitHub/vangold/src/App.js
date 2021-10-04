import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
// import Header from "./component/core-ui/header/header"
import HeaderComponent from "./component/core-ui/header/header-component";
import Footer from "./component/core-ui/footer/footer"
import SignUp from "./component/views/auth/sign-up";
import LogIn from "./component/views/auth/log-in";
import ChangePassword from "./component/views/auth/change-password";
import PasswordResetSuccess from "./component/views/auth/password-reset-success";
import AccountVerifySuccessful from "./component/views/auth/account-verify-success";
import TermsAndConditions from "./component/views/terms-and-conditions";
import PrivacyPolicy from "./component/views/privacy-policy";
import CookiesPolicy from "./component/views/cookies-policy";
import { useState } from "react";
import MobileNav from "./component/core-ui/header/mobile-nav";
import ResetPassword from "./component/views/auth/reset-password";
import Home from "./component/views/home/home";
import HomeTwo from './component/views/home/home2';
import VerifyEmail from './component/views/verify-email';
import TopFreelancer from './component/views/TopFreelancerView/TopFreelancer';
import RecentView from './component/views/TopFreelancerView/RecentView';
import TopJobs from './component/views/TopJobsView/TopJobs';
import TopJobsTwo from './component/views/TopJobsView/TopJobs2';
import FreelancerRegistration from "./component/views/FreelancerViews/Auth/freelancer-registration";
import BrandRegistration from './component/views/BrandViews/Auth/brand-registration';
import PostJob from './component/views/EmployerViews/PostJob/PostJob';
import ProfilePostJob from './component/views/ProfileViews/PostJob/PostJob';
import EmployerSetting from './component/views/EmployerViews/EmployerSetting/EmployerSetting';
import PayToEmployer from './component/views/EmployerViews/PayToEmployer/PayToEmployer';
import PaymentSuccess from './component/views/EmployerViews/PaymentSuccess/PaymentSucess';
import ProfileDashboard from './component/views/ProfileViews/Dashboard/ProfileDashboard';
import FreelancerProfileDashboard from './component/views/FreelancerProfileViews/Dashboard/ProfileDashboard';
import ProfileAllJobs from './component/views/ProfileViews/Jobs/ProfileAllJobs';
import FreelancerProfileAllJobs from './component/views/FreelancerProfileViews/Jobs/FreelancerProfileAllJobs';
import ProfileMyJob from './component/views/ProfileViews/Jobs/ProfileMyJob';
import FreelancerProfile from './component/views/FreelancerViews/FreelancerProfile/FreelancerProfile';
import FreelancerProfileEdit from './component/views/FreelancerViews/FreelancerProfileEdit/FreelancerProfileEdit';
import JobDescrip from './component/views/ProfileViews/Jobs/JobDescrip';
import FreelancerJobDescrip from './component/views/FreelancerProfileViews/Jobs/JobDescrip';
import MobileBusinessChatView from './component/core-ui/Messages/MobileBusinessChatView';
import MyJobProjects from './component/views/ProfileViews/Jobs/MyJobProjects';
import FreelancerMyJobProjects from './component/views/FreelancerProfileViews/Jobs/FreelancerMyJobProjects';
import ProfileEdit from './component/views/ProfileViews/ProfileEdit/ProfileEdit';
import FindTalent from './component/views/ProfileViews/Talent/FindTalent';
import ChatComponentTwo from './component/views/ChatView/ChatComponent2';
import GroupChatView from './component/views/ChatView/GroupChatView/GroupChatView';
import GroupChatViewTwo from './component/views/ChatView/GroupChatView/GroupChatView2';
import GroupChatComponentThree from './component/views/ChatView/ChatComponent3';
import ChatBoxMobile from './component/views/ChatView/ChatBoxMobile/ChatBoxMobile';
import ChatBoxMobileTwo from './component/views/ChatView/ChatBoxMobile/ChatBoxMobile2';
import ChatBoxMobileThree from './component/views/ChatView/ChatBoxMobile/ChatBoxMobile3';
import BusinessChatView from './component/views/ChatView/BusinessChatView/BusinessChatView';
import BusinessChatViewTwo from './component/views/ChatView/BusinessChatView/BusinessChatView2';
import BusinessChatViewThree from './component/views/ChatView/BusinessChatView/BusinessChatView3';
import GroupParticipate from './component/views/ChatView/ChatBoxMobile/GroupParticipate';
import ChatCall from './component/views/ChatView/GroupChatView/ChatCall';
import Stories from './component/views/ChatView/GroupChatView/Stories';
import ChatComponent from './component/views/ChatView/ChatComponent';
import ChatComponentFour from './component/views/ChatView/ChatComponent4';
import ManageTalent1 from './component/views/ProfileViews/Talent/ManageTalent1';
import ChatComponents from './component/core-ui/ChatComponent/ChatComponent';
import MobileCall from "./component/core-ui/MobileCall/MobileCall";
import ManageTalent from './component/views/ProfileViews/Talent/ManageTalent';
import MeetingDetails from './component/views/ProfileViews/Talent/MeetingDetails';
import MobileVideoCall from './component/views/VideoCall/MobileVideoCall';

function App() {

    const history = useHistory();

    const routeChange = () => {
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
                <HeaderComponent
                    links={links}
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
                    <Route path="/become-a-business">
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
                    <Route path="/accountverifysuccessful">
                        <AccountVerifySuccessful />
                    </Route>
                    <Route path="/VerifyEmail">
                        <VerifyEmail />
                    </Route>
                    <Route path="/find-freelancer">
                        <TopFreelancer />
                    </Route>
                    <Route path="/freelancer/recent-view">
                        <RecentView />
                    </Route>
                    <Route path="/browse-job">
                        <TopJobs />
                    </Route>
                    <Route path="/top-jobs-view">
                        <TopJobsTwo />
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
                    <Route path="/ManageTalent1">
                        <ManageTalent1 />
                    </Route>
                    <Route path="/reset-password">
                        <ResetPassword />
                    </Route>
                    <Route path="/freelancer-registration">
                        <FreelancerRegistration />
                    </Route>
                    <Route path="/brand-registration">
                        <BrandRegistration />
                    </Route>
                    <Route path="/postjob">
                        <PostJob />
                    </Route>
                    <Route path="/profile/postjob">
                        <ProfilePostJob />
                    </Route>
                    <Route path="/employer-setting">
                        <EmployerSetting />
                    </Route>
                    <Route path="/pay-to-employer">
                        <PayToEmployer />
                    </Route>
                    <Route path="/payment-successful">
                        <PaymentSuccess />
                    </Route>
                    <Route path="/profile/f-dashboard">
                        <FreelancerProfileDashboard />
                    </Route>
                    <Route path="/profile/dashboard">
                        <ProfileDashboard />
                    </Route>
                    <Route path="/profile/jobs/all-jobs">
                        <ProfileAllJobs />
                    </Route>
                    <Route path="/profile/f-jobs/all-jobs">
                        <FreelancerProfileAllJobs />
                    </Route>
                    <Route path="/profile/jobs/f-job-description">
                        <FreelancerJobDescrip />
                    </Route>
                    <Route path="/mobile-biz-chat">
                        <MobileBusinessChatView />
                    </Route>
                    <Route path="/profile/jobs/job-description">
                        <JobDescrip />
                    </Route>
                    <Route path="/profile/jobs/my-job">
                        <ProfileMyJob />
                    </Route>
                    <Route path="/profile/jobs/my-job-projects">
                        <MyJobProjects />
                    </Route>
                    <Route path="/profile/jobs/f-my-job-projects">
                        <FreelancerMyJobProjects />
                    </Route>
                    <Route path="/profile/edit">
                        <ProfileEdit />
                    </Route>
                    <Route path="/profile/talent/find-talent">
                        <FindTalent />
                    </Route>
                    <Route path="/profile/talent/manage-talent">
                        <ManageTalent />
                    </Route>
                    <Route path="/profile/talent/meeting-details">
                        <MeetingDetails />
                    </Route>
                    <Route path="/profile/messages">
                        <ChatComponent />
                    </Route>
                    <Route path="/profile/messages4">
                        <ChatComponentFour />
                    </Route>
                    <Route path="/profile/chat">
                        <ChatComponentTwo />
                    </Route>
                    <Route path="/profile/group-chat">
                        <GroupChatView />
                    </Route>
                    <Route path="/profile/group-chat2">
                        <GroupChatViewTwo />
                    </Route>
                    <Route path="/profile/group-chat3">
                        <GroupChatComponentThree />
                    </Route>
                    <Route path="/profile/group-chat-mobile">
                        <ChatBoxMobile/>
                    </Route>
                    <Route path="/profile/chat-mobile">
                        <ChatBoxMobileTwo/>
                    </Route>
                    <Route path="/profile/mobile-call">
                        <MobileCall/>
                    </Route>
                    <Route path="/profile/mobile-video-call">
                        <MobileVideoCall/>
                    </Route>
                    <Route path="/profile/group-chat-mobile2">
                        <ChatBoxMobileThree/>
                    </Route>
                    <Route path="/profile/GroupParticipants">
                        <GroupParticipate/>
                    </Route>
                    <Route path="/ChatCompo">
                        <ChatComponents/>
                    </Route>
                    <Route path="/profile/business-chat">
                        <BusinessChatView/>
                    </Route>
                    <Route path="/profile/business-chat-1">
                        <BusinessChatViewThree/>
                    </Route>
                    <Route path="/profile/business-chat-2">
                        <BusinessChatViewTwo/>
                    </Route>
                    <Route path="/profile/ChatCall">
                        <ChatCall />
                    </Route>
                    <Route path="/profile/stories">
                        <Stories />
                    </Route>
                    <Route path="/freelancer-profile">
                        <FreelancerProfile />
                    </Route>
                    <Route path="/profile/freelancer-profile-edit">
                        <FreelancerProfileEdit />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
