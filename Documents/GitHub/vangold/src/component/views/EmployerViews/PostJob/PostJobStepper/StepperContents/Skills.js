import { Button, Chip } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ChipInput from "material-ui-chip-input";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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

const Skills = ({ postJobData, setPostJobData, handleNext, handleBack }) => {
    const classes = useStyles();
    const [chipData, setChipData] = useState([]);
    const [tags, setTags] = useState([]);
    const [showSkills1, setShowSkills1] = useState(false);
    var dispSkills = [];
    var dispSkills = chipData.filter(function (elem, pos) {
        return chipData.indexOf(elem) == pos;
    });

    const addHandler = (tag) => setTags([...tags, tag]);

    const deleteHandler = (tagDelete) =>
        setTags(tags.filter((tag) => tag !== tagDelete));

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const sendData = () => {
        if (chipData.length === 0) {
            alert('Please select your skills.')
        } else {
            setPostJobData({ ...postJobData, selectedSkills: dispSkills, addedSkills: tags });
            setShowSkills1(true)
        }
    }

    return (
        <>
            {!showSkills1 ? (
                <>
                    <Container>
                        <Row>
                            <Col xs={10} md={7} className='offset-1 ps-lg-4 mb-5'>
                                <h1 className="project-title">Select skill or add your own</h1>

                                <ChipInput
                                    style={{ margin: "10px 0" }}
                                    value={tags}
                                    onAdd={addHandler}
                                    onDelete={deleteHandler}
                                    variant="outlined"
                                    fullWidth
                                />

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

                            </Col>

                        </Row>
                    </Container>
                    <div className='d-flex justify-content-md-between mt-5 justify-content-around'>
                        <Button
                            className='back-btn'
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        <Button
                            className='submit-btn'
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