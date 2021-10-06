import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from "@material-ui/core";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import dashboard from "../../../assets/images/sideMenu/dashboard.png";
import work from "../../../assets/images/sideMenu/work.png";
import engineering from "../../../assets/images/sideMenu/engineering.png";
import chat from "../../../assets/images/sideMenu/chat.png";
import person from "../../../assets/images/sideMenu/person.png";
import signout from "../../../assets/images/sideMenu/signout.png";
import { useHistory, useLocation } from "react-router-dom"; 
import LogoutModal from "../LogoutModal/LogoutModal";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        fontSize: "16px",
        "&$button": {
            "&:hover": {
                color: '#45B618',
            },
        },
    },
    listItemText: {
        fontSize: "16px",
    },
    button: {},
    active: {
        color: '#45B618',
        borderLeft: '6px solid #45B618',
    },
    signout: {
        position: "absolute",
        bottom: 0
    }
}));

const FreelancerProfileSideMenu = ({ showSideMenu, setShowSideMenu }) => {
    const classes = useStyles();
    const [jobList, setJobList] = useState(false);
    const [talentList, setTalentList] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className={classes.root}>
            <List component="nav" className="menu-list-height">
                <ListItem
                    button
                    classes={{ root: classes.root, button: classes.button, }}
                    onClick={() => {
                        history.push("/profile/f-dashboard");
                        setShowSideMenu(!showSideMenu);
                    }}
                    className={location.pathname === "/profile/f-dashboard" ? classes.active : null}
                >
                    <ListItemIcon>
                        <img src={dashboard} alt="dashboard" />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Dashboard"
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{ root: classes.root, button: classes.button }}
                    onClick={() => {
                        history.push("/profile/f-jobs/all-jobs");
                        setShowSideMenu(!showSideMenu);
                    }}
                    className={location.pathname === "/profile/f-jobs/all-jobs" ? classes.active : null}
                >
                    <ListItemIcon>
                        <img src={work} alt="work" />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Find Work"
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{ root: classes.root, button: classes.button }}
                    onClick={() => {
                        history.push("/profile/jobs/f-my-job-projects");
                        setShowSideMenu(!showSideMenu);
                    }}
                    className={location.pathname === "/profile/jobs/f-my-job-projects" ? classes.active : null}
                >
                    <ListItemIcon>
                        <img src={engineering} alt="engineering" />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="My Jobs"
                    />
                </ListItem>
                <ListItem
                    button
                    classes={{ root: classes.root, button: classes.button }}
                    onClick={() => {
                        history.push("/profile/messages");
                        setShowSideMenu(!showSideMenu);
                    }}
                    className={location.pathname === "/profile/messages" ? classes.active : null}
                >
                    <ListItemIcon>
                        <img src={chat} alt="chat" />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Messages"
                    />
                </ListItem>
                <ListItem
                    button
                    classes={{ root: classes.root, button: classes.button }}
                    onClick={() => {
                        history.push("/profile/freelancer-profile-edit");
                        setShowSideMenu(!showSideMenu);
                    }}
                    className={location.pathname === "/profile/freelancer-profile-edit" ? classes.active : null}
                >
                    <ListItemIcon>
                        <img src={person} alt="person" />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Profile"
                    />
                </ListItem>
                <ListItem
                    className={classes.signout}
                    button
                    classes={{ root: classes.root, button: classes.button }}
                    onClick={() => setModalShow(true)}
                >
                    <ListItemIcon>
                        <img src={signout} alt="Sign Out" />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Sign Out"
                    />
                </ListItem>
            </List>
            <LogoutModal
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>
    );
};

export default FreelancerProfileSideMenu;
