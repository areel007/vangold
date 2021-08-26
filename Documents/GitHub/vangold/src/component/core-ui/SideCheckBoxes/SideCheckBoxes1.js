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
import "./SideCheckBoxes.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        fontSize: "16px",
        backgroundColor: "#D9DAD780",
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

const SideCheckBoxes1 = () => {
    const classes = useStyles();
    const [checkValue, setCheckValue] = useState('')
    const [skills, setSkills] = useState(true);
    const [tools, setTools] = useState(true);
    const [experience, setExperience] = useState(true);
    const [teamTypes, setTeamTypes] = useState(true);
    const [salaryRange, setSalaryRange] = useState(true);

    const handleChange = (e) => {
        setCheckValue(e.target.value)
        console.log(checkValue);
    };

    return (
        <>

            {/* ----------------------------------CHECK BOXES STARTS FROM HERE------------------------------ */}
            <div className={classes.root}>
                <List component="nav">

                    {/* ---------------------------Skills check boxes---------------------- */}
                    <ListItem
                        button
                        onClick={() => {
                            setSkills(!skills);
                        }}
                    >
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary="Skills"
                        />
                        {skills ? <MdExpandLess /> : <MdExpandMore />}
                    </ListItem>

                    <Collapse in={skills} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormGroup>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Designer" onChange={handleChange} />}
                                                label="Designer"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Visual Design" onChange={handleChange} />}
                                                label="Visual Design"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="UI/UX Designer" onChange={handleChange} />}
                                                label="UI/UX Designer"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Illustrations" onChange={handleChange} />}
                                                label="Illustrations"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="3D Artists" onChange={handleChange} />}
                                                label="3D Artists"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="3D Animation" onChange={handleChange} />}
                                                label="3D Animation"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="2D Animation" onChange={handleChange} />}
                                                label="2D Animation"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                    </FormGroup>
                                </FormControl>
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* ---------------------------Tools check boxes---------------------- */}
                    <ListItem
                        button
                        onClick={() => {
                            setTools(!tools);
                        }}
                    >
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary="Tools"
                        />
                        {tools ? <MdExpandLess /> : <MdExpandMore />}
                    </ListItem>

                    <Collapse in={tools} timeout="auto" unmountOnExit>
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
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Sketch" onChange={handleChange} />}
                                                label="Sketch"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Adobe XD" onChange={handleChange} />}
                                                label="Adobe XD"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Adobe Illustrator" onChange={handleChange} />}
                                                label="Adobe Illustrator"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Adobe Photoshop" onChange={handleChange} />}
                                                label="Adobe Photoshop"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
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
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="1-3 years" onChange={handleChange} />}
                                                label="1-3 years"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="More than 3 years" onChange={handleChange} />}
                                                label="More than 3 years"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                    </FormGroup>
                                </FormControl>
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* ---------------------------Team Types check boxes---------------------- */}
                    <ListItem
                        button
                        onClick={() => {
                            setTeamTypes(!teamTypes);
                        }}
                    >
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary="Team Types"
                        />
                        {teamTypes ? <MdExpandLess /> : <MdExpandMore />}
                    </ListItem>

                    <Collapse in={teamTypes} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormGroup>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Single Team" onChange={handleChange} />}
                                                label="Single Team"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="Multi Team" onChange={handleChange} />}
                                                label="Multi Team"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                    </FormGroup>
                                </FormControl>
                            </ListItem>
                        </List>
                    </Collapse>
                    {/* ---------------------------Salary Range boxes---------------------- */}
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
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="1000-10000USD" onChange={handleChange} />}
                                                label="1000-10000USD"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4'>
                                            <FormControlLabel
                                                classes={{ label: classes.label }}
                                                control={<GreenCheckbox value="10000USD and above" onChange={handleChange} />}
                                                label="10000USD and above"
                                            />
                                            <div className='align-self-center sidecheck-numb'>64</div>
                                        </div>
                                    </FormGroup>
                                </FormControl>
                            </ListItem>
                        </List>
                    </Collapse>

                </List>
            </div>
        </>
    );
};

export default SideCheckBoxes1;
