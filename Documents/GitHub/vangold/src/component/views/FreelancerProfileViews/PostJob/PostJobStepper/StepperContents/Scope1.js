import { Button, FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    radio: {
        marginTop: 10,
        '&$checked': {
            color: '#45b618'
        }
    },
    checked: {},
    checkboxLabel: {
        fontSize: '16px',
        marginLeft: 5,
        marginTop: 10,
        color: "#767676"
    }
}));

const Scope1 = ({ postJobData, setPostJobData, handleNext, setShowScope1 }) => {
    const classes = useStyles();
    const [value, setValue] = useState('')

    const handler = () => {
        setPostJobData({ ...postJobData, workTime: value })
        if (value === '') {
            alert('Please select the time period you wanna work.')
        }
        else {
            handleNext()
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={10} lg={7} className='offset-1 ps-lg-4 mb-5'>
                        <h1 className='project-title'>Large</h1>
                        <p className='mt-3 mb-5 text-muted'>Longer term project e.g design a full mobile application</p>
                        <p className='mb-4'>How long will your work take</p>
                        <FormControl component="fieldset">
                            <RadioGroup name="expertise" onChange={(e) => setValue(e.target.value)}>
                                <FormControlLabel classes={{ label: classes.checkboxLabel }} value="1 to 3 Months" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="1 to 3 Months" />
                                <FormControlLabel classes={{ label: classes.checkboxLabel }} value="3 to 6 Months" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="3 to 6 Months" />
                                <FormControlLabel classes={{ label: classes.checkboxLabel }} value="More than 6 Months" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="More than 6 Months" />
                            </RadioGroup>
                        </FormControl>
                    </Col>
                </Row>
            </Container>

            <div className='d-flex justify-content-md-between mt-5 justify-content-around'>
                <Button
                    className='back-btn'
                    onClick={() => setShowScope1(false)}
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
        </>
    );
}

export default Scope1;