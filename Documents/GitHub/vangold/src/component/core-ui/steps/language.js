import React, { useState } from "react";
import "./steps.css"
import LanguageSelect from "../inputs/select/f-language-select"
import { FiPlus } from 'react-icons/fi';
import SelectDropdown from "../select-dropdown/select-dropdown";
import {languages} from "../../core-ui/steps/languageData"
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const Language = (props) => {
    const [modal, setModal] = useState(false);
    const [showDropdownTo, setShowDropdownTo] = useState(false)
    const [selectDropdownHeaderTo, setSelectDropdownHeaderTo] = useState("Select")

    const upDateDropdownHeaderTo = (event) => {
        setSelectDropdownHeaderTo(event.target.innerText)
        setShowDropdownTo(false)
    }

    const toggleDropdownTo = () => {
        if (!showDropdownTo) {
            setShowDropdownTo(true)
        } else {
            setShowDropdownTo(false)
        }
    }
    return (
        <div className="step">
            <p className="step-title">Language</p>
            <span className="step-subtitle">What is your English proficiency level?</span>
            <LanguageSelect />
            <p className="language-p">What other languages do you speak?</p>
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
                    <form action="">
                        <div className="form-input">
                            <label htmlFor="Language">Language</label>
                            <input type="text" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="Proficiency">Proficiency</label>
                            <div className="languageSelectTwo">
                                <SelectDropdown
                                    dataToDisplay={languages}
                                    toggleDropdown={toggleDropdownTo}
                                    showDropdown={showDropdownTo}
                                    selectDropdownHeader={selectDropdownHeaderTo}
                                    upDateDropdownHeader={upDateDropdownHeaderTo}
                                />
                            </div>
                        </div>
                        <div className="edu-btns">
                            <button className="button1" onClick={() => setModal(false)} color="primary">
                                Cancel
                            </button>
                            <button className="button2" onClick={ () => { setModal(false) } } color="primary">
                                Save and Next
                            </button>
                        </div>
                    </form>
                </div>
            </PureModal>;
        </div>
    )
}

export default Language;