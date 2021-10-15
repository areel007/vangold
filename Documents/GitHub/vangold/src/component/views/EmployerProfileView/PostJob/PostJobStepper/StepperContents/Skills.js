import { Button, Chip } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Form } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import Skills1 from "./Skills1";

const skillsList = [
    {
        key: 0,
        label: 'Mobile App Development'
    },
    {
        key: 1,
        label: 'Java'
    },
    {
        key: 2,
        label: 'Ios'
    },
    {
        key: 3,
        label: 'Web'
    },
    {
        key: 4,
        label: 'Digital Marketing'
    },
    {
        key: 5,
        label: 'User Experience Design'
    },
    {
        key: 6,
        label: 'User Interface Design'
    },
    {
        key: 7,
        label: 'User Research'
    }
]

const useStyles = makeStyles((theme) => ({

    chip: {
        margin: theme.spacing(0.5),
        backgroundColor: '#45B618',
        color: '#fff',
        fontSize: '16px'
    },
}));

const Skills = ({ postJobData, setPostJobData, handleNext, handleBack, showSkills1, setShowSkills1 }) => {
    const classes = useStyles();
    const [chipData, setChipData] = useState([]);
    const [value, setValue] = useState('');
    var dispSkills = [];
    var dispSkills = chipData.filter(function (elem, pos) {
        return chipData.indexOf(elem) == pos;
    });

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const sendData = () => {
        if (chipData.length === 0) {
            alert('Please select your skills.')
        } else {
            setPostJobData({ ...postJobData, selectedSkills: dispSkills });
            setShowSkills1(true)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setChipData(prevCount => [...chipData, { key: prevCount + 200, label: value }])
            setValue('')
        }
    }

    return (
        <>
            {!showSkills1 ? (
                <>
                    <h1 className="project-title mb-5">Select skill or add your own</h1>

                    <Form.Group>
                        <Form.Control type="text" className="form-controll" placeholder="Add up to 10 keywords to help people discover your project" value={value} size='lg' onKeyDown={handleKeyDown} onChange={(e) => setValue(e.target.value)} />
                    </Form.Group>

                    {chipData.length > 0 && <p>Selected Skills</p>}

                    <div className='d-inline'>
                        {dispSkills.map((data) => {
                            return (
                                <Chip
                                    key={data.key}
                                    label={data.label}
                                    onDelete={handleDelete(data)}
                                    className={classes.chip}
                                />
                            );
                        })}
                    </div>

                    <p>Popular Skills</p>
                    <div className='d-inline'>
                        {skillsList.map(skills => (
                            <Button key={skills.key} className='pills-btn'
                                onClick={() => { setChipData([...chipData, skills]) }}>
                                {skills.label}<AiOutlinePlus /></Button>
                        ))}
                    </div>
                    <div className='d-flex justify-content-between' style={{ marginTop: "5rem" }}>
                        <Button
                            className='back-btnn'
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        <Button
                            className='submit-btnn me-3 me-md-5'
                            onClick={sendData}
                        >
                            Continue
                        </Button>
                    </div>
                </>
            ) : (<Skills1 postJobData={postJobData} setPostJobData={setPostJobData} handleNext={handleNext} setShowSkills1={setShowSkills1} />)
            }
        </>
    );
}

export default Skills;