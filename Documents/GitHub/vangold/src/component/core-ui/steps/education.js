import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./steps.css"
import { FiPlus } from 'react-icons/fi';
import "react-datepicker/dist/react-datepicker.css";
import {v4 as uuidv4} from "uuid"
import SelectDropdown from "../select-dropdown/select-dropdown";
import {years} from "./years"
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const Education = (props) => {
    const [modal, setModal] = useState(false);
    const [open, setOpen] = useState(false);
    // const [startDate, setStartDate] = useState(new Date());
    // const [startDateTwo, setStartDateTwo] = useState(new Date());
    const [educationHistory, setEducationHistory] = useState([])
    const [schoolInput, setSchoolInput] = useState("")
    const [schoolDegree, setSchoolDegree] = useState("")
    const [course, setCourse] = useState("")
    const [showDropdownFrom, setShowDropdownFrom] = useState(false)
    const [showDropdownTo, setShowDropdownTo] = useState(false)
    const [selectDropdownHeaderFrom, setSelectDropdownHeaderFrom] = useState("From")
    const [selectDropdownHeaderTo, setSelectDropdownHeaderTo] = useState("To")
    // const [from, setFrom] = useState("")
    // const [to, setTo] = useState("")

    //Actions - Methods

    const upDateDropdownHeaderFrom = (event) => {
        setSelectDropdownHeaderFrom(event.target.innerText)
        setShowDropdownFrom(false)
    }

    const upDateDropdownHeaderTo = (event) => {
        setSelectDropdownHeaderTo(event.target.innerText)
        setShowDropdownTo(false)
    }

    const toggleDropdownFrom = () => {
        if (!showDropdownFrom) {
            setShowDropdownFrom(true)
        } else {
            setShowDropdownFrom(false)
        }
    }

    const toggleDropdownTo = () => {
        if (!showDropdownTo) {
            setShowDropdownTo(true)
        } else {
            setShowDropdownTo(false)
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
                from: selectDropdownHeaderFrom,
                to: selectDropdownHeaderTo
            }
        ])
        setSchoolInput("")
        setSchoolDegree("")
        setCourse("")
        setSelectDropdownHeaderFrom("From")
        setSelectDropdownHeaderTo("To")
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
            <p className="step-title">Education</p>
            <span className="step-subtitle">Add the schools you attended, course of study and degrees earned</span>
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
            <button className="add_edu-btn" onClick={() => setModal(true)}><FiPlus /> Add Education</button>
            <PureModal className="modal__body"
                header={
                    <div className="modalformHeader">
                        <h2>Add Education</h2>
                    </div>
                }
                isOpen={modal}
                onClose={() => {
                    setModal(false);
                    return true;
                }}
                >
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
                            <input
                                type="text"
                                value={course}
                                onChange={onCourseInputChange}
                            />
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
                                <SelectDropdown
                                    dataToDisplay={years}
                                    toggleDropdown={toggleDropdownFrom}
                                    showDropdown={showDropdownFrom}
                                    selectDropdownHeader={selectDropdownHeaderFrom}
                                    upDateDropdownHeader={upDateDropdownHeaderFrom}
                                />
                                <SelectDropdown
                                    dataToDisplay={years}
                                    toggleDropdown={toggleDropdownTo}
                                    showDropdown={showDropdownTo}
                                    selectDropdownHeader={selectDropdownHeaderTo}
                                    upDateDropdownHeader={upDateDropdownHeaderTo}
                                />
                            </div>
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
                                Save and Next
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

export default Education;