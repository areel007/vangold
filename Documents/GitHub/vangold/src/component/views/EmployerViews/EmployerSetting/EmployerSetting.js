import { Col, Container, Row } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import { GoPrimitiveDot } from "react-icons/go";
import { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import './EmployerSetting.css'
import Notification from "./SettingContent/Notification";
import RequestVerfication1 from "./SettingContent/RequestVerfication1";
import RequestVerfication from "./SettingContent/RequestVerfication";
import Jobs from "./SettingContent/Jobs";
import ResetPassword1 from "./SettingContent/ResetPassword1";
import ResetPassword from "./SettingContent/ResetPassword";
import Payment from "./SettingContent/Payment";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: "#f3f3f2",
        fontSize: '16px',
        '&$selected': {
            backgroundColor: '#45b618',
            color: '#fff'
        },
        '&$button': {
            '&:hover': {
                backgroundColor: '#45b618',
                color: '#fff'
            },
        },
    },
    listItemText: {
        fontSize: '16px',
    },
    selected: {},
    button: {},
}));

const EmployerSetting = ({ showSideMenu, setShowSideMenu }) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [component, setComponent] = useState('payment');

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <section id="employer-setting" className='py-3 mb-5 my-lg-5'>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className={`mx-auto ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} lg={3} className='mx-auto bg-employer-s p-5 p-lg-4'>
                        <div className={classes.root}>
                            <List component="nav">
                                <ListItem
                                    button
                                    classes={{ root: classes.root, selected: classes.selected, button: classes.button }}
                                    selected={selectedIndex === 0}
                                    onClick={(event) => { handleListItemClick(event, 0); setComponent('payment'); }}
                                >
                                    <ListItemIcon >
                                        <GoPrimitiveDot className={`${component === "payment" && "dot-w"}`} />
                                    </ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary="Payment" />
                                </ListItem>
                                <ListItem
                                    button
                                    classes={{ root: classes.root, selected: classes.selected, button: classes.button }}
                                    selected={selectedIndex === 1}
                                    onClick={(event) => { handleListItemClick(event, 1); setComponent('resetPassword'); }}
                                >
                                    <ListItemIcon>
                                        <GoPrimitiveDot className={`${component === "resetPassword" && "dot-w"}`} />
                                    </ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary="Reset Password" />
                                </ListItem>
                                <ListItem
                                    button
                                    classes={{ root: classes.root, selected: classes.selected, button: classes.button }}
                                    selected={selectedIndex === 2}
                                    onClick={(event) => { handleListItemClick(event, 2); setComponent('notification'); }}
                                >
                                    <ListItemIcon>
                                        <GoPrimitiveDot className={`${component === "notification" && "dot-w"}`} />
                                    </ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary="Notifications" />
                                </ListItem>
                                <ListItem
                                    button
                                    classes={{ root: classes.root, selected: classes.selected, button: classes.button }}
                                    selected={selectedIndex === 3}
                                    onClick={(event) => { handleListItemClick(event, 3); setComponent('requestVerification'); }}
                                >
                                    <ListItemIcon>
                                        <GoPrimitiveDot className={`${component === "requestVerification" && "dot-w"}`} />
                                    </ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary="Request Verification" />
                                </ListItem>
                                <ListItem
                                    button
                                    classes={{ root: classes.root, selected: classes.selected, button: classes.button }}
                                    selected={selectedIndex === 4}
                                    onClick={(event) => { handleListItemClick(event, 4); setComponent('jobs'); }}
                                >
                                    <ListItemIcon>
                                        <GoPrimitiveDot className={`${component === "jobs" && "dot-w"}`} />
                                    </ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary="Jobs" />
                                </ListItem>
                            </List>
                        </div>
                    </Col>
                    <Col xs={12} lg={7} className='mx-auto mt-5 mt-lg-0 bg-employer-s p-lg-4'>
                        {
                            component === 'payment' ? <Payment /> : component === 'resetPassword' ? <ResetPassword1 /> : component === 'notification' ? <Notification /> : component === 'requestVerification' ? <RequestVerfication1 /> : component === 'jobs' ? <Jobs /> : null
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default EmployerSetting;