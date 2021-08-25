import { Col, Container, Row } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import { GoPrimitiveDot } from "react-icons/go";
import { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import './EmployerSetting.css'
import ResetPassword from "./SettingContent/ResetPassword";
import Notification from "./SettingContent/Notification";
import RequestVerfication from "./SettingContent/RequestVerfication";
import RequestVerfication1 from "./SettingContent/RequestVerfication1";
import Jobs from "./SettingContent/Jobs";
import ResetPassword1 from "./SettingContent/ResetPassword1";
import Payment from "./SettingContent/Payment";

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

const EmployerSetting = () => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [component, setComponent] = useState('payment');

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <section id="employer-setting" className='py-5 my-5'>
            <Container>
                <Row>
                    <Col xs={10} md={4} className='mx-auto'>
                        <div className={classes.root}>
                            <List component="nav">
                                <ListItem
                                    button
                                    classes={{ root: classes.root, selected: classes.selected, button: classes.button }}
                                    selected={selectedIndex === 0}
                                    onClick={(event) => { handleListItemClick(event, 0); setComponent('payment'); }}
                                >
                                    <ListItemIcon >
                                        <GoPrimitiveDot />
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
                                        <GoPrimitiveDot />
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
                                        <GoPrimitiveDot />
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
                                        <GoPrimitiveDot />
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
                                        <GoPrimitiveDot />
                                    </ListItemIcon>
                                    <ListItemText classes={{ primary: classes.listItemText }} primary="Jobs" />
                                </ListItem>
                            </List>
                        </div>
                    </Col>
                    <Col xs={10} md={8} className='mx-auto mt-md-0 mt-5'>
                        {
                            component === 'payment' ? <Payment /> : component === 'resetPassword' ? <ResetPassword1 /> : component === 'notification' ? <Notification /> : component === 'requestVerification' ? <RequestVerfication /> : component === 'jobs' ? <Jobs /> : null
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default EmployerSetting;