import React, { useState } from "react";
import SelectDropdown from "../../select-dropdown/select-dropdown";
import {years} from "../../steps/years";

const Category = () => {
    const [showDropdownFrom, setShowDropdownFrom] = useState(false)
    const [selectDropdownHeaderFrom, setSelectDropdownHeaderFrom] = useState("Select a Category")

    const upDateDropdownHeaderFrom = (event) => {
        setSelectDropdownHeaderFrom(event.target.innerText)
        setShowDropdownFrom(false)
    }

    const toggleDropdownFrom = () => {
        if (!showDropdownFrom) {
            setShowDropdownFrom(true)
        } else {
            setShowDropdownFrom(false)
        }
    }

    return (
        <div style={{height: "300px"}} className="b-step">
            <p className="b-step-title">Category</p>
            <span className="b-step-subtitle">Give a brief description about yourself</span>
            <SelectDropdown
                dataToDisplay={years}
                toggleDropdown={toggleDropdownFrom}
                showDropdown={showDropdownFrom}
                selectDropdownHeader={selectDropdownHeaderFrom}
                upDateDropdownHeader={upDateDropdownHeaderFrom}
            />
        </div>
    )
}

export default Category