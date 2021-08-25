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
    lists:{
        height: "100vh"
    },
    signout:{
        position: "absolute",
        bottom: 0
    }
}));

const SideMenu = () => {
    const classes = useStyles();
    const [jobList, setJobList] = useState(false);
    const [talentList, setTalentList] = useState(false);
    const history = useHistory();
    const location = useLocation();

    return (
        <div className={classes.root}>
            <List component="nav" className={classes.lists}>
                <ListItem
                    button
                    classes={{ root: classes.root, button: classes.button, }}
                    onClick={() => {
                        history.push("/profile/dashboard");
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
                            }}
                            className={location.pathname === "/profile/talent/find-talent" ? classes.active : null}
                        >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText
                                classes={{ primary: classes.listItemText }}
                                primary="Find Talent"
                            />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem
                    button
                    classes={{ root: classes.root, button: classes.button }}
                    onClick={() => {
                        history.push("/profile/messages");
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
        </div>
    );
};

export default SideMenu;
