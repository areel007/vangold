import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./component/core-ui/header/header"
import SignUp from "./component/views/sign-up";
import {useState} from "react";
import MobileNav from "./component/core-ui/header/mobile-nav";

function App() {

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
            <Header links={links} buttons={buttons} toggleMobileNav={toggleMobileNav} />
            <MobileNav links={links} buttons={buttons} isMobileNavOut={isMobileNavOut} close={close}/>
            <Switch>
                <Route path="/" exact>
                    Hello World
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
