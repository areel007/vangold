import React, { useState } from "react";
import SelectDropdown from "../select-dropdown/select-dropdown";
import {years} from "../steps/years";

const Category = () => {
    const [showDropdownFrom, setShowDropdownFrom] = useState(false)
    const [showDropdownTo, setShowDropdownTo] = useState(false)
    const [selectDropdownHeaderFrom, setSelectDropdownHeaderFrom] = useState("Select a Category")
    const [selectDropdownHeaderTo, setSelectDropdownHeaderTo] = useState("Select a Subcategory")

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
        <div className="freelancer-regs-step">
            <p className="step-title">Category</p>
            <span className="step-subtitle">What is the main service you offer?</span>
            <div className="f-select-category">
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
    )
}

export default Category