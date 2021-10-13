import { Button, FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Scope1 from "./Scope1";

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


const Scope = ({ postJobData, setPostJobData, handleNext, handleBack, showScope1, setShowScope1 }) => {
    const classes = useStyles();
    const [value, setValue] = useState('')

    const handler = () => {
        setPostJobData({ ...postJobData, projectScope: value })
        if (value === '') {
            alert('Please select the scope your project.')
        }
        else if (value === 'large') {
            setShowScope1(true)
        } else {
            handleNext()
        }
    }
    return (
        <>
            {!showScope1 ? (
                <>
                    <Container>
                        <Row>
                            <Col className='ps-lg-4 mb-5'>
                                <h1 className='mb-5 project-title'>Estimate the scope of your project</h1>
                                <FormControl component="fieldset">
                                    <RadioGroup name="expertise" onChange={(e) => setValue(e.target.value)}>
                                        <FormControlLabel classes={{ label: classes.checkboxLabel }} value="large" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Large" />
                                        <p className='mt-2 mb-5 ms-5 text-muted'>Longer term project e.g design a full mobile application</p>
                                        <FormControlLabel classes={{ label: classes.checkboxLabel }} value="medium" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Medium" />
                                        <p className='mt-2 mb-5 ms-5 text-muted'>Well defined projects e.g design a landing page</p>
                                        <FormControlLabel classes={{ label: classes.checkboxLabel }} value="small" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Small" />
                                        <p className='mt-2 ms-5 text-muted'>Straigthforward tasks e.g quick update on a webpage</p>
                                    </RadioGroup>
                                </FormControl>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                    <div className='d-flex postButtons-box mt-5'>
                        <Button
                            className='back-btn'
                            onClick={handleBack}
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
            ) : <Scope1 postJobData={postJobData} setPostJobData={setPostJobData} handleNext={handleNext} setShowScope1={setShowScope1} />
            }
        </>
    );
}

export default Scope;