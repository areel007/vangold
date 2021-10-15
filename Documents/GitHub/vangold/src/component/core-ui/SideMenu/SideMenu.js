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
import './SideMenu.css'

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
        fontSize: "15px",
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

const SideMenu = ({ showSideMenu, setShowSideMenu }) => {
    const classes = useStyles();
    const [jobList, setJobList] = useState(false);
    const [talentList, setTalentList] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className={classes.root}>
            <div className="dashboard_mobile_searchBar">
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none">
                    <path d="M11.2028 9.85162C11.1006 9.74942 11.0866 9.57302 11.165
                    9.45122C11.781 8.50342 12.1422 7.37502 12.1422 6.16262C12.1422
                    2.81382 9.4178 0.0908203 6.0718 0.0908203C2.723 0.0908203 0 2.81382
                    0 6.16262C0 9.51002 2.723 12.233 6.0718 12.233C7.3752 12.233 8.582
                    11.8144 9.5732 11.1116C9.6894 11.0276 9.8644 11.0388 9.9666 11.1396L12.1366
                    13.3096C12.1506 13.3236 12.166 13.3376 12.1814 13.3488C12.2066 13.3698
                    12.3116 13.4678 12.4124 13.57L12.67 13.8262C12.7722 13.927 12.9374
                    13.927 13.0382 13.8262L13.923 12.9414C14.0252 12.8392 14.0252 12.674
                    13.9244 12.5718L11.2028 9.85162ZM9.744 8.99062C9.5438 9.25102 9.3184
                    9.48902 9.0692 9.70042C8.26 10.3878 7.2142 10.805 6.0718 10.805C3.5112
                    10.805 1.428 8.72182 1.428 6.16262C1.428 3.60342 3.5112 1.51882 6.0718
                    1.51882C8.631 1.51882 10.7142 3.60202 10.7142 6.16262C10.7142 7.22662
                    10.3488 8.20662 9.744 8.99062Z" fill="#4F4F4F"
                    />
                </svg>
                <input type="text" placeholder="Search..." />
            </div>
            <List component="nav" className="menu-list-height">
                <ListItem
                    button
                    classes={{ root: classes.root, button: classes.button, }}
                    onClick={() => {
                        history.push("/profile/dashboard");
                        setShowSideMenu(!showSideMenu);
                    }}
                    className={location.pathname === "/profile/dashboard" ? classes.active : null}
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
                        setJobList(!jobList);
                    }}
                >
                    <ListItemIcon>
                        <img src={work} alt="work" />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Jobs"
                    />
                    {jobList ? <MdExpandLess /> : <MdExpandMore />}
                </ListItem>

                <Collapse in={jobList} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            classes={{ root: classes.root, button: classes.button }}
                            onClick={() => {
                                history.push("/profile/jobs/all-jobs");
                                setShowSideMenu(!showSideMenu);
                            }}
                            className={location.pathname === "/profile/jobs/all-jobs" ? classes.active : null}
                        >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText
                                classes={{ primary: classes.listItemText }}
                                primary="All Jobs"
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{ root: classes.root, button: classes.button }}
                            onClick={() => {
                                history.push("/profile/jobs/my-job");
                                setShowSideMenu(!showSideMenu);
                            }}
                            className={location.pathname === "/profile/jobs/my-job" ? classes.active : null}
                        >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText
                                classes={{ primary: classes.listItemText }}
                                primary="My Job"
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{ root: classes.root, button: classes.button }}
                            onClick={() => {
                                history.push("/postjob");
                                setShowSideMenu(!showSideMenu);
                            }}
                            className={location.pathname === "/postjob" ? classes.active : null}
                        >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText
                                classes={{ primary: classes.listItemText }}
                                primary="Post a Job"
                            />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem
                    button
                    classes={{ root: classes.root, button: classes.button }}
                    onClick={() => {
                        setTalentList(!talentList);
                    }}
                >
                    <ListItemIcon>
                        <img src={engineering} alt="engineering" />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Talent"
                    />
                    {talentList ? <MdExpandLess /> : <MdExpandMore />}
                </ListItem>
                <Collapse in={talentList} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            classes={{ root: classes.root, button: classes.button }}
                            onClick={() => {
                                history.push("/profile/talent/application");
                                setShowSideMenu(!showSideMenu);
                            }}
                            className={location.pathname === "/profile/talent/application" ? classes.active : null}
                        >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText
                                classes={{ primary: classes.listItemText }}
                                primary="Application"
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{ root: classes.root, button: classes.button }}
                            onClick={() => {
                                history.push("/profile/talent/find-talent");
                                setShowSideMenu(!showSideMenu);
                            }}
                            className={location.pathname === "/profile/talent/find-talent" ? classes.active : null}
                        >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText
                                classes={{ primary: classes.listItemText }}
                                primary="Find Talent"
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{ root: classes.root, button: classes.button }}
                            onClick={() => {
                                history.push("/profile/talent/manage-talent");
                                setShowSideMenu(!showSideMenu);
                            }}
                            className={location.pathname === "/profile/talent/manage-talent" ? classes.active : null}
                        >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText
                                classes={{ primary: classes.listItemText }}
                                primary="Manage Talent"
                            />
                        </ListItem>
                    </List>
                </Collapse>
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
                        history.push("/profile/edit");
                        setShowSideMenu(!showSideMenu);
                    }}
                    className={location.pathname === "/profile/edit" ? classes.active : null}
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

export default SideMenu;
