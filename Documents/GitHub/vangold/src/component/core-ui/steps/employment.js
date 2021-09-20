import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./steps.css"
import { FiPlus } from 'react-icons/fi';
import {v4 as uuidv4} from "uuid"
import SelectDropdown from "../select-dropdown/select-dropdown";
import {years} from "./years";
import {months} from "./months";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const Employment = (props) => {
    const [modal, setModal] = useState(false);
    const [employmentHistory, setEmploymentHistory] = useState([])
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [showDropdownMonthFrom, setShowDropdownMonthFrom] = useState(false)
    const [showDropdownMonthTo, setShowDropdownMonthTo] = useState(false)
    const [showDropdownYearsFrom, setShowDropdownYearsFrom] = useState(false)
    const [showDropdownYearsTo, setShowDropdownYearsTo] = useState(false)
    const [selectDropdownHeaderMonthFrom, setSelectDropdownHeaderMonthFrom] = useState("Month")
    const [selectDropdownHeaderMonthTo, setSelectDropdownHeaderMonthTo] = useState("Month")
    const [selectDropdownHeaderYearsFrom, setSelectDropdownHeaderYearsFrom] = useState("Year")
    const [selectDropdownHeaderYearsTo, setSelectDropdownHeaderYearsTo] = useState("Year")
    // const [from, setFrom] = useState("")
    // const [to, setTo] = useState("")

    //Actions - Methods

    const upDateDropdownHeaderMonthFrom = (event) => {
        setSelectDropdownHeaderMonthFrom(event.target.innerText)
        setShowDropdownMonthFrom(false)
    }
    const upDateDropdownHeaderMonthTo = (event) => {
        setSelectDropdownHeaderMonthTo(event.target.innerText)
        setShowDropdownMonthTo(false)
    }

    const upDateDropdownHeaderYearsFrom = (event) => {
        setSelectDropdownHeaderYearsFrom(event.target.innerText)
        setShowDropdownYearsFrom(false)
    }
    const upDateDropdownHeaderYearsTo = (event) => {
        setSelectDropdownHeaderYearsTo(event.target.innerText)
        setShowDropdownYearsTo(false)
    }

    const toggleDropdownMonthFrom = () => {
        if (!showDropdownMonthFrom) {
            setShowDropdownMonthFrom(true)
        } else {
            setShowDropdownMonthFrom(false)
        }
    }
    const toggleDropdownMonthTo = () => {
        if (!showDropdownMonthTo) {
            setShowDropdownMonthTo(true)
        } else {
            setShowDropdownMonthTo(false)
        }
    }

    const toggleDropdownYearsFrom = () => {
        if (!showDropdownYearsFrom) {
            setShowDropdownYearsFrom(true)
        } else {
            setShowDropdownYearsFrom(false)
        }
    }
    const toggleDropdownYearsTo = () => {
        if (!showDropdownYearsTo) {
            setShowDropdownYearsTo(true)
        } else {
            setShowDropdownYearsTo(false)
        }
    }

    const onCompany = (event) => {
        setCompany(event.target.value)
    }

    const onPosition = (event) => {
        setPosition(event.target.value)
    }

    const onFormSubmit = (e) => {
        setEmploymentHistory([
            ...employmentHistory,
            {
                company: company,
                position: position,
                id: uuidv4(),
                monthFrom: selectDropdownHeaderMonthFrom,
                monthTo: selectDropdownHeaderMonthTo,
                yearsFrom: selectDropdownHeaderYearsFrom,
                yearsTo: selectDropdownHeaderYearsTo
            }
        ])
        setPosition("")
        setCompany("")
        setSelectDropdownHeaderMonthFrom("Month")
        setSelectDropdownHeaderMonthTo("Month")
        setSelectDropdownHeaderYearsFrom("Year")
        setSelectDropdownHeaderYearsTo("Year")

    }

    const editEmployment = (history) => {
        alert('hhdjdj')
    }

    const deleteEmployment = ({id}) => {
        alert('hfhhfh')
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
                    employmentHistory.map((_employment, index) => {
                        return <div className="employment-history" key={index}>
                            <div className="company-and-position">
                                <p className="school-name">{_employment.position} | {_employment.company} </p>
                                <p className="date-from-to">
                                    {_employment.monthFrom} {_employment.yearsFrom} - {_employment.monthTo.toLowerCase()==='present'?'Present':_employment.monthTo} {_employment.monthTo.toLowerCase()==='present'?null:_employment.yearsTo}
                                </p>
                            </div>
                            <div className="edit-and-delete-icon">
                                <div className="education__edit education-history__edit">
                                    <svg
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"
                                        onClick={null}
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
                                        onClick={null}
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
                    <form>
                        <div className="form-input">
                            <label htmlFor="Company">Company</label>
                            <input type="text" value={company} onChange={onCompany} />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Position">Position</label>
                            <input type="text" value={position} onChange={onPosition} />
                        </div>
                        <div className="datePickerBox">
                            <label htmlFor="Duration of Employment">Duration of Employment</label>
                            <div className="inn__datePickerBox">
                            <SelectDropdown
                                    dataToDisplay={months}
                                    toggleDropdown={toggleDropdownMonthFrom}
                                    showDropdown={showDropdownMonthFrom}
                                    selectDropdownHeader={selectDropdownHeaderMonthFrom}
                                    upDateDropdownHeader={upDateDropdownHeaderMonthFrom}
                                />
                                <SelectDropdown
                                    dataToDisplay={years}
                                    toggleDropdown={toggleDropdownYearsFrom}
                                    showDropdown={showDropdownYearsFrom}
                                    selectDropdownHeader={selectDropdownHeaderYearsFrom}
                                    upDateDropdownHeader={upDateDropdownHeaderYearsFrom}
                                />
                            </div>
                        </div>
                        <div className="datePickerBox datePickerBox__TO">
                            <label htmlFor="Duration of Employment">to</label>
                            <div className="inn__datePickerBox">
                            <SelectDropdown
                                    dataToDisplay={months}
                                    toggleDropdown={toggleDropdownMonthTo}
                                    showDropdown={showDropdownMonthTo}
                                    selectDropdownHeader={selectDropdownHeaderMonthTo}
                                    upDateDropdownHeader={upDateDropdownHeaderMonthTo}
                                />
                                <SelectDropdown
                                    dataToDisplay={years}
                                    toggleDropdown={toggleDropdownYearsTo}
                                    showDropdown={showDropdownYearsTo}
                                    selectDropdownHeader={selectDropdownHeaderYearsTo}
                                    upDateDropdownHeader={upDateDropdownHeaderYearsTo}
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
                            <button className="button2" onClick={ () => { onFormSubmit(); setModal(false) } } color="primary">
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

export default Employment;