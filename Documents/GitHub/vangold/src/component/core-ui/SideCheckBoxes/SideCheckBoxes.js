import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    withStyles,
} from "@material-ui/core";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Form } from "react-bootstrap";
import "./SideCheckBoxes.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        fontSize: "16px",
        marginTop: "2rem",
    },
    listItemText: {
        fontSize: "16px",
        fontWeight: "700"
    },
    label: {
        fontSize: "14px",
    },

}));

const GreenCheckbox = withStyles({
    root: {
        '&$checked': {
            color: "#45B618",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const SideCheckBoxes = ({ showCheck }) => {
    const classes = useStyles();
    const [setValue] = useState('')
    const [checkValue, setCheckValue] = useState('')
    const [employementTypes, setEmployementTypes] = useState(true);
    const [experience, setExperience] = useState(true);
    const [salaryRange, setSalaryRange] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }
    const handleChange = (e) => {
        setCheckValue(e.target.value)
        console.log(checkValue);
    };

    return (
        <>
            <div className="sidecheck-bg-1">
                <h1 className="sidecheck-head">Create Job Alert</h1>
                <p style={{ fontSize: "14px" }}>Create a job alert now and never
                    miss a job.</p>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mt-5 mb-4">
                        <Form.Control required size='lg' placeholder="Enter job keyword" />
                    </Form.Group>
                    <button type="submit" className="sidecheck-btn">Create Job Alert</button>
                </Form>
            </div>

            {/* ----------------------------------CHECK BOXES STARTS FROM HERE------------------------------ */}
            <div className={`${classes.root} ${!showCheck && "sidecheck-bg-2"}`}>
                <List component="nav">

                    {/* ---------------------------Type of Employment check boxes---------------------- */}
                    <ListItem
                        button
                        onClick={() => {
                            setEmployementTypes(!employementTypes);
                        }}
                    >
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary="Type of Employment"
                        />
                        {employementTypes ? <MdExpandLess /> : <MdExpandMore />}
                    </ListItem>

                    <Collapse in={employementTypes} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormGroup>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Figma" onChange={handleChange} />}
                                                label="Figma"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Sketch" onChange={handleChange} />}
                                                label="Sketch"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Adobe XD" onChange={handleChange} />}
                                                label="Adobe XD"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Adobe Illustrator" onChange={handleChange} />}
                                                label="Adobe Illustrator"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Adobe Photoshop" onChange={handleChange} />}
                                                label="Adobe Photoshop"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                    </FormGroup>
                                </FormControl>
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* ---------------------------Experience check boxes---------------------- */}
                    <ListItem
                        button
                        onClick={() => {
                            setExperience(!experience);
                        }}
                    >
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary="Experience"
                        />
                        {experience ? <MdExpandLess /> : <MdExpandMore />}
                    </ListItem>

                    <Collapse in={experience} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormGroup>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Less than 1 year" onChange={handleChange} />}
                                                label="Less than 1 year"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="1-3 years" onChange={handleChange} />}
                                                label="1-3 years"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="More than 3 years" onChange={handleChange} />}
                                                label="More than 3 years"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                    </FormGroup>
                                </FormControl>
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* ---------------------------Salary Range check boxes---------------------- */}
                    <ListItem
                        button
                        onClick={() => {
                            setSalaryRange(!salaryRange);
                        }}
                    >
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary="Salary Range"
                        />
                        {salaryRange ? <MdExpandLess /> : <MdExpandMore />}
                    </ListItem>

                    <Collapse in={salaryRange} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormGroup>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Less than 1000USD" onChange={handleChange} />}
                                                label="Less than 1000USD"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="1000-10000USD" onChange={handleChange} />}
                                                label="1000-10000USD"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="10000USD and above" onChange={handleChange} />}
                                                label="10000USD and above"
                                            />
                                            <div className='sidecheck-numb'>64</div>
                                        </div>
                                    </FormGroup>
                                </FormControl>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <div className='text-center d-lg-none'>
                    <button className='btn-apply-filter'>Apply Filter</button>
                </div>
            </div>
        </>
    );
};

export default SideCheckBoxes;
