import { Button, FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import watch from "../../../../../../assets/images/postJobImgs/watch.png";
import document from "../../../../../../assets/images/postJobImgs/document.png";
import InputAmount from "./InputAmount";

const useStyles = makeStyles((theme) => ({
    radio: {
        position: 'absolute',
        top: 0,
        right: 0,
        '&$checked': {
            color: '#45b618'
        }
    },
    checked: {},
    checkboxLabel: {
        position: 'absolute',
        top: 33,
        right: 28,
        fontSize: '16px',
        color: "#767676",
        padding: '2rem'
    }
}));

const Budget = ({ postJobData, setPostJobData, handleBack }) => {
    const classes = useStyles();
    const [value, setValue] = useState('')

    const handler = () => {
        setPostJobData({ ...postJobData, budgetSelect: value })
        if (value === '') {
            alert('Please select the time period you wanna work.')
        }
        alert('Thank you')
    }

    return (
        <>
            <h1 className='mb-5 project-title'>Almost done! Tell us about your budget</h1>
            <FormControl component="fieldset">
                <RadioGroup row name="expertise" onChange={(e) => setValue(e.target.value)}>
                    <div className='custom-radioo me-3 me-md-5'>
                        <img className='radio-icon' src={watch} alt="watch" />
                        <FormControlLabel labelPlacement="bottom" classes={{ label: classes.checkboxLabel }} value="Hourly Rate" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Hourly Rate" />
                    </div>
                    <div className='custom-radioo'>
                        <img className='radio-icon' src={document} alt="document" />
                        <FormControlLabel labelPlacement="bottom" classes={{ label: classes.checkboxLabel }} value="Project Budget" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label="Project Budget" />
                    </div>
                </RadioGroup>
            </FormControl>

                <InputAmount postJobData={postJobData} setPostJobData={setPostJobData} />

            <div className='d-flex justify-content-between' style={{ marginTop: "5rem" }}>
                <Button
                    className='back-btnn'
                    onClick={handleBack}
                >
                    Back
                </Button>
                <Button
                    className='submit-btnn me-3 me-md-5'
                    onClick={handler}
                >
                    Post Job
                </Button>
            </div>
        </>
    );
}

export default Budget;