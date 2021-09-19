import "./style.css"
import React, { useState } from "react";
import {languages} from "../../steps/languageData";
import SelectDropdown from "../../select-dropdown/select-dropdown";

const LanguageSelect = props => {
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
        <div className="lang-select-component">
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
    )
}

export default LanguageSelect