import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./steps.css"
import { FiPlus } from 'react-icons/fi';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import SelectDropdown from "../select-dropdown/select-dropdown";
import {years} from "./years";
import {months} from "./months"
import {v4 as uuidv4} from "uuid";

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
const Employment = (props) => {
    const [open, setOpen] = useState(false);
    const [workExperience, setWorkExperience] = useState([])
    const [showStartMonths, setShowStartMonths] = useState(false)
    const [showStartYears, setShowStartYears] = useState(false)
    const [showEndMonths, setShowEndMonths] = useState(false)
    const [showEndYears, setShowEndYears] = useState(false)
    const [selectDropdownHeaderStartMonth, setSelectDropdownHeaderStartMonth] = useState("Month")
    const [selectDropdownHeaderStartYear, setSelectDropdownHeaderStartYear] = useState("Year")
    const [selectDropdownHeaderEndMonth, setSelectDropdownHeaderEndMonth] = useState("Month")
    const [selectDropdownHeaderEndYear, setSelectDropdownHeaderEndYear] = useState("Year")
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [location, setLocation] = useState("")
    // const [startMonth, setStarMonth] = useState("")
    // const [startYear, setStartYear] = useState("")
    // const [endMonth, setEndMonth] = useState("")
    // const [endYear, setEndYear] = useState("")


    //Actions - Methods

    const onCompanyChange = (event) => {
        setCompany(event.target.value)
    }

    const onLocationChange = (event) => {
        setLocation(event.target.value)
    }

    const onPositionChange = (event) => {
        setPosition(event.target.value)
    }

    const toggleStartMonths = () => {
        if (!showStartMonths) {
            setShowStartMonths(true)
        } else {
            setShowStartMonths(false)
        }
    }

    const toggleStartYears = () => {
        if (!showStartYears) {
            setShowStartYears(true)
        } else {
            setShowStartYears(false)
        }
    }

    const toggleEndMonths = () => {
        if (!showEndMonths) {
            setShowEndMonths(true)
        } else {
            setShowEndMonths(false)
        }
    }

    const toggleEndYears = () => {
        if (!showEndYears) {
            setShowEndYears(true)
        } else {
            setShowEndYears(false)
        }
    }

    const updateStartMonth = (event) => {
        setSelectDropdownHeaderStartMonth(event.target.innerText)
        setShowStartMonths(false)
    }

    const updateStartYear = (event) => {
        setSelectDropdownHeaderStartYear(event.target.innerText)
        setShowStartYears(false)
    }

    const tested = (event) => {
        setSelectDropdownHeaderEndMonth(event.target.innerText)
        setShowEndMonths(false)
    }

    const updateEndYear = (event) => {
        setSelectDropdownHeaderEndYear(event.target.innerText)
        setShowEndYears(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onFormSubmit = () => {
        setWorkExperience([
            ...workExperience,
            {
                company: company,
                position: position,
                location: location,
                startMonth: selectDropdownHeaderStartMonth,
                startYear: selectDropdownHeaderStartYear,
                endMonth: selectDropdownHeaderEndMonth,
                endYear: selectDropdownHeaderEndYear,
            }
        ])

    }

    const editHistory = (history) => {
        setOpen(true)
        setCompany(history.company)
        setPosition(history.position)

    }

    const deleteHistory = ({id}) => {
        setWorkExperience(workExperience.filter((employment) => employment.id !== id))
    }
    
    const { classes } = props;
    return (
        <div className="step">
            <p className="step-title">Employment</p>
            <span className="step-subtitle">Add your work experience and boost your credibility in the process</span>
            <div className="work-experience-history">
                {
                    workExperience.map((_workExperience, index) => {
                        return <div className="work__experience">
                            <div className="role-and-company">
                                <p className="position-and-company">{_workExperience.position} | {_workExperience.company}</p>
                                <p className="start-and-end-date">{_workExperience.startMonth} {_workExperience.startYear} - {_workExperience.endMonth==='Present'?_workExperience.endMonth:`${_workExperience.endMonth} ${_workExperience.endYear}`}</p>
                            </div>

                            <div className="edit-and-delete-icon">
                                <div className="education__edit education-history__edit">
                                    <svg
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"
                                        onClick={() => editHistory(_workExperience)}
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
                                        onClick={() => deleteHistory(_workExperience)}
                                    >
                                        <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#808080"/>
                                    </svg>
                                </div>

                            </div>
                        </div>
                    })
                }
            </div>
            <button className="add_edu-btn add_employ-btn" onClick={handleClickOpen}><FiPlus /> Add Employment</button>
            <Dialog classes={{ paper: classes.paper}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle disableTypography className="DialogTitle">Add Employment</DialogTitle>
                <DialogContent>
                <div className="edu__form">
                    <form>
                        <div className="form-input">
                            <label htmlFor="Company">Company</label>
                            <input
                                value={company}
                                onChange={onCompanyChange}
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Position">Position</label>
                            <input
                                type="text"
                                value={position}
                                onChange={onPositionChange}
                            />
                        </div>
                        <div className="datePickerBox">
                            <label>Duration of Employment</label>
                            <div className="inn__datePickerBox">
                                <SelectDropdown
                                    dataToDisplay={months}
                                    toggleDropdown={toggleStartMonths}
                                    showDropdown={showStartMonths}
                                    selectDropdownHeader={selectDropdownHeaderStartMonth}
                                    upDateDropdownHeader={updateStartMonth}
                                />
                                <SelectDropdown
                                    dataToDisplay={years}
                                    toggleDropdown={toggleStartYears}
                                    showDropdown={showStartYears}
                                    selectDropdownHeader={selectDropdownHeaderStartYear}
                                    upDateDropdownHeader={updateStartYear}
                                />
                            </div>
                        </div>
                        <div className="datePickerBox datePickerBox__TO">
                            <label>to</label>
                            <div className="inn__datePickerBox">
                                <SelectDropdown
                                    dataToDisplay={months}
                                    toggleDropdown={toggleEndMonths}
                                    showDropdown={showEndMonths}
                                    selectDropdownHeader={selectDropdownHeaderEndMonth}
                                    upDateDropdownHeader={tested}
                                />
                                <SelectDropdown
                                    dataToDisplay={years}
                                    toggleDropdown={toggleEndYears}
                                    showDropdown={showEndYears}
                                    selectDropdownHeader={selectDropdownHeaderEndYear}
                                    upDateDropdownHeader={updateEndYear}
                                />
                            </div>
                        </div>
                        <div className="form-input">
                            <label htmlFor="Location">Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={onLocationChange}
                            />
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
                                <Button
                                    className={classes.Button2}
                                    onClick={ () => { handleClose(); onFormSubmit() }}
                                    color="primary"
                                >
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

export default withStyles(styles)(Employment);