import { Card, Col, Container, Row, Button } from "react-bootstrap"
import SideMenu from "../../../core-ui/SideMenu/SideMenu"
import icon1 from "../../../../assets/images/profile/1.png";
import icon2 from "../../../../assets/images/profile/2.png";
import icon3 from "../../../../assets/images/profile/3.png";
import icon4 from "../../../../assets/images/profile/4.png";
import icon5 from "../../../../assets/images/profile/5.png";
import emoji1 from "../../../../assets/images/profile/emoji1.PNG";
import emoji2 from "../../../../assets/images/profile/emoji2.PNG";
import avatar from "../../../../assets/images/profile/avatar.png";
import user from "../../../../assets/images/profile/user.png";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { List, ListItem, LinearProgress, ListItemText } from "@material-ui/core";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import 'react-circular-progressbar/dist/styles.css';
import './ProfileDashboard.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: "#FFFFFF",
        fontSize: '16px',
        borderRadius: "5px",
        '&$selected': {
            backgroundColor: '#9381FF33',
            color: '#9381FF',
            borderLeft: "6px solid #9381FF"

        },
        '&$button': {
            '&:hover': {
                backgroundColor: '#9381FF33',
                color: '#9381FF'
            },
        },
    },
    listItemText: {
        fontSize: '12px',
    },
    selected: {},
    button: {},
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: "#F2F2F2"
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#9381FF',
    },
}))(LinearProgress);

const cardItems = [
    {
        title: 'Jobs Created',
        icon: icon1,
        graph: icon5,
        value: 7,
        percent: '+ 2,87%',
        color: '#9381FF'
    },
    {
        title: 'Total Hires',
        icon: icon2,
        graph: icon5,
        value: 102,
        percent: '+ 2,87%',
        color: '#2fdf40'
    },
    {
        title: 'Jobs in Progress',
        icon: icon3,
        graph: icon5,
        value: 3,
        percent: '+ 2,87%',
        color: '#9834e5'
    },
    {
        title: 'No of Employees',
        icon: icon4,
        graph: icon5,
        value: 64,
        percent: '+ 2,87%',
        color: '#436ce6'
    },
]

const activityList = [
    {
        id: 0,
        title: 'Client Review',
    },
    {
        id: 1,
        title: 'Satisfaction',
    },
    {
        id: 2,
        title: 'Test Overview',
    },
    {
        id: 3,
        title: 'Response Rate',
    },

]
const alertList = [
    {
        id: 0,
        title: 'Client Review',
    },
    {
        id: 1,
        title: 'Satisfaction',
    },
    {
        id: 2,
        title: 'Test Overview',
    },
]
const calender = [
    {
        day: 'Mon',
        date: 22,
    },
    {
        day: 'Tue',
        date: 23,
    },
    {
        day: 'Wed',
        date: 24,
    },
    {
        day: 'Thur',
        date: 25,
    },
    {
        day: 'Fri',
        date: 26,
    },
    {
        day: 'Sat',
        date: 27,
    },
    {
        day: 'Sun',
        date: 28,
    }
]

const application = [
    {
        name: 'John Adams',
        gender: 'Male',
        level: 'Expert',
    },
    {
        name: 'John Adams',
        gender: 'Male',
        level: 'Expert',
    },
    {
        name: 'John Adams',
        gender: 'Male',
        level: 'Expert',
    },
]
const percentage = 81.2;

