import { Button, FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    radio: {
        '&$checked': {
            color: '#45b618'
        }
    },
    checked: {},
    checkboxLabel: {
        fontSize: '18px',
        marginLeft: 5
    }
}));

const Skills1 = ({ postJobData, setPostJobData, handleNext, setShowSkills1 }) => {
    const classes = useStyles();
    const [value, setValue] = useState('')

    const handler = () => {
        setPostJobData({ ...postJobData, levelOfExpertise: value })
        if (value === '') {
            alert('Please select your Expertise.')
        }
        else {
            handleNext()
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={10} lg={7} className='ps-lg-4 mb-5'>
                        <h1 className='mb-5 project-title'>Select level of expertise</h1>
                        <FormControl component="fieldset">
                            <RadioGroup name="expertise" onChange={(e) => setValue(e.target.value)}>
                                <FormControlLabel classes={{ label: classes.checkboxLabel }} value="entry" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Entry" />
                                <p className='mt-2 mb-5 ms-5 text-muted'>Looking for someone relatively new to the field </p>
                                <FormControlLabel classes={{ label: classes.checkboxLabel }} value="intermediate" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Intermediate" />
                                <p className='mt-2 mb-5 ms-5 text-muted'>Looking for a good amount of experience in the field</p>
                                <FormControlLabel classes={{ label: classes.checkboxLabel }} value="Expert" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Expert" />
                                <p className='mt-2 ms-5 text-muted'>Looking a comprehensive and deep experience in the field</p>
                            </RadioGroup>
                        </FormControl>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
            <div className='d-flex postButtons-box mt-5'>
                <Button
                    className='back-btn'
                    onClick={() => setShowSkills1(false)}
                >
                    Back
                </Button>
                <Button
                    className='submit-btn'
                    onClick={handler}
                >
                    Continue
                </Button>
            </div>
            </Container>
        </>
    );
}

export default Skills1;