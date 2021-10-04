import React, { useState } from "react";
import "./steps.css"
import { FiPlus } from 'react-icons/fi';
import SelectDropdown from "../select-dropdown/select-dropdown";
import SelectLanguageDropDown from "../select-dropdown/select-language-dropdown";
// import {languages} from "../../core-ui/steps/languageData"
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import {languages} from "./language-option";

const Language = (props) => {
    const [modal, setModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectDropdownHeader, setSelectDropdownHeader] = useState("Select")
    const [language, setLanguage] = useState([])
    const [languageInput, setLanguageInput] = useState("")

    const upDateDropdownHeader = (event) => {
        setSelectDropdownHeader(event.target.innerText)
        setShowDropdown(false)
    }

    const toggleDropdown = () => {
        if (!showDropdown) {
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    const onLanguageInputChange = (event) => {
        setLanguageInput(event.target.value)
    }

    const addLanguage = () => {
        setLanguage([
            ...language,
            {
                language: languageInput,
                proficiency: selectDropdownHeader
            }
        ])
        setLanguageInput("")
        setSelectDropdownHeader("Select")
    }

    return (
        <div className="step">
            <p className="step-title">Language</p>
            <span className="step-subtitle">What is your English proficiency level?</span>
            <SelectDropdown
                dataToDisplay={languages}
                toggleDropdown={toggleDropdown}
                showDropdown={showDropdown}
                selectDropdownHeader={selectDropdownHeader}
                upDateDropdownHeader={upDateDropdownHeader}
            />
            <p className="language-p">What other languages do you speak?</p>
            <div className="languages__language">
                {
                    language.map(_language => {
                        return <div className="language-and-proficiency">
                            <div className="language__proficiency">
                                <p className="language-chosen">{_language.language}</p>
                                <p className="language-proficiency">{_language.proficiency}</p>
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
            <button style={{width: "176px"}} className="add_edu-btn add_employ-btn" onClick={() => setModal(true)}><FiPlus /> Add Languages </button>
            <PureModal className="modal__body"
                header={
                    <div className="modalformHeader">
                        <h2>Add Language</h2>
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
                            <label htmlFor="Language">Language</label>
                            <input
                                type="text"
                                value={languageInput}
                                onChange={onLanguageInputChange}
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Proficiency">Proficiency</label>
                            <div className="languageSelectTwo">
                            <SelectDropdown
                                dataToDisplay={languages}
                                toggleDropdown={toggleDropdown}
                                showDropdown={showDropdown}
                                selectDropdownHeader={selectDropdownHeader}
                                upDateDropdownHeader={upDateDropdownHeader}
                            />
                            </div>
                        </div>
                        <div className="edu-btns">
                            <button className="button1" onClick={() => setModal(false)} color="primary">
                                Cancel
                            </button>
                            <button className="button2" onClick={ () => { addLanguage(); setModal(false) } } color="primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </PureModal>;
        </div>
    )
}

export default Language;