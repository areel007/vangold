import { FormControlLabel, FormGroup, Switch } from "@material-ui/core";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withStyles } from '@material-ui/core/styles';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 45,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#45b618',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#45b618',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 27,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: "#e9eae8",
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

const Notification = () => {
    const [value, setValue] = useState({
        inboxNotification: false,
        jobNotification: false,
        emailNotification: false,
    });

    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.checked });
    };

    console.log(value);

    return (
        <Container fluid>
            <Row>
                <h1>Notification Settings</h1>
                <p className="text-muted" style={{ fontSize: '14px' }}>Message Notifications</p>
                <Col xs={8}>
                    <h5>Inbox notifications</h5>
                    <p className="text-muted" style={{ fontSize: '12px' }}>Get notified on new inbox messages</p>
                </Col>
                <Col xs={4}>
                    <FormGroup>
                        <FormControlLabel
                            control={<IOSSwitch checked={value.inboxNotification} onChange={handleChange} name="inboxNotification" />}
                        />
                    </FormGroup>
                </Col>
                <Col xs={8}>
                    <h5>Job notifications</h5>
                    <p className="text-muted" style={{ fontSize: '12px' }}>Get notified when there is a new job</p>
                </Col>
                <Col xs={4}>
                    <FormGroup>
                        <FormControlLabel
                            control={<IOSSwitch checked={value.jobNotification} onChange={handleChange} name="jobNotification" />}
                        />
                    </FormGroup>
                </Col>
                <Col xs={8}>
                    <h5>Email notifications</h5>
                    <p className="text-muted" style={{ fontSize: '12px' }}>Receive VanGold newsletters and notifications via email</p>
                </Col>
                <Col xs={4}>
                    <FormGroup>
                        <FormControlLabel
                            control={<IOSSwitch checked={value.emailNotification} onChange={handleChange} name="emailNotification" />}
                        />
                    </FormGroup>
                </Col>
            </Row>

        </Container>
    );
}

export default Notification;