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
import {v4 as uuidv4} from "uuid"
import SelectDropdown from "../select-dropdown/select-dropdown";
import {years} from "./years";
import {months} from "./months";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

  const styles = {
    paper: { 
        maxWidth: "850px",
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
    const [modal, setModal] = useState(false);
    const [educationHistory, setEducationHistory] = useState([])
    const [schoolInput, setSchoolInput] = useState("")
    const [schoolDegree, setSchoolDegree] = useState("")
    const [course, setCourse] = useState("")
    // const [dataToDisplay] = useState(years)
    const [showDropdownMonth, setShowDropdownMonth] = useState(false)
    const [showDropdownMonthTwo, setShowDropdownMonthTwo] = useState(false)
    const [showDropdownYears, setShowDropdownYears] = useState(false)
    const [showDropdownYearsTwo, setShowDropdownYearsTwo] = useState(false)
    const [selectDropdownHeaderMonth, setSelectDropdownHeaderMonth] = useState("Month")
    const [selectDropdownHeaderMonthTwo, setSelectDropdownHeaderMonthTwo] = useState("Month")
    const [selectDropdownHeaderYears, setSelectDropdownHeaderYears] = useState("Year")
    const [selectDropdownHeaderYearsTwo, setSelectDropdownHeaderYearsTwo] = useState("Year")
    // const [from, setFrom] = useState("")
    // const [to, setTo] = useState("")

    //Actions - Methods

    const upDateDropdownHeaderMonth = (event) => {
        setSelectDropdownHeaderMonth(event.target.innerText)
        setShowDropdownMonth(false)
    }
    const upDateDropdownHeaderMonthTwo = (event) => {
        setSelectDropdownHeaderMonthTwo(event.target.innerText)
        setShowDropdownMonthTwo(false)
    }

    const upDateDropdownHeaderYears = (event) => {
        setSelectDropdownHeaderYears(event.target.innerText)
        setShowDropdownYears(false)
    }
    const upDateDropdownHeaderYearsTwo = (event) => {
        setSelectDropdownHeaderYearsTwo(event.target.innerText)
        setShowDropdownYearsTwo(false)
    }

    const toggleDropdownMonth = () => {
        if (!showDropdownMonth) {
            setShowDropdownMonth(true)
        } else {
            setShowDropdownMonth(false)
        }
    }
    const toggleDropdownMonthTwo = () => {
        if (!showDropdownMonthTwo) {
            setShowDropdownMonthTwo(true)
        } else {
            setShowDropdownMonthTwo(false)
        }
    }

    const toggleDropdownYears = () => {
        if (!showDropdownYears) {
            setShowDropdownYears(true)
        } else {
            setShowDropdownYears(false)
        }
    }
    const toggleDropdownYearsTwo = () => {
        if (!showDropdownYears) {
            setShowDropdownYearsTwo(true)
        } else {
            setShowDropdownYearsTwo(false)
        }
    }

    const onSchoolInputChange = (event) => {
        setSchoolInput(event.target.value)
    }

    const onSchoolDegreeChange = (event) => {
        setSchoolDegree(event.target.value)
    }

    const onCourseInputChange = (event) => {
        setCourse(event.target.value)
    }

    const onFormSubmit = () => {
        setEducationHistory([
            ...educationHistory,
            {
                schoolName: schoolInput,
                degree: schoolDegree,
                course: course,
                id: uuidv4(),
                from: selectDropdownHeaderMonth,
                to: selectDropdownHeaderYears
            }
        ])
        setSchoolInput("")
        setSchoolDegree("")
    }

    const editHistory = (history) => {
        setModal(true)
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
    return (
        <div className="step">
            <p className="step-title">Employment</p>
            <span className="step-subtitle">Add your work experience and boost your credibility in the process</span>
            <div className="education-history__education">
                {
                    educationHistory.map((_educationHistory, index) => {
                        return <div className="education-history" key={index}>
                            <div className="school-name-and-degree">
                                <p className="school-name">{_educationHistory.schoolName}</p>
                                <p className="degree">
                                    {_educationHistory.degree} - {_educationHistory.course} <br/>
                                    {_educationHistory.from} - {_educationHistory.to}
                                </p>
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
            <button className="add_edu-btn add_employ-btn" onClick={() => setModal(true)}><FiPlus /> Add Employment</button>

            <PureModal className="modal__body"
                header={
                    <div className="modalformHeader">
                        <h2>Add Employment</h2>
                    </div>
                }
                isOpen={modal}
                onClose={() => {
                    setModal(false);
                    return true;
                }}
                >
                <div className="edu__form">
                    <form action="">
                        <div className="form-input">
                            <label htmlFor="Company">Company</label>
                            <input type="text" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Position">Position</label>
                            <input type="text" />
                        </div>
                        <div className="datePickerBox">
                            <label htmlFor="Duration of Employment">Duration of Employment</label>
                            <div className="inn__datePickerBox">
                            <SelectDropdown
                                    dataToDisplay={months}
                                    toggleDropdown={toggleDropdownMonth}
                                    showDropdown={showDropdownMonth}
                                    selectDropdownHeader={selectDropdownHeaderMonth}
                                    upDateDropdownHeader={upDateDropdownHeaderMonth}
                                />
                                <SelectDropdown
                                    dataToDisplay={years}
                                    toggleDropdown={toggleDropdownYears}
                                    showDropdown={showDropdownYears}
                                    selectDropdownHeader={selectDropdownHeaderYears}
                                    upDateDropdownHeader={upDateDropdownHeaderYears}
                                />
                            </div>
                        </div>
                        <div className="datePickerBox datePickerBox__TO">
                            <label htmlFor="Duration of Employment">to</label>
                            <div className="inn__datePickerBox">
                            <SelectDropdown
                                    dataToDisplay={months}
                                    toggleDropdown={toggleDropdownMonthTwo}
                                    showDropdown={showDropdownMonthTwo}
                                    selectDropdownHeader={selectDropdownHeaderMonthTwo}
                                    upDateDropdownHeader={upDateDropdownHeaderMonthTwo}
                                />
                                <SelectDropdown
                                    dataToDisplay={years}
                                    toggleDropdown={toggleDropdownYearsTwo}
                                    showDropdown={showDropdownYearsTwo}
                                    selectDropdownHeader={selectDropdownHeaderYearsTwo}
                                    upDateDropdownHeader={upDateDropdownHeaderYearsTwo}
                                />
                            </div>
                        </div>
                        <div className="form-input">
                            <label htmlFor="Location">Location</label>
                            <input type="text" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Description">Description</label>
                            <textarea></textarea>
                        </div>
                        <div className="edu-btns">
                            <button className="button1" onClick={() => setModal(false)} color="primary">
                                Cancel
                            </button>
                            <button className="button2" onClick={ () => { onOnclickHandler(); onFormSubmit(); setModal(false) } } color="primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </PureModal>;
            <div className="skip_this_step">
                <Link to="#">Skip this step</Link>
            </div>
        </div>
    )
}

export default withStyles(styles)(Employment);