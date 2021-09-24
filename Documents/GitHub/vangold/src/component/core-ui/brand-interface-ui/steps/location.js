import React, { useState } from "react";
import SelectDropdown from "../../select-dropdown/select-dropdown";
import {years} from "../../steps/years";

const BrLocation = () => {
    const [showDropdownFrom, setShowDropdownFrom] = useState(false)
    const [showDropdownTo, setShowDropdownTo] = useState(false)
    const [selectDropdownHeaderFrom, setSelectDropdownHeaderFrom] = useState("Select a Country")
    const [selectDropdownHeaderTo, setSelectDropdownHeaderTo] = useState("Select a State")

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
    return (
        <div className="b-step">
            <p className="b-step-title">Location</p>
            <span className="b-step-subtitle">Where is your company located?</span>
            <div className="location-br-select">
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
            <p className="location-p">We take privacy very seriously. Only your country and city will be revealed to clients</p>
            <form className="br-location-form">
                <div className="vangold-input Address">
                    <label>Address</label>
                    <input type="text" />
                </div>
                <div className="vangold-input zip-postal-code">
                    <label>Zip/Postal Code</label>
                    <input type="email" />
                </div>
            </form>
        </div>
    )
}

export default BrLocation