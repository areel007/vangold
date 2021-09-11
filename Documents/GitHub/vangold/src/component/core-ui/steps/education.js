import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./steps.css"
import { FiPlus } from 'react-icons/fi';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {v4 as uuidv4} from "uuid";
import YearsSelect from "../inputs/select/years-select";

  const styles = {
    paper: { 
        minWidth: "850px",
        paddingTop: "20px",
    },
    Button1: {
      backgroundColor: 'rgba(69, 182, 24, 0.3)',
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'mulish',
      fontSize: '18px',
      textAlign: 'center',
      width: '106px',
      textTransform: 'capitalize',
      height: '39px',
      color: '#45B618',
    '&:hover': {
        backgroundColor: 'rgba(69, 182, 24, 0.3)',
      }
    },
    Button2: {
      backgroundColor: '#45B618',
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
      textAlign: 'center',
      fontFamily: 'mulish',
      textTransform: 'capitalize',
      width: '174px',
      height: '39px',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#45B618',
      }
    }
  };
const Education = (props) => {
    const [open, setOpen] = React.useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [startDateTwo, setStartDateTwo] = useState(new Date());
    const [educationHistory, setEducationHistory] = useState([])

    const [schoolInput, setSchoolInput] = useState("")

    const [schoolDegree, setSchoolDegree] = useState("")

    //Actions - Methods

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSchoolInputChange = (event) => {
        setSchoolInput(event.target.value)
    }

    const onSchoolDegreeChange = (event) => {
        setSchoolDegree(event.target.value)
    }

    const onFormSubmit = () => {
        setEducationHistory([...educationHistory, {schoolName: schoolInput, degree: schoolDegree, id: uuidv4()}])
        setSchoolInput("")
        setSchoolDegree("")
    }

    const editHistory = (history) => {
        setOpen(true)
        setSchoolInput(history.schoolName)
        setSchoolDegree(history.degree)
        if (schoolInput !== history.schoolName || schoolDegree !== history.degree) {
            deleteHistory(history)
        }
    }

    const deleteHistory = ({id}) => {
        setEducationHistory(educationHistory.filter((education) => education.id !== id))
    }

    let textInput = React.createRef();  // React use ref to get input value

  let onOnclickHandler = (e) => {
    console.log(textInput.current.value); 
  };
    const { classes } = props;
    return (
        <div className="step">
            <p className="step-title">Education</p>
            <span className="step-subtitle">Add the schools you attended, course of study and degrees earned</span>
            <div className="education-history__education">
                {
                    educationHistory.map((_educationHistory, index) => {
                        return <div className="education-history" key={index}>
                            <div className="school-name-and-degree">
                                <p className="school-name">{_educationHistory.schoolName}</p>
                                <p className="degree">{_educationHistory.degree}</p>
                            </div>
                            <div className="edit-and-delete-icon">
                                <div className="education__edit education-history__edit">
                                    <svg
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"
                                        onClick={() => editHistory(_educationHistory)}
                                    >
                                        <path d="M0 15.2496V18.9996H3.75L14.81 7.93957L11.06 4.18957L0 15.2496ZM17.71 5.03957C18.1 4.64957 18.1 4.01957 17.71 3.62957L15.37 1.28957C14.98 0.89957 14.35 0.89957 13.96 1.28957L12.13 3.11957L15.88 6.86957L17.71 5.03957Z" fill="#808080"/>
                                    </svg>
                                </div>
                                <div className="education-history__edit">
                                    <svg
                                        width="14"
                                        height="18"
                                        viewBox="0 0 14 18"
                                        fill="none"
                                        onClick={() => deleteHistory(_educationHistory)}
                                    >
                                        <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#808080"/>
                                    </svg>
                                </div>

                            </div>
                        </div>
                    })
                }

            </div>
            <button className="add_edu-btn" onClick={handleClickOpen}><FiPlus /> Add Education</button>
            <Dialog classes={{ paper: classes.paper}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle disableTypography className="DialogTitle">Add Education</DialogTitle>
                <DialogContent>
                <div className="edu__form">
                    <form>
                        <div className="form-input">
                            <label htmlFor="School">School</label>
                            <input
                                ref={textInput}
                                type="text"
                                value={schoolInput}
                                onChange={onSchoolInputChange}
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Area of Study">Area of Study</label>
                            <input type="text" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Degree">Degree</label>
                            <input
                                type="text"
                                value={schoolDegree}
                                onChange={onSchoolDegreeChange}
                            />
                        </div>
                        <div className="datePickerBox">
                            <label htmlFor="Degree">Date Attended</label>
                            <div className="inn__datePickerBox">
                                <YearsSelect toAdd = "From"/>
                                <YearsSelect toAdd = "To"/>
                            </div>
                        </div>
                        <div className="form-input">
                            <label htmlFor="Description">Description</label>
                            <textarea></textarea>
                        </div>
                        <DialogActions>
                            <div className="edu-btns">
                                <Button className={classes.Button1} onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button className={classes.Button2} onClick={ () => { handleClose(); onOnclickHandler(); onFormSubmit(); } } color="primary">
                                    Save and Next
                                </Button>
                            </div>
                        </DialogActions>
                    </form>
                </div>
                </DialogContent>
                
            </Dialog>
            <div className="skip_this_step">
                <Link to="#">Skip this step</Link>
            </div>
        </div>
    )
}

export default withStyles(styles)(Education);