const ProfileDashboard = () => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndex1, setSelectedIndex1] = useState(0);
    const [component, setComponent] = useState('Client Review');
    const [component1, setComponent1] = useState('Client Review');

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleListItemClick1 = (event, index) => {
        setSelectedIndex1(index);
    };

    return (
        <section id="profile-dash" className="my-3 py-3">
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <Row>
                            <Col xs={12} lg={6} className="mx-auto">
                                <h1 className='mb-4'>Activity</h1>
                                <Row>
                                    {
                                        cardItems.map((item) => (
                                            <Col xs={12} lg={6} className="mx-auto" key={item.value}>
                                                <Card className="dash-card" style={{ backgroundColor: `${item.color}`, color: '#fff' }}>

                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Button className="card-btn" variant="light"><img src={item.icon} alt="icons" /></Button>
                                                        </div>
                                                        <div>
                                                            <img src={item.graph} alt="graph" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h2>{item.value}</h2>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="align-self-end">
                                                            <p className='text-12px'>{item.title}</p>
                                                        </div>
                                                        <div className='bg-percent'>
                                                            <p className='text-12px'>{item.percent}</p>
                                                        </div>
                                                    </div>

                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </Row>
                                <Row>
                                    <h1 className='my-5'>Activity</h1>
                                    <Col xs={12} lg={4}>
                                        <div className={classes.root}>
                                            <List component="nav">
                                                {activityList.map((list) => (
                                                    <ListItem
                                                        button
                                                        classes={{ root: classes.root, selected: classes.selected, button: classes.button }}
                                                        selected={selectedIndex === list.id}
                                                        onClick={(event) => { handleListItemClick(event, list.id); setComponent(list.title); }}
                                                    >
                                                        <ListItemText classes={{ primary: classes.listItemText }} primary={list.title} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={8} className="mx-auto ps-4 py-4" style={{ backgroundColor: '#FFFFFF', borderRadius: "5px" }}>
                                        <Row>
                                            <Col sm={9} className="align-self-center">
                                                <div className="d-flex justify-content-between">
                                                    <p className='text-12px'>Positive Review</p>
                                                    <p className='text-12px'>60%</p>
                                                </div>
                                                <BorderLinearProgress variant="determinate" value={60} />
                                            </Col>
                                            <Col sm={3}>
                                                <img src={emoji1} alt="emoji" className="img-fluid" />
                                            </Col>
                                        </Row>
                                        <Row className='mt-5'>
                                            <Col sm={9} className="align-self-center">
                                                <div className="d-flex justify-content-between">
                                                    <p className='text-12px'>Negative Review</p>
                                                    <p className='text-12px'>60%</p>
                                                </div>
                                                <BorderLinearProgress variant="determinate" value={60} />
                                            </Col>
                                            <Col sm={3}>
                                                <img src={emoji2} alt="emoji" className="img-fluid" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <h1 className='my-5'>Alert Response</h1>
                                    <Col xs={12} lg={4}>
                                        <div className={classes.root}>
                                            <List component="nav">
                                                {alertList.map((list) => (
                                                    <ListItem
                                                        button
                                                        classes={{ root: classes.root, selected: classes.selected, button: classes.button }}
                                                        selected={selectedIndex1 === list.id}
                                                        onClick={(event) => { handleListItemClick1(event, list.id); setComponent1(list.title); }}
                                                    >
                                                        <ListItemText classes={{ primary: classes.listItemText }} primary={list.title} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={8} className="mx-auto ps-4 py-4" style={{ backgroundColor: '#FFFFFF', borderRadius: "5px" }}>
                                        <p className="text-end text-12px" style={{ color: '#3751FF' }}>Saticfactory</p>
                                        <div style={{ width: 100, height: 100, margin: '0 auto' }}>
                                            <CircularProgressbar
                                                styles={buildStyles({
                                                    pathColor: '#3751FF',
                                                    textColor: '#3751FF',
                                                })} value={percentage} text={`${percentage}%`} />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} lg={6} className="mx-auto">
                                <Row>
                                    <Col xs={10}>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h1>Calender</h1>
                                            </div>
                                            <div className="d-flex">
                                                <p className="text-14px align-self-end me-4 ">March 2020</p>
                                                <Button className="me-4" variant='light'><MdKeyboardArrowLeft /></Button>
                                                <Button variant='light'><MdKeyboardArrowRight /></Button>
                                            </div>
                                        </div>
                                        <div className='mt-4' style={{ backgroundColor: '#FFFFFF', borderRadius: "5px" }}>
                                            <Row>
                                                {calender.map((cal) => (
                                                    <Col className="text-center my-4 mx-3" xs={1}>
                                                        <p className="text-16px">{cal.day}</p>
                                                        <p className="text-18px">{cal.date}</p>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <h1 className='my-4'>Income Statistics</h1>

                                </Row>
                                <Row>
                                    <h1 className='my-4'>Employee Application</h1>
                                    <Col xs={12}>
                                        {
                                            application.map((person) => (
                                                <Row className='mt-4 p-3' style={{ backgroundColor: '#FFFFFF', borderRadius: "5px" }}>
                                                    <Col xs={12}>
                                                        <div className="d-flex justify-content-between">
                                                            <div className=" align-self-center" style={{ fontSize: "12px" }}>
                                                                <img src={avatar} alt="avatar" className="me-3" />
                                                                {person.name}
                                                            </div>
                                                            <div className=" align-self-center" style={{ fontSize: "12px" }}>
                                                                <img src={user} alt="user" className='user me-3' />
                                                                {person.gender}
                                                            </div>
                                                            <div className="align-self-center" style={{ fontSize: "12px" }}>
                                                                {person.level}
                                                            </div>
                                                            <div>
                                                                <Button className='employee-btn'>View Profile</Button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ProfileDashboard;