import {useEffect, useState} from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import SelectCountry from "../select-dropdown/select-country";
import SelectState from "../select-dropdown/select-state";

 
const Location = (props) => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [showDropdownCountries, setShowDropdownCountries] = useState(false)
    const [showDropdownStates, setShowDropdownStates] = useState(false)
    const [selectDropdownHeaderCountries, setSelectDropdownCountries] = useState('Select a country')
    const [selectDropdownHeaderStates, setSelectDropdownStates] = useState('Select a state')

    useEffect(() => {
        axios.get('https://countriesnow.space/api/v0.1/countries/')
            .then(res => {
                setCountries(res.data.data)
            })
            .then(res => {
                axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
                    country: selectDropdownHeaderCountries === 'Select a country' ? 'Nigeria' : selectDropdownHeaderCountries
                })
                    .then(res => {
                        setStates(res.data.data)
                        console.log(states)
                    })
            })
    })

    const toggleDropdownCountries = () => {
        if (!showDropdownCountries) {
            setShowDropdownCountries(true)
        } else {
            setShowDropdownCountries(false)
        }
    }

    const toggleDropdownStates = () => {
        if (!showDropdownStates) {
            setShowDropdownStates(true)
        } else {
            setShowDropdownStates(false)
        }
    }

    const updateDropdownHeaderCountries = (event) => {
        setSelectDropdownCountries(event.target.innerText)
        setShowDropdownCountries(false)
    }

    const updateDropdownHeaderStates = (event) => {
        setSelectDropdownStates(event.target.innerText)
        setShowDropdownStates(false)
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
                    upDateDropdownHeader={updateDropdownHeaderCountries}
                />
                <SelectState
                    dataToDisplay={states}
                    toggleDropdown={toggleDropdownStates}
                    showDropdown={showDropdownStates}
                    selectDropdownHeader={selectDropdownHeaderStates}
                    upDateDropdownHeader={updateDropdownHeaderStates}
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