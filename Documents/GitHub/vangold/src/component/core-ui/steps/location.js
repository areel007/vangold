import {useEffect, useState} from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import SelectCountry from "../select-dropdown/select-country";

 
const Location = (props) => {
    const [countries, setCountries] = useState([]);
    const [showDropdownCountries, setShowDropdownCountries] = useState(false)
    const [selectDropdownHeaderCountries, setSelectDropdownCountries] = useState('Select a country')

    useEffect(() => {
        axios.get('https://countriesnow.space/api/v0.1/countries/states')
            .then(res => {
                setCountries([...countries, res.data.name])
                console.log(countries)
            })
            .then(res => console.log(countries))
    })

    const toggleDropdownCountries = () => {
        if (!showDropdownCountries) {
            setShowDropdownCountries(true)
        } else {
            setShowDropdownCountries(false)
        }
    }

    return (
        <div className="step">
            <p className="step-title">Location</p>
            <span className="step-subtitle">Where do you live?</span>
            <div className="location-br-select">
                <SelectCountry
                    dataToDisplay={countries}
                    toggleDropdown={toggleDropdownCountries}
                    showDropdown={showDropdownCountries}
                    selectDropdownHeader={selectDropdownHeaderCountries}
                    upDateDropdownHeader={null}
                />
            </div>
            <p className="location-p">We take privacy very seriously. Only your country and city will be revealed to clients</p>
            <form className="location-form">
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

export default Location