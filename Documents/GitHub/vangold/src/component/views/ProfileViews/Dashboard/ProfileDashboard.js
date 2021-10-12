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
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { GoPrimitiveDot } from "react-icons/go";
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
        id: 1,
        name: 'John Adams',
        gender: 'Male',
        level: 'Expert',
    },
    {
        id: 2,
        name: 'John Adams',
        gender: 'Male',
        level: 'Expert',
    },
    {
        id: 3,
        name: 'John Adams',
        gender: 'Male',
        level: 'Expert',
    },
]

const chartData = [
    {
        xAxis: 'Mon',
        value: 25,
        value1: 30
    },
    {
        xAxis: 'Tues',
        value: 50,
        value1: 80
    },
    {
        xAxis: 'Wed',
        value: 60,
        value1: 30
    },
    {
        xAxis: 'Thurs',
        value: 70,
        value1: 40
    },
    {
        xAxis: 'Fri',
        value: 30,
        value1: 40
    },
    {
        xAxis: 'Sat',
        value: 40,
        value1: 70
    },
    {
        xAxis: 'Sun',
        value: 60,
        value1: 50
    },
];

const percentage = 81.2;

const ProfileDashboard = ({ showSideMenu, setShowSideMenu }) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndex1, setSelectedIndex1] = useState(0);
    const [setComponent] = useState('Client Review');
    const [setComponent1] = useState('Client Review');
 
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
                    <Col xs={12} lg={2} className={`mx-auto mt-lg-5 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
                        <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <Row>
                            <Col xs={12} lg={6} className="mx-auto p-3">
                                {/* CALENDAR FOR MOBILE VIEW ONLY */}
                                <Row className="d-lg-none">
                                    <Col xs={12} lg={10}>
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
                                                    <Col className="text-center my-4 mx-3" xs={1} key={cal.date}>
                                                        <p className="text-16px">{cal.day}</p>
                                                        <p className="text-18px">{cal.date}</p>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <h1 className='mb-4 mt-5 mt-lg-0'>Activity</h1>
                                <Row className="jobsCreated__TotalHire">
                                    {
                                        cardItems.map((item) => (
                                            <Col xs={12} lg={6} className="mx-auto" key={item.value}>
                                                <Card className="dash-card" style={{ backgroundColor: `${item.color}`, color: '#fff' }}>

                                                    <div className="d-flex Card_-_dashboard justify-content-between">
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
                                                        key={list.id}
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
                                    <Col xs={12} lg={8} className="mx-auto ps-4 py-4 mt-4 mt-lg-0" style={{ backgroundColor: '#FFFFFF', borderRadius: "5px" }}>
                                        <Row>
                                            <Col xs={9} className="align-self-center">
                                                <div className="d-flex justify-content-between">
                                                    <p className='text-12px'>Positive Review</p>
                                                    <p className='text-12px'>60%</p>
                                                </div>
                                                <BorderLinearProgress variant="determinate" value={60} />
                                            </Col>
                                            <Col xs={3}>
                                                <img src={emoji1} alt="emoji" className="img-fluid" />
                                            </Col>
                                        </Row>
                                        <Row className='mt-5'>
                                            <Col xs={9} className="align-self-center">
                                                <div className="d-flex justify-content-between">
                                                    <p className='text-12px'>Negative Review</p>
                                                    <p className='text-12px'>60%</p>
                                                </div>
                                                <BorderLinearProgress variant="determinate" value={60} />
                                            </Col>
                                            <Col xs={3}>
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
                                                        key={list.title}
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
                                    <Col xs={12} lg={8} className="mx-auto ps-4 py-4 mt-4 mt-lg-0" style={{ backgroundColor: '#FFFFFF', borderRadius: "5px" }}>
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
                            <Col xs={12} lg={6} className="mx-auto p-3 mt-5 mt-lg-0">

                                {/* CALENDAR FOR DESKTOP VIEW ONLY */}
                                <Row className="d-none d-lg-block">
                                    <Col xs={12} lg={10}>
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
                                                    <Col className="text-center my-4 mx-3" xs={1} key={cal.date}>
                                                        <p className="text-16px">{cal.day}</p>
                                                        <p className="text-18px">{cal.date}</p>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <h1 className='mb-3' style={{ marginTop: "5rem" }}>Income Statistics</h1>
                                    <Col xs={12}>
                                        <div className="graph-card" style={{ marginRight: '1rem' }}>
                                            <Row>
                                                <Col xs={4} md={6}>
                                                    <p className="text-13px ms-5">Earnings</p>
                                                </Col>
                                                <Col xs={8} md={6}>
                                                    <div className='d-flex justify-content-end'>
                                                        <p className="text-10px me-5"><GoPrimitiveDot style={{ color: '#5F2EEA', fontSize: "1.5rem", marginBottom: "0.3rem" }} />Last 6 months</p>
                                                        <p className="text-10px"><GoPrimitiveDot style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }} />Previous</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={4} md={6}>
                                                    <p className="ms-5">Nov - July</p>
                                                </Col>
                                                <Col xs={8} md={6}>
                                                    <div className='d-flex justify-content-end'>
                                                        <p className="text-13px me-5">475 273</p>
                                                        <p className="text-13px">782 396</p>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <ResponsiveContainer width="100%" height={200}>
                                                <AreaChart
                                                    data={chartData}
                                                    margin={{
                                                        top: 10,
                                                        right: 15
                                                    }}
                                                >
                                                    <defs>
                                                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#3751FF" stopOpacity={0.6} />
                                                            <stop offset="75%" stopColor="#3751FF" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <XAxis axisLine={false} tickLine={false} dataKey="xAxis" />
                                                    <YAxis axisLine={false} tickLine={false} type="number" domain={[0, 100]} />
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="value" stroke="#3751FF" fill="url(#color)" />
                                                    <Area type="monotone" dataKey="value1" stroke="#a9a9a9" fill="url(#color)" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <h1 style={{ marginTop: "5rem" }}>Employee Application</h1>
                                    <Col xs={12} className='px-lg-4'>
                                        {
                                            application.map((person) => (
                                                <div className='mt-4 p-3' key={person.id} style={{ backgroundColor: '#FFFFFF', borderRadius: "5px" }}>
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
                                                </div>
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